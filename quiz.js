let questions = [];
let index = 0;

const notes = localStorage.getItem("notes") || "";

generateQuiz(notes);
showQuestion();

function showQuestion(){
  const q = questions[index];
  const box = document.getElementById("quizBox");

  if(!q){
    box.innerHTML = "<h3>Quiz Finished 🎉</h3>";
    return;
  }

  if(q.type === "mc"){
    box.innerHTML = `
      <p>${q.q}</p>
      ${q.choices.map(c=>`
        <label>
          <input type="radio" name="ans" value="${c}"> ${c}
        </label><br>
      `).join("")}
    `;
  }

  if(q.type === "enum"){
    box.innerHTML = `
      <p>${q.q}</p>
      <textarea id="enumInput" placeholder="One answer per line"></textarea>
    `;
  }
}

function nextQuestion(){
  index++;
  showQuestion();
}

/* ===== QUIZ GENERATOR ===== */

function generateQuiz(text){
  const clean = text.replace(/\n/g," ");
  const sentences = clean.split(".").filter(s=>s.split(" ").length>6);
  const words = clean.toLowerCase().split(" ").filter(w=>w.length>5);

  if(sentences.length){
    const s = sentences[0];
    const ws = s.split(" ").filter(w=>w.length>5);
    const ans = ws[0];

    questions.push({
      type:"mc",
      q:s.replace(ans,"_____"),
      choices:shuffle([ans,random(words),random(words),random(words)]),
      answer:ans
    });
  }

  questions.push({
    type:"enum",
    q:"List THREE important terms from the note.",
    answers:shuffle([...new Set(words)]).slice(0,3)
  });
}

function shuffle(a){return a.sort(()=>Math.random()-0.5);}
function random(a){return a[Math.floor(Math.random()*a.length)]}
