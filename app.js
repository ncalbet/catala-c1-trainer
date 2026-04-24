let questions = [];
let session = [];
let current = 0;

let urlParams = new URLSearchParams(window.location.search);
let selectedLevel = urlParams.get("level");

// stats adaptatius
let stats = JSON.parse(localStorage.getItem("c1_stats")) || {};

// progrés tipus Duolingo
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

// MENU
function renderMenu() {
  document.getElementById("app").innerHTML = `
    <div class="card">

      <h1>📘 Català C1 Trainer</h1>

      <button onclick="startAdaptive()">🎯 Mode intel·ligent</button>
      <button onclick="goLevels()">🧭 Camí d’aprenentatge</button>
      <button onclick="goDashboard()">📊 Dashboard</button>

    </div>
  `;
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

  render();
}

// mode adaptatiu
function startAdaptive() {
  session = questions
    .map(q => ({ ...q, weight: getWeight(q) }))
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 10);

  current = 0;
  render();
}

// pes adaptatiu
function getWeight(q) {
  const s = stats[q.id] || { correct: 0, wrong: 0 };
  return (s.wrong - s.correct) * 2;
}

// RENDER UX MILLORAT
function render() {
  const q = session[current];

  if (!q) return completeLevel();

  const percent = Math.round((current / session.length) * 100);

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

  document.getElementById("app").innerHTML = `

    <div class="header">
      <div class="header-top">
        <span>📘 ${q.level.toUpperCase()} · ${q.category}</span>
        <span>⭐ XP: ${progress.xp}</span>
      </div>

      <div class="progress-bar">
        <div class="progress-fill" style="width:${percent}%"></div>
      </div>
    </div>

    <div class="card">

      <div class="breadcrumb">
        ${q.level.toUpperCase()} > ${q.category} > ${current + 1}/${session.length}
      </div>

      <div class="actions">
        <button onclick="renderMenu()">🏠</button>
        <button onclick="goLevels()">🧭</button>
      </div>

      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>
      <p>📌 ${q.example}</p>

      ${content}

      <p id="feedback"></p>

      <button onclick="next()">Següent</button>

    </div>
  `;
}

// resposta MC
function checkMC(i) {
  const q = session[current];
  handleResult(i === q.correct, q);
}

// resposta text
function checkText() {
  const q = session[current];
  const user = normalize(document.getElementById("answer").value);

  const correct = q.answers.some(a => normalize(a) === user);

  handleResult(correct, q);
}

// gestió resultat
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
  render();
}

// completar nivell
function completeLevel() {
  if (selectedLevel && !progress.completed.includes(Number(selectedLevel))) {
    progress.completed.push(Number(selectedLevel));
  }

  localStorage.setItem("c1_progress", JSON.stringify(progress));

  document.getElementById("app").innerHTML = `
    <div class="card">

      <h2>🎉 Sessió completada</h2>

      <p>XP total: ${progress.xp}</p>

      <button onclick="goLevels()">🧭 Tornar al mapa</button>
      <button onclick="renderMenu()">🏠 Menú</button>

    </div>
  `;
}

// normalitzar text
function normalize(t) {
  return t.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?]/g, "")
    .trim();
}

loadData();