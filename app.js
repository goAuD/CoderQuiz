// app.js — Quiz-Logik

const state = {
  questions:    [],
  current:      0,
  score:        0,
  answered:     false,
  results:      [],   // { questionId, correct, correctOriginalIdx, selectedOriginalIdx }
  shuffledOrder: [],  // permutation of answer indices, rebuilt each question
  lang:         localStorage.getItem("cq-lang") || "de",
};

const $ = id => document.getElementById(id);
const t = key => I18N[state.lang][key];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Returns the language-specific field from a question, falling back to German.
function getQ(q, key) {
  return (state.lang !== "de" && q[state.lang]?.[key]) || q[key];
}

function topicLabel(topic) {
  return I18N[state.lang].topics[topic] || topic;
}

function applyStaticI18n() {
  document.documentElement.lang = t("htmlLang");
  $("module-title").textContent   = t("moduleTitle");
  $("quiz-subtitle").textContent  = t("subtitle")(QUESTIONS.length);
  $("result-heading").textContent = t("resultHeading");
  $("ring-sub-text").textContent  = t("ringSub");
  $("score-suffix").textContent   = t("scoreLabel");
  $("wrong-heading").textContent  = t("wrongSection");
  $("restart-btn").textContent    = t("restartBtn");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem("cq-lang", lang);
  applyStaticI18n();

  if (!$("quiz-screen").classList.contains("hidden")) {
    renderQuestion();
  } else if (!$("result-screen").classList.contains("hidden")) {
    showResults();
  }
}

function init() {
  state.questions     = shuffle(QUESTIONS);
  state.current       = 0;
  state.score         = 0;
  state.answered      = false;
  state.results       = [];
  state.shuffledOrder = [];
  $("quiz-screen").classList.remove("hidden");
  $("result-screen").classList.add("hidden");
  applyStaticI18n();
  renderQuestion();
}

function renderQuestion() {
  const q     = state.questions[state.current];
  const total = state.questions.length;

  $("progress-bar").style.width   = `${(state.current / total) * 100}%`;
  $("progress-text").textContent  = t("progress")(state.current + 1, total);
  $("score-display").textContent  = t("score")(state.score);
  $("topic-badge").textContent    = topicLabel(q.topic);
  $("question-text").textContent  = getQ(q, "question");
  $("explanation-box").classList.add("hidden");
  $("next-btn").classList.add("hidden");

  // Shuffle a permutation of answer indices so we know which original index
  // each display slot corresponds to — needed for correct language fallback.
  state.shuffledOrder = shuffle([0, 1, 2, 3]);
  state.answered = false;

  const answers = getQ(q, "answers");
  const list    = $("answers-list");
  list.innerHTML = "";

  state.shuffledOrder.forEach((origIdx, displayIdx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.setAttribute("data-idx", displayIdx);

    const label = document.createElement("span");
    label.className = "answer-label";
    label.textContent = String.fromCharCode(65 + displayIdx);
    btn.appendChild(label);
    btn.appendChild(document.createTextNode(answers[origIdx]));
    btn.addEventListener("click", () => selectAnswer(displayIdx));
    list.appendChild(btn);
  });
}

function selectAnswer(selectedDisplayIdx) {
  if (state.answered) return;
  state.answered = true;

  const q                 = state.questions[state.current];
  const selectedOrigIdx   = state.shuffledOrder[selectedDisplayIdx];
  const isCorrect         = selectedOrigIdx === q.correct;

  if (isCorrect) state.score++;

  state.results.push({
    questionId:          q.id,
    correct:             isCorrect,
    correctOriginalIdx:  q.correct,
    selectedOriginalIdx: selectedOrigIdx,
  });

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    const displayIdx = parseInt(btn.getAttribute("data-idx"), 10);
    const origIdx    = state.shuffledOrder[displayIdx];
    if (origIdx === q.correct)          btn.classList.add("correct");
    else if (displayIdx === selectedDisplayIdx) btn.classList.add("wrong");
  });

  $("explanation-text").textContent = getQ(q, "explanation");
  $("explanation-box").classList.remove("hidden");

  const isLast = state.current === state.questions.length - 1;
  $("next-btn").textContent = isLast ? t("resultBtn") : t("nextBtn");
  $("next-btn").classList.remove("hidden");
}

function nextQuestion() {
  state.current++;
  if (state.current >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

function showResults() {
  $("quiz-screen").classList.add("hidden");
  $("result-screen").classList.remove("hidden");
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

  const circle       = $("score-circle");
  const circumference = 2 * Math.PI * 54;
  circle.style.strokeDasharray  = circumference;
  circle.style.strokeDashoffset = circumference * (1 - pct / 100);
  $("ring-pct").textContent = `${pct} %`;

  renderWrongAnswers();
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
    // Derive text from the current language so switching language re-translates.
    const q       = QUESTIONS.find(qObj => qObj.id === r.questionId);
    const answers = getQ(q, "answers");

    const div = document.createElement("div");
    div.className = "wrong-item";

    const qp = document.createElement("p");
    qp.className   = "wi-question";
    qp.textContent = getQ(q, "question");

    const givenP    = document.createElement("p");
    givenP.className = "wi-given";
    const givenLabel = document.createElement("span");
    givenLabel.className   = "wi-label wrong-label";
    givenLabel.textContent = t("yourAnswer");
    givenP.appendChild(givenLabel);
    givenP.append(` ${answers[r.selectedOriginalIdx]}`);

    const correctP    = document.createElement("p");
    correctP.className = "wi-correct";
    const correctLabel = document.createElement("span");
    correctLabel.className   = "wi-label correct-label";
    correctLabel.textContent = t("correctAnswer");
    correctP.appendChild(correctLabel);
    correctP.append(` ${answers[r.correctOriginalIdx]}`);

    div.appendChild(qp);
    div.appendChild(givenP);
    div.appendChild(correctP);
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $("next-btn").addEventListener("click", nextQuestion);
  $("restart-btn").addEventListener("click", init);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  init();
});
