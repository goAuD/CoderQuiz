// app.js

const STORAGE_LANG     = "cq-lang";
const STORAGE_TOPICS   = "cq-topics";
const STORAGE_PROGRESS = "cq-progress";
let storageFailed = false;
let restoreDiscarded = false;

// Browsers may block storage or run out of space. Practice still works in memory.
function readStorage(key) {
  try { return localStorage.getItem(key); }
  catch { storageFailed = true; return null; }
}
function writeStorage(key, value) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch { storageFailed = true; }
  updateSessionNotice();
}

const state = {
  questions:     [],
  current:       0,
  score:         0,
  answered:      false,
  results:       [],  // { questionId, correct, correctOriginalIdx, selectedOriginalIdx }
  shuffledOrder: [],  // permutation of answer indices for the current question
  selectedTopics: new Set(),
  lang:          "de",
};

const $ = id => document.getElementById(id);
const t = key => I18N[state.lang][key];

function updateSessionNotice() {
  const notice = $("session-notice");
  notice.hidden = !storageFailed && !restoreDiscarded;
  notice.textContent = storageFailed ? t("storageUnavailable") : restoreDiscarded ? t("sessionReset") : "";
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns the language-specific field, falling back to German.
function getQ(q, key) {
  return (state.lang !== "de" && q[state.lang]?.[key]) || q[key];
}

function topicLabel(topic) {
  return I18N[state.lang].topics[topic] || topic;
}

function appendQuestionCode(container, question) {
  if (!question.code) return;
  const pre = document.createElement("pre");
  pre.className = "question-code";
  pre.setAttribute("tabindex", "0");
  const language = question.codeLanguage === "pseudocode" ? t("pseudocodeLabel") : "JavaScript";
  pre.setAttribute("aria-label", language);
  pre.dataset.language = language;
  const code = document.createElement("code");
  code.textContent = question.code;
  pre.appendChild(code);
  container.appendChild(pre);
}

function appendSourceLink(container, question) {
  if (!question.source) return;
  const link = document.createElement("a");
  link.className = "question-source";
  const prefix = state.lang === "hu" ? "/hu" : "";
  link.href = `https://coderlap.com${prefix}/topics/${encodeURIComponent(question.source.slug)}/`;
  link.textContent = `${t("studyTopic")} · ${topicLabel(question.topic)}`;
  container.appendChild(link);
}

// ── Screens ────────────────────────────────────────────────────────────────

function showScreen(name) {
  ["setup-screen", "quiz-screen", "result-screen"].forEach(id => {
    $(id).classList.toggle("hidden", id !== name + "-screen");
  });
}

function activeScreen() {
  for (const name of ["setup", "quiz", "result"]) {
    if (!$(name + "-screen").classList.contains("hidden")) return name;
  }
  return "setup";
}

// ── i18n ──────────────────────────────────────────────────────────────────

function applyStaticI18n() {
  document.documentElement.lang  = t("htmlLang");
  $("module-title").textContent   = t("moduleTitle");
  $("quiz-subtitle").textContent  = t("subtitle");
  $("result-heading").textContent = t("resultHeading");
  $("ring-sub-text").textContent  = t("ringSub");
  $("score-suffix").textContent   = t("scoreLabel");
  $("wrong-heading").textContent  = t("wrongSection");
  $("restart-btn").textContent    = t("restartBtn");
  $("setup-heading").textContent  = t("setupHeading");
  $("setup-sub").textContent      = t("setupSub");
  $("logo-link").setAttribute("aria-label", t("homeLabel"));
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-lap-link]").forEach(link => {
    link.href = state.lang === "hu" ? "https://coderlap.com/hu/" : "https://coderlap.com/";
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
    btn.setAttribute("aria-pressed", btn.dataset.lang === state.lang);
  });
  updateSessionNotice();
}

function setLang(lang) {
  if (!Object.hasOwn(I18N, lang)) return;
  state.lang = lang;
  writeStorage(STORAGE_LANG, lang);
  applyStaticI18n();
  const screen = activeScreen();
  if (screen === "setup")  updateSetupScreen();
  if (screen === "quiz")   renderQuestion(true);  // preserve shuffle + answered state
  if (screen === "result") showResults();
}

// ── Topic filter ──────────────────────────────────────────────────────────

function allTopics() {
  return [...new Set(QUESTIONS.map(q => q.topic))];
}

function loadTopics() {
  try {
    const saved = readStorage(STORAGE_TOPICS);
    if (saved) {
      const arr = JSON.parse(saved);
      const valid = Array.isArray(arr) ? arr.filter(topic => allTopics().includes(topic)) : [];
      if (valid.length > 0) return new Set(valid);
    }
  } catch {}
  return new Set(allTopics());
}

function saveTopics() {
  writeStorage(STORAGE_TOPICS, JSON.stringify([...state.selectedTopics]));
}

function filteredQuestions() {
  return QUESTIONS.filter(q => state.selectedTopics.has(q.topic));
}

function updateSetupScreen() {
  const meta = $("module-meta");
  meta.innerHTML = "";
  const badge = document.createElement("span");
  badge.className   = "module-badge";
  badge.textContent = t("examLabel");
  const statsEl = document.createElement("span");
  statsEl.className   = "module-stats-text";
  statsEl.textContent = t("moduleStats")(QUESTIONS.length, allTopics().length);
  meta.append(badge, statsEl);

  const chips = $("topic-chips");
  chips.innerHTML = "";
  allTopics().forEach((topic, index) => {
    const btn = document.createElement("button");
    btn.className = "topic-chip" + (state.selectedTopics.has(topic) ? " active" : "");
    btn.textContent = topicLabel(topic);
    btn.setAttribute("aria-label", topicLabel(topic));
    btn.setAttribute("aria-pressed", state.selectedTopics.has(topic));
    btn.addEventListener("click", () => {
      if (state.selectedTopics.has(topic) && state.selectedTopics.size > 1) {
        state.selectedTopics.delete(topic);
      } else {
        state.selectedTopics.add(topic);
      }
      saveTopics();
      updateSetupScreen();
      chips.children[index].focus({ preventScroll: true });
    });
    chips.appendChild(btn);
  });
  $("start-btn").textContent = t("startBtn")(filteredQuestions().length);
}

function showSetupScreen() {
  state.selectedTopics = loadTopics();
  showScreen("setup");
  applyStaticI18n();
  updateSetupScreen();
}

// ── Progress persistence ──────────────────────────────────────────────────

function saveProgress() {
  writeStorage(STORAGE_PROGRESS, JSON.stringify({
    questionIds:   state.questions.map(q => q.id),
    questionRevisions: state.questions.map(q => q.revision || 0),
    current:       state.current,
    score:         state.score,
    results:       state.results,
    topics:        [...state.selectedTopics],
    screen:        activeScreen(),
    answered:      state.answered,
    shuffledOrder: state.shuffledOrder,
  }));
}

function clearProgress() {
  writeStorage(STORAGE_PROGRESS, null);
}

function validateProgress(snap) {
  if (!snap || !Array.isArray(snap.questionIds) || !snap.questionIds.length
      || new Set(snap.questionIds).size !== snap.questionIds.length) return null;
  const questions = snap.questionIds.map(id => QUESTIONS.find(q => q.id === id));
  if (questions.some(q => !q)) return null;
  const revisions = snap.questionRevisions ?? questions.map(() => 0);
  if (!Array.isArray(revisions) || revisions.length !== questions.length
      || questions.some((q, i) => revisions[i] !== (q.revision || 0))) return null;
  if (!['quiz', 'result'].includes(snap.screen) || !Number.isInteger(snap.current)
      || typeof snap.answered !== 'boolean' || !Array.isArray(snap.results)) return null;
  const finished = snap.screen === 'result';
  if (finished ? snap.current !== questions.length || !snap.answered
    : snap.current < 0 || snap.current >= questions.length) return null;
  if (snap.results.length !== (finished ? questions.length : snap.current + Number(snap.answered))) return null;
  if (!Array.isArray(snap.topics) || !snap.topics.length
      || snap.topics.some(topic => !allTopics().includes(topic))
      || questions.some(q => !snap.topics.includes(q.topic))) return null;
  const order = snap.shuffledOrder;
  if (!Array.isArray(order) || order.length !== 4 || new Set(order).size !== 4
      || order.some(i => !Number.isInteger(i) || i < 0 || i >= 4)) return null;
  if (snap.results.some((result, i) => !result || result.questionId !== questions[i].id
      || !Number.isInteger(result.selectedOriginalIdx)
      || result.selectedOriginalIdx < 0 || result.selectedOriginalIdx >= 4)) return null;
  // Stored totals and correctness flags are derived data, not the source of truth.
  const results = snap.results.map((result, i) => ({
    questionId: questions[i].id,
    selectedOriginalIdx: result.selectedOriginalIdx,
    correctOriginalIdx: questions[i].correct,
    correct: result.selectedOriginalIdx === questions[i].correct,
  }));
  return { questions, results, score: results.filter(result => result.correct).length };
}

function tryRestoreProgress() {
  try {
    const raw = readStorage(STORAGE_PROGRESS);
    if (!raw) return false;
    const snap = JSON.parse(raw);

    const restored = validateProgress(snap);
    if (!restored) { restoreDiscarded = true; clearProgress(); return false; }

    state.questions      = restored.questions;
    state.current        = snap.current;
    state.score          = restored.score;
    state.results        = restored.results;
    state.selectedTopics = new Set(snap.topics);

    state.answered      = snap.answered;
    state.shuffledOrder = snap.shuffledOrder;

    applyStaticI18n();
    if (snap.screen === "result") {
      showScreen("result");
      showResults();
    } else {
      showScreen("quiz");
      renderQuestion(true);
    }
    return true;
  } catch {
    restoreDiscarded = true;
    clearProgress();
    return false;
  }
}

// ── Quiz ──────────────────────────────────────────────────────────────────

function init() {
  if (!filteredQuestions().length) state.selectedTopics = new Set(allTopics());
  restoreDiscarded = false;
  clearProgress();
  state.questions     = shuffle(filteredQuestions());
  state.current       = 0;
  state.score         = 0;
  state.answered      = false;
  state.results       = [];
  state.shuffledOrder = [];
  showScreen("quiz");
  applyStaticI18n();
  renderQuestion();
  saveProgress();
  $("question-text").focus();
}

// preserveAnswered = true: keep shuffledOrder + answered state (language switch or restore)
function renderQuestion(preserveAnswered = false) {
  const q     = state.questions[state.current];
  const total = state.questions.length;

  $("progress-text").textContent  = t("progress")(state.current + 1, total);
  $("score-display").textContent  = t("score")(state.score);
  $("topic-badge").textContent    = topicLabel(q.topic);
  $("question-text").textContent  = getQ(q, "question");
  $("question-context").innerHTML = "";
  appendQuestionCode($("question-context"), q);

  if (!preserveAnswered) {
    state.shuffledOrder = shuffle([0, 1, 2, 3]);
    state.answered      = false;
    $("explanation-box").classList.add("hidden");
    $("next-btn").classList.add("hidden");
  }
  updateProgress();

  const answers    = getQ(q, "answers");
  const list       = $("answers-list");
  list.innerHTML   = "";
  const lastResult = state.answered ? state.results[state.results.length - 1] : null;

  state.shuffledOrder.forEach((origIdx, displayIdx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.setAttribute("data-idx", displayIdx);

    const label = document.createElement("span");
    label.className   = "answer-label";
    label.textContent = String.fromCharCode(65 + displayIdx);
    btn.appendChild(label);
    const content = document.createElement("span");
    content.className = "answer-content";
    content.textContent = answers[origIdx];
    btn.appendChild(content);

    if (state.answered) {
      markAnswer(btn, origIdx, q, lastResult);
    } else {
      btn.addEventListener("click", () => selectAnswer(displayIdx));
    }
    list.appendChild(btn);
  });

  if (state.answered) {
    showFeedback(q, lastResult);
  }
}

// Answer feedback includes text so colour is never the only signal.
function markAnswer(btn, originalIdx, question, result) {
  btn.disabled = true;
  const correct = originalIdx === question.correct;
  const selected = originalIdx === result.selectedOriginalIdx;
  if (!correct && !selected) return;
  btn.classList.add(correct ? "correct" : "wrong");
  const status = document.createElement("span");
  status.className = "answer-status";
  status.textContent = correct ? t("correctChoice") : t("selectedChoice");
  btn.querySelector(".answer-content").appendChild(status);
}

function updateProgress() {
  const completed = state.current + (state.answered ? 1 : 0);
  const total = state.questions.length;
  $("progress-bar").style.width = `${(completed / total) * 100}%`;
  $("quiz-progress").setAttribute("aria-valuemax", total);
  $("quiz-progress").setAttribute("aria-valuenow", completed);
}

function showFeedback(question, result) {
  $("feedback-heading").textContent = t(result.correct ? "feedbackCorrect" : "feedbackExplanation");
  $("explanation-text").textContent = getQ(question, "explanation");
  $("explanation-source").innerHTML = "";
  appendSourceLink($("explanation-source"), question);
  $("explanation-box").classList.remove("hidden");
  const isLast = state.current === state.questions.length - 1;
  $("next-btn").textContent = isLast ? t("resultBtn") : t("nextBtn");
  $("next-btn").classList.remove("hidden");
}

function selectAnswer(selectedDisplayIdx) {
  if (state.answered || !Number.isInteger(selectedDisplayIdx)
      || selectedDisplayIdx < 0 || selectedDisplayIdx >= state.shuffledOrder.length) return;
  state.answered = true;

  const q               = state.questions[state.current];
  const selectedOrigIdx = state.shuffledOrder[selectedDisplayIdx];
  const isCorrect       = selectedOrigIdx === q.correct;

  if (isCorrect) state.score++;

  state.results.push({
    questionId:          q.id,
    correct:             isCorrect,
    correctOriginalIdx:  q.correct,
    selectedOriginalIdx: selectedOrigIdx,
  });

  document.querySelectorAll(".answer-btn").forEach(btn => {
    const dIdx = parseInt(btn.getAttribute("data-idx"), 10);
    const oIdx = state.shuffledOrder[dIdx];
    markAnswer(btn, oIdx, q, state.results[state.results.length - 1]);
  });

  $("score-display").textContent = t("score")(state.score);
  updateProgress();
  showFeedback(q, state.results[state.results.length - 1]);

  saveProgress();
}

function nextQuestion() {
  if (!state.answered || state.current >= state.questions.length) return;
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
    $("question-text").focus();
    saveProgress();
  }
}

function showResults() {
  const entering = activeScreen() !== "result";
  showScreen("result");
  applyStaticI18n();

  const total = state.questions.length;
  const pct   = Math.round((state.score / total) * 100);

  $("final-score").textContent = `${state.score} / ${total}`;

  const grade = $("grade-text");
  if (pct >= 80) {
    grade.textContent = t("gradePass");
    grade.className   = "grade pass";
  } else if (pct >= 60) {
    grade.textContent = t("gradeOk");
    grade.className   = "grade ok";
  } else {
    grade.textContent = t("gradeFail");
    grade.className   = "grade fail";
  }

  const circumference = 2 * Math.PI * 54;
  const circle        = $("score-circle");
  circle.style.strokeDasharray  = circumference;
  circle.style.strokeDashoffset = circumference * (1 - pct / 100);
  $("ring-pct").textContent = `${pct} %`;

  renderWrongAnswers();
  if (entering) $("result-heading").focus();
  saveProgress();
}

function renderWrongAnswers() {
  const wrong     = state.results.filter(r => !r.correct);
  const container = $("wrong-list");
  container.innerHTML = "";

  if (wrong.length === 0) {
    const p = document.createElement("p");
    p.className   = "all-correct";
    p.textContent = t("allCorrect");
    container.appendChild(p);
    return;
  }

  wrong.forEach(r => {
    const q       = QUESTIONS.find(qObj => qObj.id === r.questionId);
    const answers = getQ(q, "answers");

    const div = document.createElement("div");
    div.className = "wrong-item";

    const qp = document.createElement("p");
    qp.className   = "wi-question";
    qp.textContent = getQ(q, "question");

    const givenP     = document.createElement("p");
    givenP.className = "wi-given";
    const givenLabel = document.createElement("span");
    givenLabel.className   = "wi-label wrong-label";
    givenLabel.textContent = t("yourAnswer");
    givenP.appendChild(givenLabel);
    givenP.append(` ${answers[r.selectedOriginalIdx]}`);

    const correctP     = document.createElement("p");
    correctP.className = "wi-correct";
    const correctLabel = document.createElement("span");
    correctLabel.className   = "wi-label correct-label";
    correctLabel.textContent = t("correctAnswer");
    correctP.appendChild(correctLabel);
    correctP.append(` ${answers[r.correctOriginalIdx]}`);

    const explanation = document.createElement("p");
    explanation.className = "wi-explanation";
    explanation.textContent = getQ(q, "explanation");

    div.appendChild(qp);
    appendQuestionCode(div, q);
    div.append(givenP, correctP, explanation);
    appendSourceLink(div, q);
    container.appendChild(div);
  });
}

// ── Bootstrap ─────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = readStorage(STORAGE_LANG);
  state.lang = Object.hasOwn(I18N, savedLang) ? savedLang : 'de';
  $("next-btn").addEventListener("click", nextQuestion);
  $("restart-btn").addEventListener("click", () => {
    clearProgress();
    showSetupScreen();
    $("setup-heading").focus();
  });
  $("start-btn").addEventListener("click", init);
  $("logo-link").addEventListener("click", e => {
    e.preventDefault();
    showSetupScreen();
    $("setup-heading").focus();
  });

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  if (!tryRestoreProgress()) showSetupScreen();
});
