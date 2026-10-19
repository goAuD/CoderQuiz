const assert = require('node:assert/strict');
const { test } = require('node:test');
const vm = require('node:vm');
const { format } = require('node:util');
const banks = [1, 2, 3].map(batch => require(`../examples/lap-informatik-${batch}.json`));

const sourceTopics = [
  ['01', 'Begriff Informatik', 'Begriff_Informatik'],
  ['02', 'Statische und dynamische Webseiten', 'Statische_und_dynamische_Webseiten'],
  ['03', 'Weblog Webshop Webplattform', 'Weblog_Webshop_Webplattform'],
  ['04', 'HTML und XML', 'HTML_und_XML'],
  ['05', 'HTML5 Grundgeruest', 'HTML5_Grundgeruest'],
  ['06', 'Meta Elemente und Metadaten', 'Meta_Elemente_und_Metadaten'],
  ['07', 'SEO und Massnahmen', 'SEO_und_Massnahmen'],
  ['08', 'CSS und Einsatz', 'CSS_und_Einsatz'],
  ['09', 'Client und Server Scripting', 'Client_und_Server_Scripting'],
  ['10', 'Tools fuer Webentwicklung', 'Tools_fuer_Webentwicklung'],
  ['11', 'CMS', 'CMS'],
  ['12', 'LIFO und FIFO', 'LIFO_und_FIFO'],
  ['13', 'Stack und Queue', 'Stack_und_Queue'],
  ['14', 'Userinterface', 'Userinterface'],
  ['15', 'Zeichencodierung', 'Zeichencodierung'],
  ['16', 'Standards ANSI ISO IEEE', 'Standards_ANSI_ISO_IEEE'],
  ['17', 'Frame', 'Frame'],
  ['18', 'Webservices', 'Webservices'],
  ['19', 'SOAP und WSDL', 'SOAP_und_WSDL'],
  ['20', 'REST API', 'REST_API'],
  ['21', 'JSON', 'JSON'],
];

function execute(question) {
  const output = [];
  const context = vm.createContext({
    TextEncoder, TextDecoder,
    console: { log: (...values) => output.push(format(...values)) },
  });
  vm.runInContext(question.code, context, { timeout: 1000 });
  return { output, context };
}

for (const [index, bank] of banks.entries()) {
  const batch = index + 1;
  const topics = sourceTopics.slice(index * 7, (index + 1) * 7);

  test(`Informatik ${batch} covers all 35 positions in the reviewed source snapshot`, () => {
    assert.equal(bank.sourceRepository, 'https://github.com/goAuD/CoderLAP');
    assert.equal(bank.sourceCommit, 'cefce00affa0f357e7cc3e752abf082cad0ae1d0');
    assert.equal(bank.questions.length, 35);
    assert.equal(new Set(bank.questions.map(q => q.id)).size, 35);
    const expectedPositions = [];
    for (const [number, topic, directory] of topics) {
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
      assert.deepEqual(Object.keys(ui.topics).sort(), topics.map(([, topic]) => topic).sort());
      assert.ok(Object.values(ui.topics).every(label => typeof label === 'string' && label.trim()));
    }
  });

  test(`Informatik ${batch} has four bilingual choices, one shared answer index and post-answer explanations`, () => {
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

  test(`Informatik ${batch} samples have explicit language labels and appropriate output metadata`, () => {
    const snippets = bank.questions.filter(q => q.code !== undefined);
    const expectedCounts = [
      { html: 6, xml: 3, javascript: 1, json: 0 },
      { html: 3, xml: 0, javascript: 7, json: 0 },
      { html: 1, xml: 1, javascript: 4, json: 2 },
    ][index];
    for (const [language, count] of Object.entries(expectedCounts)) {
      assert.equal(snippets.filter(q => q.codeLanguage === language).length, count, language);
    }
    for (const q of bank.questions) {
      if (q.code === undefined) {
        assert.equal(q.codeLanguage, undefined, q.id);
        assert.equal(q.expectedOutput, undefined, q.id);
        continue;
      }
      assert.ok(typeof q.code === 'string' && q.code.trim(), q.id);
      assert.ok(['javascript', 'html', 'xml', 'json'].includes(q.codeLanguage), q.id);
      if (q.codeLanguage === 'javascript') {
        assert.ok(Array.isArray(q.expectedOutput) && q.expectedOutput.length > 0, q.id);
        assert.ok(q.expectedOutput.every(line => typeof line === 'string'), q.id);
      } else {
        assert.equal(q.expectedOutput, undefined, `${q.id}: markup is a display example, not executable JavaScript`);
      }
    }
  });
}

test('every displayed Informatik JavaScript example produces its documented output', () => {
  for (const q of banks.flatMap(bank => bank.questions).filter(q => q.codeLanguage === 'javascript')) {
    assert.deepEqual(execute(q).output, q.expectedOutput, q.id);
  }
});

test('the average algorithm handles empty, singleton, zero and mixed-sign input without mutation', () => {
  const { context } = execute(banks[0].questions.find(q => q.id === 'lap-LAP-11-01-4'));
  for (const [input, expected] of [
    [[], null], [[7], 7], [[0], 0], [[-2, 2], 0], [[1, 2], 1.5], [[20, 22, 24], 22],
  ]) {
    context.input = [...input];
    assert.equal(vm.runInContext('mean(input)', context, { timeout: 1000 }), expected);
    assert.deepEqual(context.input, input);
  }
});

test('the parentheses example handles nesting, early closing and unfinished opening', () => {
  const { context } = execute(banks[1].questions.find(q => q.id === 'lap-LAP-11-13-1'));
  for (const [input, expected] of [
    ['', true], ['abc', true], ['()', true], ['(())', true], ['()()', true],
    ['(a + (b))', true], [')(', false], [')', false], ['(', false],
    ['(()', false], ['())', false], ['((a)', false], ['a)b(', false],
  ]) {
    context.input = input;
    assert.equal(vm.runInContext('balancedParentheses(input)', context, { timeout: 1000 }), expected, input);
  }
});

test('progress parsing distinguishes JSON syntax from the stated record contract', () => {
  const { context } = execute(banks[2].questions.find(q => q.id === 'lap-LAP-11-21-1'));
  for (const score of [0, 4, 5]) {
    context.input = JSON.stringify({ topic: 'loops', score });
    assert.equal(vm.runInContext('JSON.stringify(parseProgress(input))', context), context.input);
  }
  for (const invalid of [
    null, [], 4, true, {}, { topic: 'loops' }, { topic: 4, score: 4 },
    ...[-1, 6, 1.5, '4', null].map(score => ({ topic: 'loops', score })),
  ]) {
    context.input = JSON.stringify(invalid);
    assert.throws(() => vm.runInContext('parseProgress(input)', context), /Invalid progress/);
  }
  context.input = '{"topic":"loops",}';
  assert.throws(() => vm.runInContext('parseProgress(input)', context), error => error.name === 'SyntaxError');
});

test('JSON snippets are data and preserve ordered arrays and ordinary underscore keys', () => {
  const samples = banks[2].questions.filter(q => q.codeLanguage === 'json');
  const parsed = Object.fromEntries(samples.map(q => [q.id, JSON.parse(q.code)]));
  assert.deepEqual(parsed['lap-LAP-11-21-2'], { id: 15, topics: ['loops', 'arrays'] });
  assert.deepEqual(parsed['lap-LAP-11-21-4'], { score: 4, _note: 'Practice data' });
  const original = '{"id":"9007199254740993"}';
  assert.equal(JSON.stringify(JSON.parse(original)), original);
});

test('curriculum packages have no overlapping question IDs or source positions', () => {
  const questions = require('../quiz-banks.json').flatMap(entry => require(`../${entry.path}`).questions);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  assert.equal(new Set(questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`)).size, questions.length);
});
