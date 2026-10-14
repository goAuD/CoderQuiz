const assert = require('node:assert/strict');
const { test } = require('node:test');
const vm = require('node:vm');
const { format } = require('node:util');
const bank = require('../examples/lap-informatik-1.json');

const sourceTopics = [
  ['01', 'Begriff Informatik', 'Begriff_Informatik'],
  ['02', 'Statische und dynamische Webseiten', 'Statische_und_dynamische_Webseiten'],
  ['03', 'Weblog Webshop Webplattform', 'Weblog_Webshop_Webplattform'],
  ['04', 'HTML und XML', 'HTML_und_XML'],
  ['05', 'HTML5 Grundgeruest', 'HTML5_Grundgeruest'],
  ['06', 'Meta Elemente und Metadaten', 'Meta_Elemente_und_Metadaten'],
  ['07', 'SEO und Massnahmen', 'SEO_und_Massnahmen'],
];

function execute(question) {
  const output = [];
  const context = vm.createContext({ console: { log: (...values) => output.push(format(...values)) } });
  vm.runInContext(question.code, context, { timeout: 1000 });
  return { output, context };
}

test('Informatik batch 1 covers all 35 positions in the reviewed source snapshot', () => {
  assert.equal(bank.sourceRepository, 'https://github.com/goAuD/CoderLAP');
  assert.equal(bank.sourceCommit, 'cefce00affa0f357e7cc3e752abf082cad0ae1d0');
  assert.equal(bank.questions.length, 35);
  assert.equal(new Set(bank.questions.map(q => q.id)).size, 35);
  const expectedPositions = [];
  for (const [number, topic, directory] of sourceTopics) {
    for (let position = 1; position <= 5; position++) {
      expectedPositions.push(`LAP-11-${number}:${position}`);
      const question = bank.questions.find(q => q.id === `lap-LAP-11-${number}-${position}`);
      assert.ok(question, `missing LAP-11-${number}:${position}`);
      assert.equal(question.topic, topic);
      assert.equal(question.source.path, `11_Informatik/${number}_${directory}/README.md`);
      assert.equal(question.source.slug, `11-${number}-${directory.toLowerCase()}`);
      assert.ok(Number.isInteger(question.revision) && question.revision > 0);
    }
  }
  const positions = bank.questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`);
  assert.deepEqual(positions.sort(), expectedPositions.sort());
  for (const lang of ['de', 'hu']) {
    const ui = bank.ui[lang];
    for (const key of ['moduleTitle', 'subtitle', 'practiceNote']) assert.ok(ui[key].trim());
    assert.deepEqual(Object.keys(ui.topics).sort(), sourceTopics.map(([, topic]) => topic).sort());
    assert.ok(Object.values(ui.topics).every(label => typeof label === 'string' && label.trim()));
  }
});

test('every adaptation has four bilingual choices, one shared answer index and a post-answer explanation', () => {
  for (const q of bank.questions) {
    assert.equal(q.id, `lap-${q.source.topicId}-${q.source.selfCheckNumber}`);
    assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id);
    for (const [lang, text] of [['de', q], ['hu', q.hu]]) {
      for (const field of ['question', 'explanation']) {
        assert.ok(typeof text[field] === 'string' && text[field].trim(), `${q.id} ${lang} ${field}`);
      }
      assert.equal(text.answers.length, 4, `${q.id} ${lang}`);
      assert.equal(new Set(text.answers.map(answer => answer.trim())).size, 4, `${q.id} ${lang}`);
      assert.ok(text.answers.every(answer => typeof answer === 'string' && answer.trim()), q.id);
      assert.equal(text.hint, undefined, `${q.id} ${lang}: no separate hint`);
    }
    assert.equal(q.hu.correct, undefined, `${q.id}: answer indices are shared across languages`);
    assert.equal(q.hu.code, undefined, `${q.id}: displayed code is shared across languages`);
  }
  assert.ok(!JSON.stringify(bank).includes('\u2014'), 'Use ordinary punctuation rather than em dashes.');
});

test('markup samples have explicit language labels and no invented console output', () => {
  const snippets = bank.questions.filter(q => q.code !== undefined);
  assert.equal(snippets.length, 10);
  assert.equal(snippets.filter(q => q.codeLanguage === 'html').length, 6);
  assert.equal(snippets.filter(q => q.codeLanguage === 'xml').length, 3);
  assert.equal(snippets.filter(q => q.codeLanguage === 'javascript').length, 1);
  for (const q of bank.questions) {
    if (q.code === undefined) {
      assert.equal(q.codeLanguage, undefined, q.id);
      assert.equal(q.expectedOutput, undefined, q.id);
      continue;
    }
    assert.ok(typeof q.code === 'string' && q.code.trim(), q.id);
    assert.ok(['javascript', 'html', 'xml'].includes(q.codeLanguage), q.id);
    if (q.codeLanguage === 'javascript') {
      assert.ok(Array.isArray(q.expectedOutput) && q.expectedOutput.length > 0, q.id);
      assert.ok(q.expectedOutput.every(line => typeof line === 'string'), q.id);
    } else {
      assert.equal(q.expectedOutput, undefined, `${q.id}: markup is a display example, not executable JavaScript`);
    }
  }
});

test('the displayed average algorithm produces the documented console output', () => {
  const q = bank.questions.find(question => question.id === 'lap-LAP-11-01-4');
  assert.deepEqual(execute(q).output, q.expectedOutput);
  assert.deepEqual(q.expectedOutput, ['22', 'null']);
});

test('the average algorithm handles empty, singleton, zero and mixed-sign input without mutation', () => {
  const { context } = execute(bank.questions.find(q => q.id === 'lap-LAP-11-01-4'));
  for (const [input, expected] of [
    [[], null], [[7], 7], [[0], 0], [[-2, 2], 0], [[1, 2], 1.5], [[20, 22, 24], 22],
  ]) {
    context.input = [...input];
    assert.equal(vm.runInContext('mean(input)', context, { timeout: 1000 }), expected);
    assert.deepEqual(context.input, input);
  }
});
