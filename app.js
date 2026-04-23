let questions = [];
let current = 0;

// 🧠 Estat persistent
function loadState() {
  const saved = localStorage.getItem("c1_state");
  return saved ? JSON.parse(saved) : {
    score: 0,
    errors: [],
    categoryStats: {
      gramatica: 0,
      lexic: 0,
      ortografia: 0
    }
  };
}

function saveState() {
  localStorage.setItem("c1_state", JSON.stringify(state));
}

let state = loadState();
let score = state.score;
let errors = state.errors;

// 📦 carregar dades
async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();
  render();
}

// 🧠 actualitzar estadística per categoria
function updateCategory(cat, correct) {
  if (!state.categoryStats[cat]) {
    state.categoryStats[cat] = 0;
  }

  if (correct) {
    state.categoryStats[cat] += 1;
  } else {
    state.categoryStats[cat] -= 1;
  }

  saveState();
}

// 🎯 render
function render() {
  const app = document.getElementById("app");
  const q = questions[current];

  let content = "";

  if (q.type === "multiple_choice") {
    content = q.options.map((opt, i) => `
      <button onclick="checkMC(${i})">${opt}</button>
    `).join("");
  }

  if (q.type === "fill_gap") {
    content = `
      <input id="answer" placeholder="Escriu la resposta">
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

      <hr>

      <h4>📊 Progrés</h4>
      <p>Gramàtica: ${state.categoryStats.gramatica || 0}</p>
      <p>Lèxic: ${state.categoryStats.lexic || 0}</p>
      <p>Ortografia: ${state.categoryStats.ortografia || 0}</p>

      <button onclick="next()">Següent</button>
    </div>
  `;
}

// ✔ MC
function checkMC(i) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");

  const correct = i === q.correct;

  if (correct) {
    score++;
    feedback.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    feedback.innerHTML = "✘ Incorrecte<br>" + q.explanation;
  }

  updateCategory(q.category, correct);
  state.score = score;
  state.errors = errors;
  saveState();
}

// ✔ fill
function checkFill() {
  const q = questions[current];
  const val = document.getElementById("answer").value.trim();
  const feedback = document.getElementById("feedback");

  const correct = val === q.answer;

  if (correct) {
    score++;
    feedback.innerHTML = "✔ Correcte<br>" + q.explanation;
  } else {
    errors.push(q.id);
    feedback.innerHTML = "✘ Incorrecte<br>" + q.explanation;
  }

  updateCategory(q.category, correct);
  state.score = score;
  state.errors = errors;
  saveState();
}

// ➡️ següent
function next() {
  current++;

  if (current >= questions.length) {
    showResults();
  } else {
    render();
  }
}

// 📊 resultats + recomanació
function showResults() {
  const app = document.getElementById("app");

  const weakest = getWeakestCategory();

  app.innerHTML = `
    <div class="card">
      <h2>📊 Resultats finals</h2>

      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>

      <h3>🧠 Recomanació</h3>
      <p>Has de practicar més: <strong>${weakest}</strong></p>

      <button onclick="reviewErrors()">🔁 Revisar errors</button>
      <button onclick="restart()">Reiniciar</button>
    </div>
  `;
}

// 🔁 errors
function reviewErrors() {
  questions = questions.filter(q => errors.includes(q.id));
  current = 0;
  score = 0;
  errors = [];
  render();
}

// 🔄 restart
function restart() {
  current = 0;
  score = 0;
  errors = [];

  state = {
    score: 0,
    errors: [],
    categoryStats: {
      gramatica: 0,
      lexic: 0,
      ortografia: 0
    }
  };

  saveState();
  loadData();
}

// 🧠 detectar punt feble
function getWeakestCategory() {
  const stats = state.categoryStats;

  let minCat = "gramàtica";
  let minVal = stats.gramatica || 0;

  for (let cat in stats) {
    if (stats[cat] < minVal) {
      minVal = stats[cat];
      minCat = cat;
    }
  }

  return minCat;
}

loadData();