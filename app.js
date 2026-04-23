let questions = [];
let current = 0;

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
      <input id="answer" placeholder="Escriu la resposta">
      <button onclick="checkFill()">Comprovar</button>
    `;
  }

  app.innerHTML = `
    <div class="card">
      <h2>${q.question}</h2>
      <p><strong>📘 Teoria:</strong> ${q.theory}</p>
      ${content}
      <p id="feedback"></p>
      <button onclick="next()">Següent</button>
    </div>
  `;
}

function checkMC(i) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");

  if (i === q.correct) {
    feedback.innerHTML = "✔ Correcte!<br>" + q.explanation;
  } else {
    feedback.innerHTML = "✘ Incorrecte.<br>" + q.explanation;
  }
}

function checkFill() {
  const q = questions[current];
  const val = document.getElementById("answer").value.trim();
  const feedback = document.getElementById("feedback");

  if (val === q.answer) {
    feedback.innerHTML = "✔ Correcte!<br>" + q.explanation;
  } else {
    feedback.innerHTML = "✘ Incorrecte.<br>" + q.explanation;
  }
}

function next() {
  if (current < questions.length - 1) {
    current++;
    render();
  }
}

loadData();