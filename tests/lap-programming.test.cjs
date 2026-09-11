const assert = require('node:assert/strict');
const { test } = require('node:test');
const vm = require('node:vm');
const bank = require('../examples/lap-programming-1.json');
const secondBank = require('../examples/lap-programming-2.json');

function execute(question) {
  const output = [];
  const context = vm.createContext({ console: { log: value => output.push(String(value)) } });
  vm.runInContext(question.code, context, { timeout: 1000 });
  return { output, context };
}

for (const [batchNumber, currentBank, firstTopic, lastTopic] of [[1, bank, 1, 7], [2, secondBank, 8, 14]]) {
  test(`programming batch ${batchNumber} covers five source positions per subtopic`, () => {
    const bank = currentBank;
    assert.equal(bank.questions.length, 35);
    assert.equal(new Set(bank.questions.map(q => q.id)).size, 35);
    assert.equal(bank.sourceRepository, 'https://github.com/goAuD/CoderLAP');
    assert.match(bank.sourceCommit, /^[a-f0-9]{40}$/);
    const sourcePositions = [];
    for (const q of bank.questions) {
      sourcePositions.push(`${q.source.topicId}:${q.source.selfCheckNumber}`);
      assert.equal(q.id, `lap-${q.source.topicId}-${q.source.selfCheckNumber}`);
      assert.ok(Number.isInteger(q.revision) && q.revision > 0);
      assert.match(q.source.path, /^15_Grundkenntnisse_des_Programmierens\/\d{2}_[A-Za-z_]+\/README\.md$/);
      assert.match(q.source.slug, /^15-\d{2}-[a-z_]+$/);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4);
      for (const [lang, text] of [['de', q], ['hu', q.hu]]) {
        assert.ok(text.question.trim() && text.explanation.trim());
        assert.equal(text.answers.length, 4);
        assert.equal(new Set(text.answers).size, 4);
        assert.ok(text.answers.every(s => typeof s === 'string' && s.trim()));
        assert.ok(bank.ui[lang].topics[q.topic]);
      }
      assert.equal(q.hint, undefined);
      if (q.code) {
        assert.ok(['javascript', 'pseudocode'].includes(q.codeLanguage));
        if (q.codeLanguage === 'javascript') {
          assert.ok(Array.isArray(q.expectedOutput) && q.expectedOutput.length > 0);
          assert.ok(q.expectedOutput.every(line => typeof line === 'string'));
        } else {
          assert.equal(q.expectedOutput, undefined); // Pseudocode is a manual trace, not executable JS.
        }
      }
    }
    const expected = [];
    for (let topic = firstTopic; topic <= lastTopic; topic++) {
      for (let question = 1; question <= 5; question++) expected.push(`LAP-15-${String(topic).padStart(2, '0')}:${question}`);
    }
    assert.deepEqual(sourcePositions.sort(), expected.sort());
    for (const lang of ['de', 'hu']) assert.equal(Object.keys(bank.ui[lang].topics).length, 7);
  });

  test(`programming batch ${batchNumber} code produces the recorded output`, () => {
    for (const q of currentBank.questions.filter(q => q.codeLanguage === 'javascript')) {
      assert.deepEqual(execute(q).output, q.expectedOutput, q.id);
    }
  });
}

test('the two curriculum batches contain 70 distinct adaptations and source positions', () => {
  const questions = [...bank.questions, ...secondBank.questions];
  assert.equal(new Set(questions.map(q => q.id)).size, 70);
  assert.equal(new Set(questions.map(q => `${q.source.topicId}:${q.source.selfCheckNumber}`)).size, 70);
});

test('recursive and iterative factorial examples agree on the stated small nonnegative domain', () => {
  for (const [id, names] of [
    ['lap-LAP-15-12-1', ['factorial']],
    ['lap-LAP-15-12-2', ['factorial']],
    ['lap-LAP-15-12-3', ['factorial']],
    ['lap-LAP-15-12-4', ['factorialRecursive', 'factorialLoop']],
  ]) {
    const { context } = execute(secondBank.questions.find(q => q.id === id));
    const expected = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800];
    for (let n = 0; n < expected.length; n++) {
      for (const name of names) {
        assert.equal(vm.runInContext(`${name}(${n})`, context, { timeout: 1000 }), expected[n], `${id}: ${n}`);
      }
    }
  }
});

test('displayed sort functions preserve duplicates and inputs, including empty and singleton arrays', () => {
  for (const [id, name] of [['lap-LAP-15-05-2', 'bubbleSort'], ['lap-LAP-15-05-4', 'quickSort']]) {
    const { context } = execute(bank.questions.find(q => q.id === id));
    for (const input of [[], [7], [4, 2, 4, 1], [4, 4, 4], [-2, 0, -2], [3, 2, 1], [1, 2, 3]]) {
      context.input = [...input];
      const result = vm.runInContext(`${name}(input)`, context, { timeout: 1000 });
      assert.deepEqual([...result], [...input].sort((a, b) => a - b));
      assert.notEqual(result, context.input);
      assert.deepEqual(context.input, input);
    }
  }
});

test('displayed searches return indices or minus one and preserve their input', () => {
  for (const [id, name] of [['lap-LAP-15-06-1', 'linearSearch'], ['lap-LAP-15-06-4', 'binarySearch']]) {
    const { context } = execute(bank.questions.find(q => q.id === id));
    for (const [input, target] of [[[], 42], [[7], 7], [[7], 8], [[5, 11, 19, 42, 70], 42], [[5, 11, 19, 42, 70], 8], [[1, 2, 2, 4], 2], [[1, 2, 2, 4], 1], [[1, 2, 2, 4], 4]]) {
      context.input = [...input]; context.target = target;
      const index = vm.runInContext(`${name}(input, target)`, context, { timeout: 1000 });
      if (input.includes(target)) {
        assert.equal(input[index], target);
        if (name === 'linearSearch') assert.equal(index, input.indexOf(target));
      } else assert.equal(index, -1);
      assert.deepEqual(context.input, input);
    }
  }
});

test('the sum example meets the extra test cases taught in its explanation', () => {
  const { context } = execute(bank.questions.find(q => q.id === 'lap-LAP-15-07-3'));
  for (const [input, expected] of [[[], 0], [[7], 7], [[-2, 2], 0]]) {
    context.input = input;
    assert.equal(vm.runInContext('sum(input)', context, { timeout: 1000 }), expected);
  }
});
