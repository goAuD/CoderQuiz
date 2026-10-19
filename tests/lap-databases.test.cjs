const assert = require('node:assert/strict');
const { test } = require('node:test');
const banks = [
  require('../examples/lap-databases-1.json'),
  require('../examples/lap-databases-2.json'),
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
]];

for (const [index, bank] of banks.entries()) {
  const topics = topicGroups[index];
  const label = `Databases ${index + 1}`;

  test(`${label} covers its 35 source positions with stable topic links`, () => {
    assert.equal(bank.sourceRepository, 'https://github.com/goAuD/CoderLAP');
    assert.equal(bank.sourceCommit, 'cefce00affa0f357e7cc3e752abf082cad0ae1d0');
    assert.equal(bank.questions.length, 35);
    assert.equal(new Set(bank.questions.map(q => q.id)).size, 35);
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
    const readingLanguage = index === 0 ? 'xml' : 'pseudocode';
    assert.equal(bank.questions.filter(q => q.codeLanguage === 'sql').length, 9);
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

test('Database packages have distinct question IDs and source positions', () => {
  const questions = banks.flatMap(bank => bank.questions);
  assert.equal(questions.length, 70);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  assert.equal(new Set(questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`)).size, questions.length);
});
