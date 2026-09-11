const assert = require('node:assert/strict');
const { test } = require('node:test');
const vm = require('node:vm');
const pilot = require('../examples/lap-pilot.json');

test('eight pilot questions have complete bilingual choices and pinned LAP provenance', () => {
  assert.equal(pilot.questions.length, 8);
  assert.equal(new Set(pilot.questions.map(q => q.id)).size, 8);
  assert.match(pilot.sourceCommit, /^[a-f0-9]{40}$/);
  for (const q of pilot.questions) {
    assert.match(q.source.topicId, /^LAP-\d{2}-\d{2}$/);
    assert.match(q.source.slug, /^[a-z0-9_-]+$/);
    assert.ok(Number.isInteger(q.source.selfCheckNumber) && q.source.selfCheckNumber > 0);
    assert.ok(q.correct >= 0 && q.correct < 4 && Number.isInteger(q.correct));
    for (const [lang, text] of [['de', q], ['hu', q.hu]]) {
      assert.ok(text.question.trim() && text.explanation.trim());
      assert.equal(text.answers.length, 4);
      assert.ok(text.answers.every(s => s.trim()));
      assert.equal(new Set(text.answers).size, 4);
      assert.ok(pilot.ui[lang].topics[q.topic]);
    }
    assert.equal(q.hint, undefined); // Feedback is the post-answer explanation.
  }
});

test('the displayed JavaScript examples produce their stated outputs', () => {
  const expected = {
    'pilot-LAP-15-17-1': ['1', '2', '3'],
    'pilot-LAP-15-17-4': ['0'],
    'pilot-LAP-15-06-2': ['19'],
  };
  for (const q of pilot.questions.filter(q => q.code)) {
    const output = [];
    vm.runInNewContext(q.code, { console: { log: value => output.push(String(value)) } }, { timeout: 1000 });
    assert.deepEqual(output, expected[q.id], q.id);
  }
});
