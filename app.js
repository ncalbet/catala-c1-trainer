let questions = [];
let current = 0;

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

function updateSRS(id, correct) {
  if (!reviewData[id]) {
    reviewData[id] = { strength: 0, nextReview: 0 };
  }

  reviewData[id].strength = correct
    ? reviewData[id].strength + 1
    : 0;

  const delay = Math.pow(2, reviewData[id].strength);
  reviewData[id].nextReview = Date.now() + delay * 10000;

  localStorage.setItem("c1_srs", JSON.stringify(reviewData));
}

// 📦 carregar dades
async function loadData() {
  const res = await fetch("data.json");
  const allQuestions = await res.json();

  questions = allQuestions.filter(q => {
    const data = reviewData[q.id];
    if (!data) return true;
    return Date.now() >= data.nextReview;
  });

  if (questions.length === 0) questions = allQuestions;

  render();
}

// 🎯 render
function render() {
  const app = document.getElementById("app");
  const q = questions[current];

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

  const progress = (current / questions.length) * 100;

  app.innerHTML = `
    <div class="card">

      <div class="stats">
        ⭐ ${score} | ❌ ${errors.length}
      </div>

      <div style="height:8px;background:#e5e7eb;border-radius:5px;">
        <div style="width:${progress}%;height:100%;background:#3b82f6;border-radius:5px;"></div>
      </div>

      <h3>${q.category}</h3>
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
  const q = questions[current];
  const correct = i === q.correct;

  feedback(correct, q);

  updateSRS(q.id, correct);
  saveProgress();
}

// ✔ TEXT (SEMÀNTIC)
function checkText() {
  const q = questions[current];
  const user = document.getElementById("answer").value;

  const correct = isSemanticallyCorrect(user, q);

  feedback(correct, q, user);

  updateSRS(q.id, correct);
  saveProgress();
}

// 🧠 NORMATITZACIÓ
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:()"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// 🧠 GRUPS SEMÀNTICS (CLAU DEL SISTEMA)
const semanticGroups = [
  {
    id: "dir_moltes_coses",
    patterns: [
      "va dir moltes coses",
      "va afirmar moltes idees",
      "va expressar moltes idees",
      "va manifestar moltes idees",
      "va dir nombroses coses",
      "va expressar nombroses idees"
    ]
  },
  {
    id: "fer_servir",
    patterns: [
      "utilitzar",
      "emprar",
      "fer servir"
    ]
  },
  {
    id: "adonar_se",
    patterns: [
      "adonar-se",
      "va adonar-se",
      "s'adonar"
    ]
  }
];

// 🧠 SEMÀNTICA PRINCIPAL
function isSemanticallyCorrect(user, q) {
  const u = normalize(user);

  // 1. si hi ha resposta múltiple directa
  const answers = getAnswers(q);
  if (answers.length) {
    if (answers.some(a => normalize(a) === u)) return true;
  }

  // 2. grups semàntics
  for (const group of semanticGroups) {
    if (group.patterns.map(normalize).includes(u)) {
      if (answers.some(a => group.patterns.map(normalize).includes(normalize(a)))) {
        return true;
      }
    }
  }

  return false;
}

// 📦 respostes
function getAnswers(q) {
  if (Array.isArray(q.answers)) return q.answers;
  if (q.answer) return [q.answer];
  return [];
}

// 💬 feedback
function feedback(correct, q, user) {
  const el = document.getElementById("feedback");

  if (correct) {
    score++;
    el.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    el.innerHTML = `
      ✘ Incorrecte<br>
      Resposta possible: ${getAnswers(q).join(" / ")}
    `;
  }
}

// 💾 guardar
function saveProgress() {
  state.score = score;
  state.errors = errors;
  saveState();
}

// ➡️ següent
function next() {
  current++;
  if (current >= questions.length) showResults();
  else render();
}

// 📊 resultats
function showResults() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h2>Resultats</h2>
      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>
      <button onclick="restart()">Reiniciar</button>
    </div>
  `;
}

// 🔄 restart
function restart() {
  current = 0;
  score = 0;
  errors = [];
  saveState();
  loadData();
}

loadData();