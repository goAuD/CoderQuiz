const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');
const questions = vm.runInNewContext(fs.readFileSync(path.join(root, 'questions.js'), 'utf8') + '; QUESTIONS');
const i18n = vm.runInNewContext(fs.readFileSync(path.join(root, 'i18n.js'), 'utf8') + '; I18N');

test('published bank has stable unique IDs and complete bilingual choices and explanations', () => {
  assert.ok(questions.length >= 100);
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length);
  for (const q of questions) {
    assert.ok(Number.isInteger(q.id) && q.id > 0, `Question ID: ${q.id}`);
    assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, `Answer index: ${q.id}`);
    assert.ok(Number.isInteger(q.revision ?? 0) && (q.revision ?? 0) >= 0, `Revision: ${q.id}`);
    assert.ok(typeof q.topic === 'string' && q.topic.trim(), `Topic: ${q.id}`);
    for (const [lang, content] of [['de', q], ['hu', q.hu]]) {
      assert.ok(content, `${q.id}: missing ${lang}`);
      for (const key of ['question', 'explanation']) {
        assert.ok(typeof content[key] === 'string' && content[key].trim(), `${q.id}/${lang}/${key}`);
      }
      assert.equal(content.answers.length, 4, `${q.id}/${lang}: four choices`);
      assert.ok(content.answers.every(s => typeof s === 'string' && s.trim()), `${q.id}/${lang}: empty choice`);
      assert.equal(new Set(content.answers.map(s => s.trim().toLocaleLowerCase(lang))).size, 4, `${q.id}/${lang}: duplicate choice`);
    }
  }
});

test('UI translations cover the same keys with matching value types', () => {
  assert.deepEqual(Object.keys(i18n.de).sort(), Object.keys(i18n.hu).sort());
  for (const key of Object.keys(i18n.de)) assert.equal(typeof i18n.de[key], typeof i18n.hu[key], key);
});
