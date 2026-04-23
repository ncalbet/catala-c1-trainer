let questions = [];
let filtered = [];
let current = 0;
let currentLevel = "menu";

let state = JSON.parse(localStorage.getItem("c1_state")) || {
  score: 0,
  errors: []
};

let score = state.score;
let errors = state.errors;

// 📦 carregar dades
async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();
  renderMenu();
}

// 🧭 MENU PRINCIPAL
function renderMenu() {
  currentLevel = "menu";

  document.getElementById("app").innerHTML = `
    <div class="card">

      <h1>📘 Català C1 Trainer</h1>
      <p>Progressió B2 → C1 real</p>

      <button onclick="start('b2')">📘 Base B2</button>
      <button onclick="start('c1_transition')">📙 Transició C1</button>
      <button onclick="start('c1')">📕 C1 avançat</button>
      <button onclick="start('all')">🧪 Simulació completa</button>

      <hr>

      <p>⭐ Punts: ${score}</p>
      <p>❌ Errors: ${errors.length}</p>

    </div>
  `;
}

// 🚀 iniciar nivell
function start(level) {
  currentLevel = level;
  current = 0;

  if (level === "all") {
    filtered = questions;
  } else {
    filtered = questions.filter(q => q.level === level);
  }

  render();
}

// 🎯 render exercici
function render() {
  const q = filtered[current];

  if (!q) return showResults();

  let content = "";

  if (q.type === "multiple_choice") {
    content = q.options.map((opt, i) => `
      <button onclick="checkMC(${i})">${opt}</button>
    `).join("");
  } else {
    content = `
      <input id="answer" placeholder="Escriu la resposta">
      <button onclick="checkText()">Comprovar</button>
    `;
  }

  document.getElementById("app").innerHTML = `
    <div class="card">

      <button onclick="renderMenu()">⬅ Menú</button>

      <h3>${q.level.toUpperCase()} · ${q.category}</h3>
      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>
      <p>📌 Exemple: ${q.example}</p>

      ${content}

      <p id="feedback"></p>

      <button onclick="next()">Següent</button>

    </div>
  `;
}

// ✔ MC
function checkMC(i) {
  const q = filtered[current];
  const correct = i === q.correct;

  feedback(correct, q);

  save(correct, q);
}

// ✔ TEXT (multi resposta)
function checkText() {
  const q = filtered[current];
  const user = normalize(document.getElementById("answer").value);

  const correct = q.answers.some(a => normalize(a) === user);

  feedback(correct, q);

  save(correct, q);
}

// 🧠 normalització
function normalize(t) {
  return t.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:()"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// 💬 feedback
function feedback(correct, q) {
  const el = document.getElementById("feedback");

  if (correct) {
    score++;
    el.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    el.innerHTML = "✘ Incorrecte<br>" +
      "Respostes: " + q.answers.join(" / ");
  }
}

// 💾 guardar
function save(correct, q) {
  localStorage.setItem("c1_state", JSON.stringify({
    score,
    errors
  }));
}

// ➡️ següent
function next() {
  current++;
  render();
}

// 📊 resultats
function showResults() {
  document.getElementById("app").innerHTML = `
    <div class="card">

      <h2>📊 Resultats</h2>

      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>

      <button onclick="renderMenu()">🏠 Tornar al menú</button>

    </div>
  `;
}

loadData();