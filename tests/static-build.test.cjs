const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { build } = require('../scripts/build-static.cjs');

test('production package contains every reviewed bank, working local links, and no repository files', t => {
  const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'coderquiz-build-'));
  const output = path.join(temporary, 'site');
  t.after(() => fs.rmSync(temporary, { recursive: true }));
  const banks = build(output);
  assert.equal(banks.length, 9);
  assert.equal(banks.reduce((sum, bank) => sum + bank.questionCount, 0), 315);
  assert.equal(new Set(banks.flatMap(bank => bank.topicIds)).size, 63);
  const files = fs.readdirSync(output, { recursive: true }).map(String)
    .filter(file => fs.statSync(path.join(output, file)).isFile());
  assert.ok(files.length > 15);
  assert.ok(!files.some(file => /(^|[\\/])(docs|scripts|tests|examples|\.git|\.github)([\\/]|$)/.test(file)));
  assert.ok(!fs.existsSync(path.join(output, 'questions.js')), 'legacy question bank is not published');
  assert.equal(fs.readFileSync(path.join(output, 'robots.txt'), 'utf8'), 'User-agent: *\nDisallow: /\n');
  const home = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
  assert.ok(!home.includes('id="quiz-screen"'));
  assert.equal((home.match(/data-bank=/g) || []).length, 9);

  for (const file of files.filter(name => name.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(output, file), 'utf8');
    for (const [, url] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      if (/^(https?:|#)/.test(url)) continue;
      const target = url.startsWith('/') ? path.join(output, url) : path.resolve(output, path.dirname(file), url);
      assert.ok(fs.existsSync(target), `${file}: missing ${url}`);
      if (fs.statSync(target).isDirectory()) assert.ok(fs.existsSync(path.join(target, 'index.html')));
    }
  }
  for (const bank of banks) {
    const directory = path.join(output, 'quiz', bank.id);
    const html = fs.readFileSync(path.join(directory, 'index.html'), 'utf8');
    assert.match(html, /id="logo-link" class="brand" href="\.\.\/\.\.\/"/);
    assert.match(html, /src="questions.js"/);
    assert.match(html, /src="\.\.\/\.\.\/app.js"/);
    assert.match(html, /href="https:\/\/coderlap.com\/privacy\/"/);
    const context = vm.createContext({});
    vm.runInContext(fs.readFileSync(path.join(output, 'i18n.js'), 'utf8'), context);
    vm.runInContext(fs.readFileSync(path.join(directory, 'questions.js'), 'utf8'), context);
    assert.equal(vm.runInContext('QUIZ_BANK.id', context), bank.id);
    assert.equal(vm.runInContext('QUESTIONS.length', context), bank.questionCount);
    assert.equal(vm.runInContext('I18N.hu.moduleTitle', context), bank.ui.hu.moduleTitle);
  }
  assert.throws(() => build(output), /EEXIST/, 'an existing arbitrary output is never overwritten');
});
