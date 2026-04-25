let questions = [];
let lessons = [];

let currentLesson = null;
let session = [];
let current = 0;

let urlParams = new URLSearchParams(window.location.search);
let lessonId = urlParams.get("lesson");
let levelId = urlParams.get("levelId");

let progress = JSON.parse(localStorage.getItem("c1_progress")) || {
  completed: [],
  xp: 0
};

// carregar
async function loadData() {
  const q = await fetch("data.json");
  questions = await q.json();

  const l = await fetch("lessons.json");
  lessons = await l.json();

  if (lessonId) {
    openLesson(lessonId);
  } else {
    renderMenu();
  }
}

// 🏠 MENU
function renderMenu() {
  document.getElementById("app").innerHTML = `
    <div class="content">

      <div class="card">
        <h2>📘 Català C1 Trainer</h2>

        <p>Aprèn amb teoria + pràctica + progressió.</p>

        <button onclick="goLevels()">🧭 Camí d’aprenentatge</button>
      </div>

    </div>
  `;
}

// 🧭 anar al mapa
function goLevels() {
  window.location.href = "levels.html";
}

// 📖 obrir lliçó
function openLesson(id) {
  currentLesson = lessons.find(l => l.id === id);

  const content = currentLesson.content.map(p => `<p>${p}</p>`).join("");
  const examples = currentLesson.examples.map(e => `<li>${e}</li>`).join("");

  document.getElementById("app").innerHTML = `
    <div class="content">

      <div class="card">

        <h2>${currentLesson.title}</h2>

        ${content}

        <h4>Exemples:</h4>
        <ul>${examples}</ul>

        <button onclick="startPractice()">Practicar</button>
        <button onclick="goLevels()">⬅ Tornar</button>

      </div>

    </div>
  `;
}

// 🎯 pràctica
function startPractice() {
  session = questions.filter(q =>
    currentLesson.exercise_ids.includes(q.id)
  );

  current = 0;
  renderExercise();
}

// 🧪 exercici
function renderExercise() {
  const q = session[current];
  if (!q) return completeLesson();

  document.getElementById("app").innerHTML = `
    <div class="content">

      <div class="card">

        <h3>${currentLesson.title}</h3>
        <h2>${q.question}</h2>

        <input id="answer">
        <button onclick="check()">Comprovar</button>

        <p id="feedback"></p>

        <button onclick="next()">Següent</button>

      </div>

    </div>
  `;
}

// ✔ check
function check() {
  const q = session[current];
  const user = normalize(document.getElementById("answer").value);

  const correct = q.answers.some(a => normalize(a) === user);

  if (correct) {
    progress.xp += 5;
  }

  localStorage.setItem("c1_progress", JSON.stringify(progress));

  document.getElementById("feedback").innerHTML =
    correct ? "✔ Correcte" : "✘ Incorrecte";
}

// següent
function next() {
  current++;
  renderExercise();
}

// 🏁 completar lliçó
function completeLesson() {

  if (levelId && !progress.completed.includes(Number(levelId))) {
    progress.completed.push(Number(levelId));
  }

  localStorage.setItem("c1_progress", JSON.stringify(progress));

  document.getElementById("app").innerHTML = `
    <div class="content">

      <div class="card">

        <h2>🎉 Lliçó completada</h2>
        <p>XP total: ${progress.xp}</p>

        <button onclick="goLevels()">🧭 Tornar al mapa</button>

      </div>

    </div>
  `;
}

// util
function normalize(t) {
  return t.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

loadData();