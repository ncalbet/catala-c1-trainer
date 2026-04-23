let questions = [];
let filtered = [];
let current = 0;

let mode = "menu";
let currentCategory = null;

// 🧠 estat usuari
function loadState() {
  const saved = localStorage.getItem("c1_state");
  return saved ? JSON.parse(saved) : { score: 0, errors: [] };
}

function saveState() {
  localStorage.setItem("c1_state", JSON.stringify({ score, errors }));
}

let state = loadState();
let score = state.score;
let errors = state.errors;

// 🧠 SRS
let reviewData = JSON.parse(localStorage.getItem("c1_srs")) || {};

// 📦 carregar dades
async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();
  renderMenu();
}

// 🧭 MENU PRINCIPAL
function renderMenu() {
  mode = "menu";
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card">

      <h1>📘 Català C1 Trainer</h1>

      <p>Tria una categoria:</p>

      <button onclick="startCategory('interferencia')">🔴 Interferències</button>
      <button onclick="startCategory('subjuntiu')">🟢 Subjuntiu</button>
      <button onclick="startCategory('lexic')">🔵 Lèxic</button>
      <button onclick="startCategory('connectors')">🟣 Connectors</button>
      <button onclick="startCategory('ortografia')">🟡 Ortografia</button>

      <hr>

      <button onclick="startMixed()">🎯 Mode mixt (C1 complet)</button>
      <button onclick="startExam()">🧪 Mode examen</button>

      <p>⭐ Punts: ${score}</p>
      <p>❌ Errors: ${errors.length}</p>

    </div>
  `;
}

// 🚀 iniciar categoria
function startCategory(cat) {
  currentCategory = cat;
  mode = "practice";
  current = 0;

  filtered = questions.filter(q => q.category === cat);

  render();
}

// 🎯 mode mixt
function startMixed() {
  mode = "practice";
  current = 0;
  filtered = questions;
  render();
}

// 🧪 mode examen (simulat)
function startExam() {
  mode = "practice";
  current = 0;

  filtered = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 15);

  render();
}

// 🎯 render exercici
function render() {
  const app = document.getElementById("app");
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

  const progress = (current / filtered.length) * 100;

  app.innerHTML = `
    <div class="card">

      <button onclick="renderMenu()">⬅ Menú</button>

      <div class="stats">
        ⭐ ${score} | ❌ ${errors.length} | 📂 ${q.category}
      </div>

      <div style="height:8px;background:#e5e7eb;border-radius:5px;">
        <div style="width:${progress}%;height:100%;background:#3b82f6;border-radius:5px;"></div>
      </div>

      <h2>${q.question}</h2>
      <p><em>${q.theory}</em></p>

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

  updateSRS(q.id, correct);
  saveProgress();
}

// ✔ TEXT
function checkText() {
  const q = filtered[current];
  const user = document.getElementById("answer").value;

  const correct = isCorrect(user, q);

  feedback(correct, q);

  updateSRS(q.id, correct);
  saveProgress();
}

// 🧠 comparació simple + semàntica existent
function isCorrect(user, q) {
  const u = normalize(user);
  const answers = q.answers ? q.answers : [q.answer];

  return answers.some(a => normalize(a) === u);
}

// 🧠 normalització
function normalize(text) {
  return text
    .toLowerCase()
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
      (q.answers ? q.answers.join(" / ") : q.answer);
  }
}

// ➡️ següent
function next() {
  current++;
  if (current >= filtered.length) showResults();
  else render();
}

// 📊 resultats
function showResults() {
  document.getElementById("app").innerHTML = `
    <div class="card">

      <h2>📊 Resultat</h2>

      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>

      <button onclick="renderMenu()">🏠 Tornar al menú</button>
      <button onclick="restart()">🔄 Reiniciar dades</button>

    </div>
  `;
}

// 🔄 restart
function restart() {
  score = 0;
  errors = [];
  current = 0;

  saveState();
  renderMenu();
}

loadData();