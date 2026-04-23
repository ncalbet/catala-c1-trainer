const questions = [
  {
    question: "Quina frase és correcta?",
    options: [
      "Espero que ve",
      "Espero que vingui"
    ],
    correct: 1,
    explanation: "Després de 'esperar que' cal subjuntiu."
  }
];

let current = 0;

function render() {
  const app = document.getElementById("app");
  const q = questions[current];

  app.innerHTML = `
    <div class="card">
      <h2>${q.question}</h2>
      ${q.options.map((opt, i) => `
        <button onclick="check(${i})">${opt}</button>
      `).join("")}
      <p id="feedback"></p>
    </div>
  `;
}

function check(i) {
  const q = questions[current];
  const feedback = document.getElementById("feedback");

  if (i === q.correct) {
    feedback.innerHTML = "<span style='color:green'>Correcte!</span><br>" + q.explanation;
  } else {
    feedback.innerHTML = "<span style='color:red'>Incorrecte.</span><br>" + q.explanation;
  }
}

render();