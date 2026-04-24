let questions = [];
let session = [];
let current = 0;

let urlParams = new URLSearchParams(window.location.search);
let selectedLevel = urlParams.get("level");

let stats = JSON.parse(localStorage.getItem("c1_stats")) || {};
let progress = JSON.parse(localStorage.getItem("c1_progress")) || {
  completed: [],
  xp: 0
};

// carregar dades
async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();

  if (selectedLevel) {
    startLevel(selectedLevel);
  } else {
    renderMenu();
  }
}

// HEADER + NAV GLOBAL
function renderLayout(content, title = "") {
  document.getElementById("app").innerHTML = `

    <div class="header">
      <div class="header-title">
        📘 Català C1 Trainer
      </div>

      <div class="header-info">
        ${title}
        <span>⭐ ${progress.xp} XP</span>
      </div>
    </div>

    <div class="nav">
      <button onclick="renderMenu()">🏠 Inici</button>
      <button onclick="goLevels()">🧭 Nivells</button>
      <button onclick="goDashboard()">📊 Progrés</button>
      <button onclick="goHelp()">❓ Ajuda</button>
    </div>

    <div class="content">
      ${content}
    </div>
  `;
}

// MENU
function renderMenu() {
  renderLayout(`
    <div class="card">

      <h2>Benvingut</h2>

      <p>Aquesta app et permet assolir el nivell C1 de català amb pràctica adaptativa.</p>

      <button onclick="startAdaptive()">🎯 Practicar (intel·ligent)</button>
      <button onclick="goLevels()">🧭 Seguir el camí</button>

    </div>
  `, "Menú principal");
}

// ajuda
function goHelp() {
  renderLayout(`
    <div class="card">

      <h2>❓ Com funciona</h2>

      <p><strong>🎯 Mode intel·ligent</strong><br>
      Practica segons els teus errors.</p>

      <p><strong>🧭 Nivells</strong><br>
      Segueix un camí estructurat B2 → C1.</p>

      <p><strong>📊 Progrés</strong><br>
      Consulta el teu rendiment.</p>

      <p><strong>💡 Consell</strong><br>
      Practica cada dia per consolidar el nivell.</p>

    </div>
  `, "Ajuda");
}

// navegació
function goLevels() {
  window.location.href = "levels.html";
}

function goDashboard() {
  window.location.href = "dashboard.html";
}

// iniciar nivell
function startLevel(levelId) {
  current = 0;

  const mapping = {
    "1": "b2",
    "2": "b2",
    "3": "c1_transition",
    "4": "c1_transition",
    "5": "c1",
    "6": "c1"
  };

  const levelType = mapping[levelId] || "b2";

  session = questions.filter(q => q.level === levelType);

  renderExercise();
}

// mode adaptatiu
function startAdaptive() {
  session = questions
    .map(q => ({ ...q, weight: getWeight(q) }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 10);

  current = 0;
  renderExercise();
}

// pes adaptatiu
function getWeight(q) {
  const s = stats[q.id] || { correct: 0, wrong: 0 };
  return (s.wrong - s.correct) * 2;
}

// EXERCICI
function renderExercise() {
  const q = session[current];

  if (!q) return completeLevel();

  let content = "";

  if (q.type === "multiple_choice") {
    content = q.options.map((opt, i) =>
      `<button onclick="checkMC(${i})">${opt}</button>`
    ).join("");
  } else {
    content = `
      <input id="answer" placeholder="Resposta">
      <button onclick="checkText()">Comprovar</button>
    `;
  }

  renderLayout(`
    <div class="card">

      <div class="breadcrumb">
        ${q.level.toUpperCase()} > ${q.category} > ${current + 1}/${session.length}
      </div>

      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>
      <p>📌 ${q.example}</p>

      ${content}

      <p id="feedback"></p>

      <button onclick="next()">Següent</button>

    </div>
  `, `${q.level.toUpperCase()} · ${q.category}`);
}

// respostes
function checkMC(i) {
  const q = session[current];
  handleResult(i === q.correct, q);
}

function checkText() {
  const q = session[current];
  const user = normalize(document.getElementById("answer").value);

  const correct = q.answers.some(a => normalize(a) === user);
  handleResult(correct, q);
}

// resultat
function handleResult(correct, q) {
  if (!stats[q.id]) stats[q.id] = { correct: 0, wrong: 0 };

  if (correct) {
    stats[q.id].correct++;
    progress.xp += 5;
  } else {
    stats[q.id].wrong++;
  }

  localStorage.setItem("c1_stats", JSON.stringify(stats));
  localStorage.setItem("c1_progress", JSON.stringify(progress));

  document.getElementById("feedback").innerHTML = correct
    ? "✔ Correcte<br>" + q.explanation
    : "✘ Incorrecte<br>" + q.answers.join(" / ");
}

// següent
function next() {
  current++;
  renderExercise();
}

// final
function completeLevel() {
  renderLayout(`
    <div class="card">

      <h2>🎉 Sessió completada</h2>
      <p>XP total: ${progress.xp}</p>

      <button onclick="goLevels()">🧭 Tornar al mapa</button>

    </div>
  `, "Final");
}

// util
function normalize(t) {
  return t.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?]/g, "")
    .trim();
}

loadData();