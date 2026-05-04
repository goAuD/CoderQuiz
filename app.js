// app.js — Quiz-Logik

const state = {
  questions: [],
  current: 0,
  score: 0,
  answered: false,
  results: [],
};

const $ = id => document.getElementById(id);

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function init() {
  state.questions = shuffle(QUESTIONS);
  state.current = 0;
  state.score = 0;
  state.answered = false;
  state.results = [];
  $("quiz-screen").classList.remove("hidden");
  $("result-screen").classList.add("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = state.questions[state.current];
  const total = state.questions.length;

  $("progress-bar").style.width = `${(state.current / total) * 100}%`;
  $("progress-text").textContent = `Frage ${state.current + 1} von ${total}`;
  $("score-display").textContent = `Punkte: ${state.score}`;
  $("topic-badge").textContent = q.topic;
  $("question-text").textContent = q.question;
  $("explanation-box").classList.add("hidden");
  $("next-btn").classList.add("hidden");

  const list = $("answers-list");
  list.innerHTML = "";
  state.answered = false;

  q.answers.forEach((text, idx) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.setAttribute("data-idx", idx);
    btn.innerHTML = `<span class="answer-label">${String.fromCharCode(65 + idx)}</span>${text}`;
    btn.addEventListener("click", () => selectAnswer(idx));
    list.appendChild(btn);
  });
}

function selectAnswer(selectedIdx) {
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.current];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) state.score++;

  state.results.push({
    question: q.question,
    correct: isCorrect,
    correctAnswer: q.answers[q.correct],
    selectedAnswer: q.answers[selectedIdx],
  });

  const btns = document.querySelectorAll(".answer-btn");
  btns.forEach(btn => {
    btn.disabled = true;
    const idx = parseInt(btn.getAttribute("data-idx"), 10);
    if (idx === q.correct) btn.classList.add("correct");
    else if (idx === selectedIdx) btn.classList.add("wrong");
  });

  $("explanation-text").textContent = q.explanation;
  $("explanation-box").classList.remove("hidden");

  const nextBtn = $("next-btn");
  const isLast = state.current === state.questions.length - 1;
  nextBtn.textContent = isLast ? "Ergebnis anzeigen" : "Nächste Frage →";
  nextBtn.classList.remove("hidden");
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

  const total = state.questions.length;
  const pct = Math.round((state.score / total) * 100);

  $("final-score").textContent = `${state.score} / ${total}`;
  $("final-percent").textContent = `${pct} %`;

  const grade = $("grade-text");
  if (pct >= 80) {
    grade.textContent = "Ausgezeichnet — bestanden!";
    grade.className = "grade pass";
  } else if (pct >= 60) {
    grade.textContent = "Gut — knapp bestanden.";
    grade.className = "grade ok";
  } else {
    grade.textContent = "Nicht bestanden — weiter üben!";
    grade.className = "grade fail";
  }

  // Scorekreis animieren
  const circle = $("score-circle");
  const circumference = 2 * Math.PI * 54;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference * (1 - pct / 100);

  renderWrongAnswers();
}

function renderWrongAnswers() {
  const wrong = state.results.filter(r => !r.correct);
  const container = $("wrong-list");
  container.innerHTML = "";

  if (wrong.length === 0) {
    container.innerHTML = "<p class='all-correct'>Alle Fragen richtig beantwortet!</p>";
    return;
  }

  wrong.forEach(r => {
    const div = document.createElement("div");
    div.className = "wrong-item";
    div.innerHTML = `
      <p class="wi-question">${r.question}</p>
      <p class="wi-given"><span class="wi-label wrong-label">Deine Antwort:</span> ${r.selectedAnswer}</p>
      <p class="wi-correct"><span class="wi-label correct-label">Richtig:</span> ${r.correctAnswer}</p>
    `;
    container.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  $("next-btn").addEventListener("click", nextQuestion);
  $("restart-btn").addEventListener("click", init);
  init();
});
