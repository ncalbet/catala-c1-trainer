let questions = [];
let current = 0;
let score = 0;
let errors = [];
let selectedCategory = "all";
let examMode = false;
let timeLeft = 60; // examen curt per prova

async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();
  render();
}

function getFilteredQuestions() {
  if (selectedCategory === "all") return questions;
  return questions.filter(q => q.category === selectedCategory);
}

function render() {
  const app = document.getElementById("app");
  const qList = getFilteredQuestions();
  const q = qList[current];

  if (!q) {
    showResults();
    return;
  }

  let content = "";

  if (q.type === "multiple_choice") {
    content = q.options.map((opt, i) => `
      <button onclick="checkMC(${i})">${opt}</button>
    `).join("");
  }

  if (q.type === "fill_gap") {
    content = `
      <input id="answer">
      <button onclick="checkFill()">Comprovar</button>
    `;
  }

  app.innerHTML = `
    <div class="card">
      <h3>Categoria: ${q.category}</h3>
      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>

      ${content}

      <p id="feedback"></p>

      <p>⭐ Puntuació: ${score}</p>

      <button onclick="next()">Següent</button>

      <hr>

      <button onclick="setCategory('all')">Totes</button>
      <button onclick="setCategory('gramatica')">Gramàtica</button>
      <button onclick="setCategory('lexic')">Lèxic</button>
      <button onclick="setCategory('ortografia')">Ortografia</button>

      <br><br>

      <button onclick="startExam()">🧪 Mode examen</button>
    </div>
  `;
}

function setCategory(cat) {
  selectedCategory = cat;
  current = 0;
  render();
}

function checkMC(i) {
  const q = getFilteredQuestions()[current];
  const feedback = document.getElementById("feedback");

  if (i === q.correct) {
    score++;
    feedback.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    feedback.innerHTML = "✘ Incorrecte<br>" + q.explanation;
  }
}

function checkFill() {
  const q = getFilteredQuestions()[current];
  const val = document.getElementById("answer").value.trim();
  const feedback = document.getElementById("feedback");

  if (val === q.answer) {
    score++;
    feedback.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    feedback.innerHTML = "✘ Incorrecte<br>" + q.explanation;
  }
}

function next() {
  current++;
  render();
}

function showResults() {
  const app = document.getElementById("app");

  const errorQuestions = questions.filter(q => errors.includes(q.id));

  app.innerHTML = `
    <div class="card">
      <h2>📊 Resultats finals</h2>
      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>

      <button onclick="reviewErrors()">🔁 Revisar errors</button>
      <button onclick="restart()">Tornar a començar</button>
    </div>
  `;
}

function reviewErrors() {
  questions = questions.filter(q => errors.includes(q.id));
  current = 0;
  score = 0;
  errors = [];
  render();
}

function restart() {
  current = 0;
  score = 0;
  errors = [];
  selectedCategory = "all";
  loadData();
}

function startExam() {
  examMode = true;
  current = 0;
  score = 0;
  errors = [];
  timeLeft = 60;

  startTimer();
  render();
}

function startTimer() {
  const interval = setInterval(() => {
    if (!examMode) {
      clearInterval(interval);
      return;
    }

    timeLeft--;

    if (timeLeft <= 0) {
      examMode = false;
      clearInterval(interval);
      showResults();
    }
  }, 1000);
}

loadData();