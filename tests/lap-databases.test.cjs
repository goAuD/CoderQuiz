const assert = require('node:assert/strict');
const { test } = require('node:test');
const { spawnSync } = require('node:child_process');
const banks = [
  require('../examples/lap-databases-1.json'),
  require('../examples/lap-databases-2.json'),
  require('../examples/lap-databases-3.json'),
];

const topicGroups = [[
  ['01', 'Datenbanksysteme', 'Datenbanksysteme'],
  ['02', 'Datenbankabfragen SQL SQL XML', 'Datenbankabfragen_SQL_SQL_XML'],
  ['03', 'DBMS', 'DBMS'],
  ['04', 'CMS', 'CMS'],
  ['05', 'Integritaet in Datenbanken', 'Integritaet_in_Datenbanken'],
  ['06', 'Redundanz in Datenbanken', 'Redundanz_in_Datenbanken'],
  ['07', 'Vorgehensweise bei der Datenmodellierung', 'Vorgehensweise_bei_der_Datenmodellierung'],
], [
  ['08', 'Grundlegende Datenbankoperationen', 'Grundlegende_Datenbankoperationen'],
  ['09', 'Erste drei Normalformen', 'Erste_drei_Normalformen'],
  ['10', 'Primaerschluessel Fremdschluessel Relationen', 'Primaerschluessel_Fremdschluessel_Relationen'],
  ['11', 'Index Vor und Nachteile', 'Index_Vor_und_Nachteile'],
  ['12', 'Freeware Datenbanken Vor und Nachteile', 'Freeware_Datenbanken_Vor_und_Nachteile'],
  ['13', 'Sicherungsmethoden', 'Sicherungsmethoden'],
  ['14', 'Sperrtabelle und Sperrverhalten', 'Sperrtabelle_und_Sperrverhalten'],
], [
  ['15', 'Betriebliches Informationssystem BIS', 'Betriebliches_Informationssystem_BIS'],
  ['16', 'ERP Systeme', 'ERP_Systeme'],
  ['17', 'BI und BW Systeme', 'BI_und_BW_Systeme'],
  ['18', 'Umsetzung von Datenmodellen in Datenbanken', 'Umsetzung_von_Datenmodellen_in_Datenbanken'],
  ['19', 'Zugriffsschnittstelle und Transaktionskonzept', 'Zugriffsschnittstelle_und_Transaktionskonzept'],
]];

for (const [index, bank] of banks.entries()) {
  const topics = topicGroups[index];
  const label = `Databases ${index + 1}`;
  const questionCount = topics.length * 5;

  test(`${label} covers its ${questionCount} source positions with stable topic links`, () => {
    assert.equal(bank.sourceRepository, 'https://github.com/goAuD/CoderLAP');
    assert.equal(bank.sourceCommit, 'cefce00affa0f357e7cc3e752abf082cad0ae1d0');
    assert.equal(bank.questions.length, questionCount);
    assert.equal(new Set(bank.questions.map(q => q.id)).size, questionCount);
    const positions = [];
    for (const [number, topic, directory] of topics) {
      for (let position = 1; position <= 5; position++) {
        positions.push(`LAP-16-${number}:${position}`);
        const q = bank.questions.find(q => q.id === `lap-LAP-16-${number}-${position}`);
        assert.ok(q, `missing LAP-16-${number}:${position}`);
        assert.equal(q.topic, topic);
        assert.equal(q.source.path, `16_Datenbanken_Datenmodelle_Datenstrukturen/${number}_${directory}/README.md`);
        assert.equal(q.source.slug, `16-${number}-${directory.toLowerCase()}`);
        assert.ok(Number.isInteger(q.revision) && q.revision > 0, q.id);
      }
    }
    assert.deepEqual(bank.questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`).sort(), positions.sort());
    for (const lang of ['de', 'hu']) {
      const ui = bank.ui[lang];
      for (const key of ['moduleTitle', 'subtitle', 'practiceNote']) assert.ok(ui[key].trim());
      assert.deepEqual(Object.keys(ui.topics).sort(), topics.map(([, topic]) => topic).sort());
      assert.ok(Object.values(ui.topics).every(label => typeof label === 'string' && label.trim()));
    }
  });

  test(`${label} has complete bilingual choices, explanations and one shared answer index`, () => {
    for (const q of bank.questions) {
      assert.equal(q.id, `lap-${q.source.topicId}-${q.source.selfCheckNumber}`);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id);
      for (const [lang, text] of [['de', q], ['hu', q.hu]]) {
        for (const field of ['question', 'explanation']) {
          assert.ok(typeof text[field] === 'string' && text[field].trim(), `${q.id} ${lang} ${field}`);
        }
        assert.equal(text.answers.length, 4, `${q.id} ${lang}`);
        assert.ok(text.answers.every(answer => typeof answer === 'string' && answer.trim()), q.id);
        assert.equal(new Set(text.answers.map(answer => answer.trim())).size, 4, `${q.id} ${lang}`);
        assert.equal(text.hint, undefined, `${q.id} ${lang}: no separate hint`);
      }
      assert.equal(q.hu.correct, undefined, `${q.id}: answer indices are shared`);
      assert.equal(q.hu.code, undefined, `${q.id}: code is shared`);
    }
    assert.ok(!JSON.stringify(bank).includes('\u2014'), 'Use ordinary punctuation rather than em dashes.');
  });

  test(`${label} declares SQL result rows and distinguishes reading examples`, () => {
    const readingLanguage = ['xml', 'pseudocode', 'php'][index];
    assert.equal(bank.questions.filter(q => q.codeLanguage === 'sql').length, [9, 9, 7][index]);
    assert.equal(bank.questions.filter(q => q.codeLanguage === readingLanguage).length, 1);
    for (const q of bank.questions) {
      if (q.code === undefined) {
        assert.equal(q.codeLanguage, undefined, q.id);
        assert.equal(q.expectedRows, undefined, q.id);
        continue;
      }
      assert.ok(typeof q.code === 'string' && q.code.trim(), q.id);
      assert.ok(['sql', readingLanguage].includes(q.codeLanguage), q.id);
      if (q.codeLanguage === 'sql') {
        assert.ok(Array.isArray(q.expectedRows), `${q.id}: SQL output is verified by test_database_examples.py`);
        assert.ok(q.expectedRows.every(Array.isArray), q.id);
      } else {
        assert.equal(q.expectedRows, undefined, `${q.id}: reading examples have no SQL results`);
      }
    }
  });
}

test('Database packages cover all 95 self-check positions across 19 topics without duplicate IDs', () => {
  const questions = banks.flatMap(bank => bank.questions);
  assert.equal(questions.length, 95);
  assert.equal(new Set(questions.map(q => q.source.topicId)).size, 19);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  assert.equal(new Set(questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`)).size, questions.length);
});

test('the database PDO example binds values and returns only the requested course', t => {
  const probe = spawnSync('php', ['-v'], { encoding: 'utf8', timeout: 5000 });
  if (probe.error?.code === 'ENOENT') return t.skip('Optional PHP CLI is not installed');
  assert.equal(probe.status, 0, probe.error?.message || probe.stderr);
  const question = banks[2].questions.find(q => q.id === 'lap-LAP-16-19-1');
  const result = spawnSync('php', [], {
    input: `<?php
      $pdo = new PDO('sqlite::memory:');
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $pdo->exec('CREATE TABLE courses (id INTEGER PRIMARY KEY, title TEXT NOT NULL)');
      $pdo->exec("INSERT INTO courses VALUES (7, 'SQL'), (8, 'Testing')");
      foreach ([7, 8, 999, '7 OR 1=1'] as $courseId) {
        ${question.code}
        echo json_encode($course), "\\n";
      }
    `,
    encoding: 'utf8', timeout: 5000,
  });
  assert.equal(result.status, 0, result.error?.message || result.stderr);
  assert.equal(result.stderr, '');
  assert.equal(result.stdout, '{"title":"SQL"}\n{"title":"Testing"}\nfalse\nfalse\n');
});
