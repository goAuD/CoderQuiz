const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function boot(savedLang = 'de', blockedStorage = false) {
  const elements = Object.fromEntries([
    'quiz-loading', 'quiz-loading-status', 'quiz-loading-content',
    'quiz-skeleton', 'quiz-load-error', 'quiz-reload',
  ].map(id => [id, {
    hidden: ['quiz-loading', 'quiz-load-error'].includes(id),
    attributes: {}, listeners: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, callback) { this.listeners[name] = callback; },
  }]));
  const translations = [{ lang: 'de' }, { lang: 'hu' }];
  elements['quiz-loading'].querySelectorAll = () => translations;
  const events = new Map(), timers = new Map();
  let reloaded = false;
  const context = {
    document: { getElementById: id => elements[id], addEventListener() {} },
    window: {
      addEventListener: (name, callback) => events.set(name, callback),
      location: { reload: () => { reloaded = true; } },
    },
    localStorage: { getItem() { if (blockedStorage) throw Error('Blocked'); return savedLang; } },
    setTimeout: callback => { timers.set(1, callback); return 1; },
    clearTimeout: id => timers.delete(id),
  };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../assets/page-effects.js'), 'utf8'), context);
  return {
    elements, translations, emit: (name, event = {}) => events.get(name)(event),
    wait: () => { for (const callback of timers.values()) callback(); timers.clear(); },
    reloaded: () => reloaded,
  };
}

test('a fast successful startup never flashes a skeleton or reports a later error', () => {
  const page = boot();
  page.emit('quiz:ready'); page.wait(); page.emit('load');
  page.emit('error', { target: { matches: () => true } });
  assert.equal(page.elements['quiz-loading'].hidden, true);
  assert.equal(page.elements['quiz-loading-content'].attributes['aria-busy'], 'false');
  assert.equal(page.elements['quiz-load-error'].hidden, true);
});

test('a real wait shows the saved language and ends immediately when the app is ready', () => {
  const page = boot('hu');
  assert.equal(page.elements['quiz-loading'].hidden, true);
  page.wait();
  assert.equal(page.elements['quiz-loading'].hidden, false);
  assert.deepEqual(page.translations.map(text => text.hidden), [true, false]);
  page.emit('quiz:ready');
  assert.equal(page.elements['quiz-loading'].hidden, true);
});

test('a failed quiz resource replaces loading with a working retry, without a stale timer', () => {
  const page = boot();
  page.emit('error', { target: { matches: () => true } }); page.wait();
  assert.equal(page.elements['quiz-loading'].hidden, false);
  assert.equal(page.elements['quiz-skeleton'].hidden, true);
  assert.equal(page.elements['quiz-loading-status'].hidden, true);
  assert.equal(page.elements['quiz-load-error'].hidden, false);
  assert.equal(page.elements['quiz-loading-content'].attributes['aria-busy'], 'false');
  page.elements['quiz-reload'].listeners.click();
  assert.equal(page.reloaded(), true);
});

test('startup exceptions have a fallback even with blocked storage; unrelated errors do not stop loading', () => {
  const page = boot(null, true);
  page.emit('error', { target: {} }); page.wait();
  assert.equal(page.elements['quiz-load-error'].hidden, true);
  assert.deepEqual(page.translations.map(text => text.hidden), [false, true]);
  page.emit('load');
  assert.equal(page.elements['quiz-load-error'].hidden, false);
  assert.equal(page.elements['quiz-skeleton'].hidden, true);
});
