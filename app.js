let questions = [];
let current = 0;

// 🧠 estat usuari
function loadState() {
  const saved = localStorage.getItem("c1_state");
  return saved ? JSON.parse(saved) : {
    score: 0,
    errors: []
  };
}

function saveState() {
  localStorage.setItem("c1_state", JSON.stringify({
    score,
    errors
  }));
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

  if (correct) {
    reviewData[id].strength++;
  } else {
    reviewData[id].strength = 0;
  }

  const delay = Math.pow(2, reviewData[id].strength);
  reviewData[id].nextReview = Date.now() + delay * 10000;

  localStorage.setItem("c1_srs", JSON.stringify(reviewData));
}

// 📦 carregar preguntes
async function loadData() {
  const res = await fetch("data.json");
  const allQuestions = await res.json();

  questions = allQuestions.filter(q => {
    const data = reviewData[q.id];
    if (!data) return true;
    return Date.now() >= data.nextReview;
  });

  if (questions.length === 0) {
    questions = allQuestions;
  }

  render();
}

// 🎯 render
function render() {
  const app = document.getElementById("app");
  const q = questions[current];

  if (!q) {
    showResults();
    return;
  }

  let content = "";

  // 🟢 MULTIPLE CHOICE
  if (q.type === "multiple_choice") {
    content = q.options.map((opt, i) => `
      <button onclick="checkMC(${i})">${opt}</button>
    `).join("");
  }

  // 🔵 FILL GAP
  if (q.type === "fill_gap") {
    content = `
      <input id="answer" placeholder="Escriu la resposta">
      <button onclick="checkFill()">Comprovar</button>
    `;
  }

  // 🟠 ERROR DETECTION
  if (q.type === "error_detection") {
    content = `
      <input id="answer" placeholder="Quin és l'error?">
      <button onclick="checkText()">Comprovar</button>
    `;
  }

  // 🟣 REORDERING
  if (q.type === "reordering") {
    content = `
      <input id="answer" placeholder="Escriu la frase ordenada">
      <button onclick="checkText()">Comprovar</button>
    `;
  }

  // 🔴 SENTENCE TRANSFORM
  if (q.type === "sentence_transform") {
    content = `
      <input id="answer" placeholder="Reformula la frase">
      <button onclick="checkText()">Comprovar</button>
    `;
  }

  const progress = (current / questions.length) * 100;

  app.innerHTML = `
    <div class="card">

      <div class="stats">
        ⭐ ${score} punts | ❌ ${errors.length} errors
      </div>

      <div style="margin:10px 0;">
        <div style="height:8px;background:#e5e7eb;border-radius:5px;">
          <div style="width:${progress}%;height:100%;background:#3b82f6;border-radius:5px;"></div>
        </div>
      </div>

      <h3>Categoria: ${q.category}</h3>
      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>

      ${content}

      <p id="feedback"></p>

      <button onclick="next()">Següent</button>

    </div>
  `;
}

// ✔ multiple choice
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

  updateSRS(q.id, correct);
  saveProgress();
}

// ✔ fill gap
function checkFill() {
  const q = questions[current];
  const val = document.getElementById("answer").value.trim();
  handleTextAnswer(val, q.answer);
}

// ✔ text-based (error, reorder, transform)
function checkText() {
  const q = questions[current];
  const val = document.getElementById("answer").value.trim();

  handleTextAnswer(val, q.answer);
}

// 🧠 comparació flexible
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // accents fora
    .replace(/[.,!?]/g, "")
    .trim();
}

function handleTextAnswer(user, correctAnswer) {
  const feedback = document.getElementById("feedback");

  const correct = normalize(user) === normalize(correctAnswer);

  if (correct) {
    score++;
    feedback.innerHTML = "✔ Correcte<br>" + correctAnswer;
  } else {
    errors.push(questions[current].id);
    feedback.innerHTML = "✘ Incorrecte<br>Resposta correcta: " + correctAnswer;
  }

  updateSRS(questions[current].id, correct);
  saveProgress();
}

// 💾 guardar estat
function saveProgress() {
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

// 📊 resultats
function showResults() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card">
      <h2>📊 Resultats</h2>

      <p>Puntuació: ${score}</p>
      <p>Errors: ${errors.length}</p>

      <button onclick="restart()">Tornar a començar</button>
    </div>
  `;
}

// 🔄 reiniciar
function restart() {
  current = 0;
  score = 0;
  errors = [];

  saveState();
  loadData();
}

// 🚀 iniciar
loadData();