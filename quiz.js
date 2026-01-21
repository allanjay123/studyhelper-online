let questions = [];
let index = 0;

const noteText = localStorage.getItem("notes");

if (!noteText || noteText.trim() === "") {
  questions = [{
    type: "mc",
    q: "No notes found. Please add a note first.",
    choices: ["Go back", "Reload", "Refresh", "Exit"],
    answer: "Go back"
  }];
} else {
  generateQuiz(noteText);
}

showQuestion();

/* ======================= */

function showQuestion() {
  const box = document.getElementById("quizBox");
  const q = questions[index];

  if (!q) {
    box.innerHTML = "<h3>✅ Quiz Finished</h3>";
    return;
  }

  if (q.type === "mc") {
    box.innerHTML = `
      <p>${q.q}</p>
      ${q.choices.map(c => `
        <label>
          <input type="radio" name="ans"> ${c}
        </label><br>
      `).join("")}
    `;
  }

  if (q.type === "enum") {
    box.innerHTML = `
      <p>${q.q}</p>
      <textarea placeholder="One answer per line"></textarea>
    `;
  }
}

function nextQuestion() {
  index++;
  showQuestion();
}

/* ======================= */

function generateQuiz(text) {
  const sentences = text.split(".").filter(s => s.trim().length > 30);
  const words = text.toLowerCase().split(" ").filter(w => w.length > 5);

  if (sentences.length > 0) {
    const s = sentences[0];
    const key = s.split(" ").find(w => w.length > 5);

    questions.push({
      type: "mc",
      q: s.replace(key, "_____"),
      choices: shuffle([
        key,
        words[1] || "option",
        words[2] || "choice",
        words[3] || "answer"
      ]),
      answer: key
    });
  }

  questions.push({
    type: "enum",
    q: "List THREE important words from the note.",
    answers: words.slice(0, 3)
  });
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
