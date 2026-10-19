const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.join(__dirname, '..');

// A small DOM stand-in runs the real application; browser layout is checked separately.
function boot(saved = {}, failure = '', reviseQuestion = null, random = () => .37, pilot = null, bankId = null) {
  const values = { ...saved };
  const navigation = [];
  class Element {
    constructor() {
      this.children = []; this.dataset = {}; this.style = {}; this.attrs = {};
      this.events = {}; this.hidden = false; this.disabled = false; this.textContent = '';
      const classes = new Set(['hidden']);
      this.classList = {
        add: value => classes.add(value), remove: value => classes.delete(value),
        contains: value => classes.has(value),
        toggle: (value, on) => on ? classes.add(value) : classes.delete(value),
      };
    }
    set innerHTML(value) { assert.equal(value, ''); this.children = []; }
    setAttribute(key, value) { this.attrs[key] = String(value); }
    getAttribute(key) { return this.attrs[key]; }
    append(...children) { this.children.push(...children); }
    appendChild(child) { this.append(child); }
    addEventListener(name, fn) { this.events[name] = fn; }
    focus(options) { navigation.push({ type: 'focus', element: this, options: options && { ...options } }); }
    querySelector(selector) { return this.children.find(c => c.className === selector.slice(1)); }
  }
  const elements = new Map();
  const get = id => {
    if (!elements.has(id)) elements.set(id, new Element());
    return elements.get(id);
  };
  let start;
  const context = vm.createContext({
    Event,
    window: {
      scrollY: 0,
      scrollTo(options) { navigation.push({ type: 'scroll', options: { ...options } }); },
      addEventListener() {},
      dispatchEvent(event) { assert.equal(event.type, 'quiz:ready'); },
    },
    document: {
      documentElement: {}, getElementById: get, createElement: () => new Element(),
      querySelectorAll: selector => selector === '.answer-btn' ? get('answers-list').children : [],
      addEventListener: (name, fn) => { if (name === 'DOMContentLoaded') start = fn; },
    },
    localStorage: {
      getItem(key) { if (failure === 'read') throw Error('Storage blocked'); return values[key] ?? null; },
      setItem(key, value) { if (failure === 'write') throw Error('Quota exceeded'); values[key] = value; },
      removeItem(key) { if (failure) throw Error('Storage blocked'); delete values[key]; },
    },
    Math: Object.assign(Object.create(Math), { random }),
  });
  if (bankId) vm.runInContext(`const QUIZ_BANK = ${JSON.stringify({ id: bankId })}`, context);
  for (const file of ['i18n.js', 'questions.js', 'app.js']) {
    const source = file === 'questions.js' && pilot
      ? 'const QUESTIONS = ' + JSON.stringify(pilot.questions) + ';'
      : fs.readFileSync(path.join(root, file), 'utf8');
    vm.runInContext(source, context, { filename: file });
    if (file === 'i18n.js' && pilot) {
      for (const lang of ['de', 'hu']) vm.runInContext(`Object.assign(I18N.${lang}, ${JSON.stringify(pilot.ui[lang])})`, context);
    }
    if (file === 'questions.js' && reviseQuestion !== null) {
      assert.ok(Number.isInteger(reviseQuestion));
      vm.runInContext(`QUESTIONS.find(q => q.id === ${reviseQuestion}).revision = 1`, context);
    }
  }
  const api = vm.runInContext('({state, init, setLang, selectAnswer, nextQuestion, activeScreen, QUESTIONS, shuffle})', context);
  start();
  return { ...api, values, get, navigation };
}
function answer(app, correct = true) {
  const q = app.state.questions[app.state.current];
  app.selectAnswer(app.state.shuffledOrder.indexOf(correct ? q.correct : (q.correct + 1) % 4));
}
function shortRun() {
  const app = boot(); app.state.selectedTopics = new Set(['Datenpannen']); app.init(); return app;
}

test('starting and advancing focus the question and scroll to the page top', () => {
  const app = shortRun();
  const heading = app.get('question-text');
  const expected = [
    { type: 'focus', element: heading, options: { preventScroll: true } },
    { type: 'scroll', options: { top: 0, behavior: 'instant' } },
  ];
  assert.deepEqual(app.navigation, expected);

  app.navigation.length = 0;
  answer(app); app.nextQuestion();
  assert.equal(app.state.current, 1);
  assert.deepEqual(app.navigation, expected);
});

test('results focus their heading and scroll to the top once; answers, translations and restored reading do not jump', () => {
  let app = shortRun();
  app.navigation.length = 0;
  answer(app); app.setLang('hu');
  assert.deepEqual(app.navigation, []);
  app = boot(app.values);
  assert.deepEqual(app.navigation, []);

  app.nextQuestion();
  for (let i = 1; i < 3; i++) { answer(app); app.nextQuestion(); }
  answer(app);
  app.navigation.length = 0;
  app.nextQuestion();
  assert.equal(app.activeScreen(), 'result');
  assert.deepEqual(app.navigation, [
    { type: 'focus', element: app.get('result-heading'), options: { preventScroll: true } },
    { type: 'scroll', options: { top: 0, behavior: 'instant' } },
  ]);
  app.navigation.length = 0;
  app.setLang('de');
  assert.deepEqual(app.navigation, []);
  assert.deepEqual(boot(app.values).navigation, []);
});

test('blocked reads and writes leave the quiz usable, with a localized notice', () => {
  for (const failure of ['read', 'write']) {
    const app = boot({}, failure); app.init(); answer(app); app.setLang('hu'); app.nextQuestion();
    assert.equal(app.state.current, 1);
    assert.equal(app.get('session-notice').hidden, false);
    assert.match(app.get('session-notice').textContent, /ment/);
  }
});
test('unsupported language and obsolete topic filters recover to usable defaults', () => {
  const app = boot({ 'cq-lang': '__proto__', 'cq-topics': '["retired-topic"]' });
  assert.equal(app.state.lang, 'de'); app.init(); assert.equal(app.state.questions.length, 100);
  app.setLang('xx'); assert.equal(app.state.lang, 'de');
});
test('shuffle preserves every input exactly once and does not mutate the source', () => {
  const app = boot(); const input = [0, 1, 2, 3];
  assert.deepEqual([...app.shuffle(input)].sort(), input); assert.deepEqual(input, [0, 1, 2, 3]);
});
test('four answers can reach all 24 permutations through equally likely shuffle choices', () => {
  const permutations = new Set();
  for (let a = 0; a < 4; a++) for (let b = 0; b < 3; b++) for (let c = 0; c < 2; c++) {
    const draws = [(a + .25) / 4, (b + .25) / 3, (c + .25) / 2];
    const app = boot({}, '', null, () => draws.shift());
    permutations.add(app.shuffle([0, 1, 2, 3]).join(','));
  }
  assert.equal(permutations.size, 24);
});
test('first question, order, answer mapping and score survive reload and language switch', () => {
  let app = shortRun();
  const ids = [...app.state.questions.map(q => q.id)], order = [...app.state.shuffledOrder];
  app = boot(app.values);
  assert.equal(app.activeScreen(), 'quiz');
  assert.deepEqual([...app.state.questions.map(q => q.id)], ids);
  assert.deepEqual([...app.state.shuffledOrder], order);
  app.setLang('hu'); assert.deepEqual([...app.state.shuffledOrder], order);
  answer(app); answer(app); assert.equal(app.state.score, 1);
  app = boot(app.values); assert.equal(app.state.answered, true); assert.equal(app.state.score, 1);
  assert.ok(app.get('answers-list').children.every(button => button.disabled));
  app.nextQuestion(); app.nextQuestion(); assert.equal(app.state.current, 1);
});
test('completed score and review survive reload; saved score is recomputed from selections', () => {
  let app = shortRun();
  for (let i = 0; i < 4; i++) { answer(app, i !== 1); app.nextQuestion(); }
  assert.equal(app.activeScreen(), 'result'); assert.equal(app.state.score, 3);
  const snapshot = JSON.parse(app.values['cq-progress']); snapshot.score = 999;
  app = boot({ ...app.values, 'cq-progress': JSON.stringify(snapshot) });
  assert.equal(app.activeScreen(), 'result'); assert.equal(app.state.score, 3);
  assert.equal(app.get('ring-pct').textContent, '75 %');
  const wrongQuestion = app.state.questions[1];
  assert.equal(app.get('wrong-list').children.length, 1);
  assert.equal(app.get('wrong-list').children[0].querySelector('.wi-explanation').textContent, wrongQuestion.explanation);
  app.setLang('hu');
  assert.equal(app.get('wrong-list').children[0].querySelector('.wi-explanation').textContent, wrongQuestion.hu.explanation);
});
test('invalid snapshots recover before rendering a partial quiz', () => {
  const app = shortRun(); answer(app);
  const mutations = [
    snap => { snap.questionIds = []; },
    snap => { snap.questionIds[1] = snap.questionIds[0]; },
    snap => { snap.current = -1; },
    snap => { snap.current = 500; },
    snap => { snap.shuffledOrder = [0, 0, 2, 3]; },
    snap => { snap.results[0].questionId = -1; },
    snap => { snap.results[0].selectedOriginalIdx = 4; },
    snap => { snap.results = []; },
    snap => { snap.questionRevisions = [-1, -1, -1, -1]; },
    snap => { snap.screen = 'result'; },
  ];
  for (const mutate of mutations) {
    const snap = JSON.parse(app.values['cq-progress']); mutate(snap);
    const restored = boot({ 'cq-progress': JSON.stringify(snap) });
    assert.equal(restored.activeScreen(), 'setup'); assert.equal(restored.state.questions.length, 0);
    assert.equal(restored.get('session-notice').hidden, false);
  }
});
test('out-of-range answer and unanswered next cannot advance or corrupt a session', () => {
  const app = shortRun(); app.nextQuestion(); app.selectAnswer(-1); app.selectAnswer(4);
  assert.equal(app.state.current, 0); assert.equal(app.state.answered, false); assert.equal(app.state.results.length, 0);
});

test('legacy saves resume unchanged questions but reset when their content was revised', () => {
  const unchanged = shortRun();
  const legacy = JSON.parse(unchanged.values['cq-progress']); delete legacy.questionRevisions;
  assert.equal(boot({ 'cq-progress': JSON.stringify(legacy) }).activeScreen(), 'quiz');
  const restored = boot({ 'cq-progress': JSON.stringify(legacy) }, '', legacy.questionIds[0]);
  assert.equal(restored.activeScreen(), 'setup');
  assert.equal(restored.get('session-notice').hidden, false);
});

test('pilot code stays text, explanations appear after answering, and topic links follow the language', () => {
  const pilot = JSON.parse(fs.readFileSync(path.join(root, 'examples/lap-pilot.json'), 'utf8'));
  let app = boot({}, '', null, () => .37, pilot);
  app.state.selectedTopics = new Set(['Schleifen']); app.init();
  const q = app.state.questions[0];
  assert.equal(app.get('question-context').children[0].children[0].textContent, q.code);
  assert.equal(app.get('explanation-box').classList.contains('hidden'), true);
  answer(app, false);
  assert.equal(app.get('explanation-box').classList.contains('hidden'), false);
  assert.equal(app.get('explanation-source').children[0].href, `https://coderlap.com/topics/${q.source.slug}/`);
  app.setLang('hu');
  assert.equal(app.get('explanation-source').children[0].href, `https://coderlap.com/hu/topics/${q.source.slug}/`);
  app = boot(app.values, '', null, () => .37, pilot);
  assert.equal(app.state.answered, true);
  assert.equal(app.get('question-context').children[0].children[0].textContent, q.code);
  assert.equal(app.get('explanation-text').textContent, q.hu.explanation);
  app.nextQuestion(); answer(app); app.nextQuestion();
  const review = app.get('wrong-list').children[0];
  assert.equal(review.querySelector('.question-code').children[0].textContent, q.code);
  assert.equal(review.querySelector('.question-source').href, `https://coderlap.com/hu/topics/${q.source.slug}/`);
});

for (const { id: bankName } of require('../quiz-banks.json')) {
  test(`${bankName} completes with translated code labels and post-answer explanations`, () => {
    const bank = JSON.parse(fs.readFileSync(path.join(root, `examples/${bankName}.json`), 'utf8'));
    let app = boot({}, '', null, () => .37, bank);
    app.init();
    const questionCount = bank.questions.length;
    assert.equal(app.state.questions.length, questionCount);
    const seen = new Set();
    for (let index = 0; index < questionCount; index++) {
      const q = app.state.questions[app.state.current];
      seen.add(q.id);
      assert.equal(app.get('explanation-box').classList.contains('hidden'), true);
      app.setLang('hu');
      if (q.code) {
        const pre = app.get('question-context').children[0];
        assert.equal(pre.children[0].textContent, q.code);
        assert.equal(pre.dataset.language, q.codeLanguage === 'pseudocode' ? 'Pszeudokód'
          : ({ html: 'HTML', xml: 'XML', json: 'JSON', javascript: 'JavaScript' })[q.codeLanguage] || 'JavaScript');
        assert.equal(pre.getAttribute('aria-label'), pre.dataset.language);
      }
      answer(app, index % 2 === 0);
      assert.equal(app.get('explanation-text').textContent, q.hu.explanation);
      assert.equal(app.get('explanation-source').children[0].href, `https://coderlap.com/hu/topics/${q.source.slug}/`);
      if (index === Math.floor(questionCount / 2)) app = boot(app.values, '', null, () => .37, bank);
      app.setLang('de');
      assert.equal(app.get('explanation-text').textContent, q.explanation);
      if (q.codeLanguage === 'pseudocode') {
        assert.equal(app.get('question-context').children[0].dataset.language, 'Pseudocode');
      }
      app.nextQuestion();
    }
    assert.equal(seen.size, questionCount);
    assert.equal(app.activeScreen(), 'result');
    assert.equal(app.state.score, Math.ceil(questionCount / 2));
    app = boot(app.values, '', null, () => .37, bank);
    assert.equal(app.activeScreen(), 'result');
    assert.equal(app.state.score, Math.ceil(questionCount / 2));
  });
}

test('package sessions and topic filters coexist while language is shared', () => {
  const bankA = JSON.parse(fs.readFileSync(path.join(root, 'examples/lap-programming-1.json'), 'utf8'));
  const bankB = JSON.parse(fs.readFileSync(path.join(root, 'examples/lap-programming-2.json'), 'utf8'));
  const original = shortRun(); answer(original);
  const a = boot(original.values, '', null, () => .37, bankA, 'lap-programming-1');
  a.state.selectedTopics = new Set([bankA.questions[0].topic]); a.init(); answer(a); a.nextQuestion();
  const savedA = a.values['cq-lap-programming-1-progress'];
  const b = boot(a.values, '', null, () => .37, bankB, 'lap-programming-2');
  assert.equal(b.activeScreen(), 'setup'); b.init(); answer(b, false); b.setLang('hu');
  const restoredA = boot(b.values, '', null, () => .37, bankA, 'lap-programming-1');
  assert.equal(restoredA.state.lang, 'hu');
  assert.equal(restoredA.state.current, 1); assert.equal(restoredA.state.score, 1);
  assert.deepEqual([...restoredA.state.selectedTopics], [bankA.questions[0].topic]);
  assert.equal(restoredA.values['cq-lap-programming-1-progress'], savedA);
  const restoredB = boot(restoredA.values, '', null, () => .37, bankB, 'lap-programming-2');
  assert.equal(restoredB.state.current, 0); assert.equal(restoredB.state.answered, true);
  assert.equal(restoredB.state.score, 0);
  const restoredLegacy = boot(restoredB.values);
  assert.equal(restoredLegacy.state.answered, true); assert.equal(restoredLegacy.state.score, 1);

  const revised = structuredClone(bankA); revised.questions[0].revision += 1;
  const resetA = boot(restoredB.values, '', null, () => .37, revised, 'lap-programming-1');
  assert.equal(resetA.activeScreen(), 'setup'); assert.equal(resetA.get('session-notice').hidden, false);
  assert.equal(boot(resetA.values, '', null, () => .37, bankB, 'lap-programming-2').activeScreen(), 'quiz');
  restoredB.get('change-topics-btn').events.click();
  assert.equal(restoredB.activeScreen(), 'setup');
  assert.equal(restoredB.values['cq-lap-programming-2-progress'], undefined);
  assert.equal(restoredB.values['cq-lap-programming-1-progress'], savedA);
  assert.equal(boot(restoredB.values, '', null, () => .37, bankB, 'lap-programming-2').activeScreen(), 'setup');
});
