let questions = [];
let current = 0;
let score = 0;
let errors = [];

async function loadData() {
  const res = await fetch("data.json");
  questions = await res.json();
  render();
}

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
      <input id="answer">
      <button onclick="checkFill()">Comprovar</button>
    `;
  }

  app.innerHTML = `
    <div class="card">
      <p><strong>Categoria:</strong> ${q.category}</p>
      <h2>${q.question}</h2>

      <p><em>${q.theory}</em></p>

      ${content}

      <p id="feedback"></p>

      <p>⭐ Puntuació: ${score}</p>

      <button onclick="next()">Següent</button>
    </div>
  `;
}

function checkMC(i) {
  const q = questions[current];
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
  const q = questions[current];
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
  if (current < questions.length - 1) {
    current++;
    render();
  } else {
    showResults();
  }
}

function showResults() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <div class="card">
      <h2>📊 Resultats finals</h2>
      <p>Puntuació: ${score} / ${questions.length}</p>
      <p>Errors: ${errors.length}</p>

      <button onclick="restart()">Tornar a començar</button>
    </div>
  `;
}

function restart() {
  current = 0;
  score = 0;
  errors = [];
  render();
}

loadData();