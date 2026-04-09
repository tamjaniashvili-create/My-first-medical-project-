let words = JSON.parse(localStorage.getItem('med_words')) || [
    { term: "Apotheca", ipa: "/əˈpɒθɪkə/", level: "MED", def: "A place where medicines are stored and compounded.", geo: "აფთიაქი / წამლების საცავი" }
];
let idx = 0;

function save() { localStorage.setItem('med_words', JSON.stringify(words)); }

function navigate(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById('page-' + pageId).classList.add('active');
    document.getElementById('nav-' + pageId).classList.add('active');
    
    if(pageId === 'study') updateView();
    if(pageId === 'quiz') startQuiz();
    
    const dropdown = document.getElementById('dropdown');
    if(dropdown) dropdown.classList.remove('show');
}

function toggleMenu() {
    document.getElementById('dropdown').classList.toggle('show');
}

function updateView() {
    if (words.length === 0) return;
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa || '';
    document.getElementById('c-def').innerText = w.def || '';
    document.getElementById('c-geo').innerText = w.geo || '';
    
    document.getElementById('progress-text').innerText = `${idx + 1}/${words.length}`;
    document.getElementById('progress-fill').style.width = `${((idx + 1) / words.length) * 100}%`;
    document.getElementById('card-inner').classList.remove('flipped');
}

function flipCard() { document.getElementById('card-inner').classList.toggle('flipped'); }
function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const msg = new SpeechSynthesisUtterance(words[idx].term);
    msg.lang = 'en-US';
    window.speechSynthesis.speak(msg);
}

// ========== QUIZ LOGIC ==========
function startQuiz() {
    if(words.length < 2) {
        document.getElementById('q-question').innerText = "ქვიზისთვის საჭიროა მინიმუმ 2 სიტყვა!";
        return;
    }
    nextQuestion();
}

function nextQuestion() {
    const correctWord = words[Math.floor(Math.random() * words.length)];
    const options = [correctWord.geo];
    
    while(options.length < 3) {
        const randGeo = words[Math.floor(Math.random() * words.length)].geo;
        if(!options.includes(randGeo)) options.push(randGeo);
    }
    options.sort(() => Math.random() - 0.5);

    document.getElementById('q-question').innerHTML = `რას ნიშნავს: <br><strong>${correctWord.term}</strong>?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn';
        btn.style.marginBottom = '10px';
        btn.innerText = opt;
        btn.onclick = () => {
            const fb = document.getElementById('q-feedback');
            fb.style.display = 'block';
            if(opt === correctWord.geo) {
                fb.innerText = "✅ სწორია!";
                fb.style.color = "green";
            } else {
                fb.innerText = `❌ არასწორია. სწორია: ${correctWord.geo}`;
                fb.style.color = "red";
            }
            document.getElementById('btn-next-q').style.display = 'block';
        };
        container.appendChild(btn);
    });
    document.getElementById('q-feedback').style.display = 'none';
    document.getElementById('btn-next-q').style.display = 'none';
}

// ========== AI ADD LOGIC ==========
async function saveWordWithAI() {
    const termInput = document.getElementById('in-term');
    const term = termInput.value.trim();
    const status = document.getElementById('ai-status');

    if(!term) return;

    status.innerText = "🤖 Gemini ამუშავებს...";
    status.className = "ai-status loading";

    try {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ term })
        });

        const data = await res.json();

        words.push({
            term: term,
            ipa: data.ipa || '',
            def: data.def || '',
            geo: data.geo || ''
        });

        save();
        status.innerText = "✅ წარმატებით დაემატა!";
        termInput.value = '';
        setTimeout(() => navigate('study'), 1500);
    } catch (e) {
        status.innerText = "❌ შეცდომა";
    }
}

// INIT
updateView();
