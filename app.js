let words = JSON.parse(localStorage.getItem('med_words')) || [
    { term: "Apotheca", ipa: "/əˈpɒθɪkə/", level: "MED", cat: "Pharmacy", def: "A place where medicines are stored and compounded.", ex: "The ancient apotheca was filled with herbal remedies.", geo: "აფთიაქი / წამლების საცავი" }
];
let idx = 0;

function save() { localStorage.setItem('med_words', JSON.stringify(words)); }

function navigate(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    if(pageId === 'study') updateView();
    toggleMenu(false);
}

function toggleMenu(force) {
    const d = document.getElementById('dropdown');
    if (force === false) d.classList.remove('show');
    else d.classList.toggle('show');
}

function updateView() {
    if (words.length === 0) return;
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa;
    document.getElementById('c-def').innerText = w.def;
    document.getElementById('c-ex').innerText = w.ex;
    document.getElementById('c-geo').innerText = w.geo;
    
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

// ===== GEMINI AI CONNECTION =====
async function saveWordWithAI() {
    const termInput = document.getElementById('in-term');
    const term = termInput.value.trim();
    const cat = document.getElementById('in-cat').value.trim() || 'General';
    const status = document.getElementById('ai-status');

    if(!term) { alert('ჩაწერეთ ტერმინი!'); return; }

    status.innerText = "🤖 Gemini ამუშავებს...";
    status.className = "ai-status loading";

    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ term })
        });

        if (!response.ok) throw new Error('კავშირის შეცდომა');

        const data = await response.json();

        words.push({
            term: term,
            ipa: data.ipa || '',
            level: data.level || 'C1',
            cat: cat,
            def: data.def || '',
            ex: data.ex || '',
            geo: data.geo || ''
        });

        save();
        idx = words.length - 1;
        status.innerText = "✅ წარმატებით დაემატა!";
        status.className = "ai-status success";
        termInput.value = '';
        
        setTimeout(() => {
            navigate('study');
            updateView();
        }, 1500);

    } catch (error) {
        console.error(error);
        status.innerText = "❌ შეცდომა: " + error.message;
        status.className = "ai-status error";
    }
}
