// მონაცემების წამოღება მეხსიერებიდან (თუ არსებობს)
let words = JSON.parse(localStorage.getItem('medVocabDB') || '[]');
let current = {};

// HTML ელემენტებთან კავშირი
const input = document.getElementById("wordInput");
const termEl = document.getElementById("termDisplay");
const ipa = document.getElementById("ipaDisplay");
const def = document.getElementById("defDisplay");
const example = document.getElementById("exDisplay");
const geo = document.getElementById("geoDisplay");
const quizQ = document.getElementById("quizQuestion");
const quizOpts = document.getElementById("quizOptions");

async function generate() {
  const term = input.value.trim();
  if (!term) return;

  const btn = document.querySelector("button");
  btn.innerText = "მიმდინარეობს...";
  btn.disabled = true;

  try {
    // შეცვლილია სწორ, ფარდობით მისამართზე Vercel-ისთვის
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ term })
    });

    const data = await res.json();
    
    if (data.error) throw new Error(data.error);

    current = { term, ...data };

    // ეკრანზე გამოტანა
    termEl.innerText = term;
    ipa.innerText = data.ipa || "";
    def.innerText = data.definition || "";
    example.innerText = data.example || "";
    geo.innerText = data.georgian || "";

    // ბაზაში დამატება და მეხსიერებაში შენახვა
    words.push(current);
    localStorage.setItem('medVocabDB', JSON.stringify(words));

    // ქვიზის განახლება
    buildQuiz();
    input.value = ""; // ინპუტის გასუფთავება
  } catch (err) {
    alert("შეცდომა: " + err.message);
  } finally {
    btn.innerText = "გენერაცია";
    btn.disabled = false;
  }
}

function speak() {
  if (!current.term) return;
  const u = new SpeechSynthesisUtterance(current.term);
  u.lang = 'en-US';
  u.rate = 0.8; // ცოტა ნელი წარმოთქმა უკეთესი სწავლისთვის
  speechSynthesis.speak(u);
}

function buildQuiz() {
  // ქვიზი ჩაირთვება მხოლოდ თუ ბაზაში 2-ზე მეტი სიტყვაა
  if (words.length < 2) {
    if (quizQ) quizQ.innerText = "დაამატეთ მეტი სიტყვა ქვიზისთვის";
    return;
  }

  const q = words[Math.floor(Math.random() * words.length)];
  quizQ.innerText = q.term;

  let opts = [q.definition];

  // არასწორი პასუხების შერჩევა სხვა სიტყვებიდან
  while (opts.length < Math.min(4, words.length)) {
    const r = words[Math.floor(Math.random() * words.length)].definition;
    if (!opts.includes(r)) opts.push(r);
  }

  // პასუხების არევა
  opts.sort(() => Math.random() - 0.5);

  quizOpts.innerHTML = "";

  opts.forEach(o => {
    const b = document.createElement("button");
    b.innerText = o;
    b.className = "quiz-opt"; // სტილისთვის

    b.onclick = () => {
      if (o === q.definition) {
        alert("სწორია! ✅");
        buildQuiz(); // გადავიდეს შემდეგ კითხვაზე
      } else {
        alert("არასწორია, სცადეთ თავიდან ❌");
      }
    };

    quizOpts.appendChild(b);
  });
}

// აპის ჩატვირთვისას ქვიზის ინიციალიზაცია
document.addEventListener("DOMContentLoaded", buildQuiz);
