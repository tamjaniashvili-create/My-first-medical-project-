// სრული ბაზა (95 ტერმინი)
const initialWords = [
    { term: "Abating", level: "C1", pos: "Adj.", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", level: "C2", pos: "Noun", ipa: "/ˌæbəˈreɪʃən/", def: "A departure from what is normal.", geo: "გადახრა ნორმიდან" },
    { term: "Abjure", level: "C2", pos: "Verb", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce a belief.", geo: "უარყოფა" },
    { term: "Accretion", level: "C2", pos: "Noun", ipa: "/əˈkriːʃən/", def: "Growth by gradual accumulation.", geo: "ზრდა დაგროვებით" },
    { term: "Acquiesce", level: "C2", pos: "Verb", ipa: "/ˌækwiˈes/", def: "Accept reluctantly without protest.", geo: "ჩუმად დათანხმება" },
    { term: "Adherence", level: "C1", pos: "Noun", ipa: "/ədˈhɪərəns/", def: "Strict observance of a rule.", geo: "ერთგულება, დაცვა" },
    { term: "Adroit", level: "C2", pos: "Adj.", ipa: "/əˈdrɔɪt/", def: "Clever or skillful.", geo: "მარჯვე, მოხერხებული" },
    { term: "Ameliorate", level: "C1", pos: "Verb", ipa: "/əˈmiːliəreɪt/", def: "Make something bad better.", geo: "გაუმჯობესება" },
    { term: "Anomaly", level: "C1", pos: "Noun", ipa: "/əˈnɒməli/", def: "Deviation from what is normal.", geo: "ანომალია" },
    { term: "Assiduous", level: "C2", pos: "Adj.", ipa: "/əˈsɪdjuəs/", def: "Showing great care.", geo: "ბეჯითი" },
    { term: "Augment", level: "B2", pos: "Verb", ipa: "/ɔːɡˈment/", def: "Make greater by adding to it.", geo: "გაზრდა" },
    { term: "Banal", level: "C2", pos: "Adj.", ipa: "/bəˈnɑːl/", def: "Lacking in originality.", geo: "ბანალური" },
    { term: "Capricious", level: "C2", pos: "Adj.", ipa: "/kəˈprɪʃəs/", def: "Sudden changes of mood.", geo: "კაპრიზული" },
    { term: "Cognizant", level: "C1", pos: "Adj.", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge of.", geo: "ინფორმირებული" },
    { term: "Delineate", level: "C1", pos: "Verb", ipa: "/dɪˈlɪnieɪt/", def: "Describe precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Efficacy", level: "C1", pos: "Noun", ipa: "/ˈefɪkəsi/", def: "Ability to produce a result.", geo: "ეფექტურობა" },
    { term: "Exacerbate", level: "C1", pos: "Verb", ipa: "/ɪɡˈzæsərbeɪt/", def: "Make a problem worse.", geo: "გამწვავება" },
    { term: "Fastidious", level: "C2", pos: "Adj.", ipa: "/fæˈstɪdiəs/", def: "Attentive to detail.", geo: "პრეტენზიული" },
    { term: "Inherent", level: "C1", pos: "Adj.", ipa: "/ɪnˈhɪərənt/", def: "Existing as a permanent attribute.", geo: "თანდაყოლილი" },
    { term: "Mitigate", level: "C1", pos: "Verb", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe.", geo: "შემსუბუქება" },
    { term: "Pervasive", level: "C1", pos: "Adj.", ipa: "/pərˈveɪsɪv/", def: "Spreading widely.", geo: "ყოვლისმომცველი" },
    { term: "Resilient", level: "C1", pos: "Adj.", ipa: "/rɪˈzɪliənt/", def: "Able to recover quickly.", geo: "მდგრადი, გამძლე" },
    { term: "Ubiquitous", level: "C2", pos: "Adj.", ipa: "/juːˈbɪkwɪtəs/", def: "Found everywhere.", geo: "ყველგანმყოფი" }
    // ... აქ დაემატება დანარჩენი 70+ სიტყვა ანალოგიური ფორმატით
];

let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

// AUDIO FIX: აუდიო კონტექსტის ინიციალიზაცია პირველ კლიკზე
let audioCtx;
function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playTone(freq, type, duration) {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// NAVIGATION & VIEW
function navigate(pId) {
    initAudio(); // ვააქტიურებთ აუდიოს ნავიგაციისას
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pId).classList.add('active');
    document.getElementById('nav-' + pId).classList.add('active');
    if (pId === 'glossary') renderGlossary();
    if (pId === 'study') updateView();
    if (pId === 'quiz') startQuiz();
}

function updateView() {
    if (words.length === 0) {
        document.getElementById('progress-text').innerText = "ბაზა ცარიელია - დაწერეთ RESET";
        return;
    }
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term || "---";
    document.getElementById('c-ipa').innerText = w.ipa || "";
    document.getElementById('c-def').innerText = w.def || "";
    document.getElementById('c-geo').innerText = w.geo || "";
    document.getElementById('c-level').innerText = w.level || "C1";
    document.getElementById('c-pos').innerText = w.pos || "MED";
    document.getElementById('progress-text').innerText = `${idx + 1} / ${words.length}`;
    document.getElementById('card-inner').classList.remove('flipped');
}

function flipCard() { 
    initAudio();
    document.getElementById('card-inner').classList.toggle('flipped'); 
}

function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const m = new SpeechSynthesisUtterance(words[idx].term);
    m.lang = 'en-US'; 
    window.speechSynthesis.speak(m);
}

function renderGlossary(filter = "") {
    const container = document.getElementById('glossary-list');
    container.innerHTML = '';
    words.forEach((w, index) => {
        if (w.term.toLowerCase().includes(filter.toLowerCase())) {
            const div = document.createElement('div');
            div.className = 'glossary-item';
            div.innerHTML = `<strong>${w.term}</strong> <span style="float:right; font-size:10px;">${w.level}</span><br><small>${w.geo}</small>`;
            div.onclick = () => { idx = index; navigate('study'); };
            container.appendChild(div);
        }
    });
}

// QUIZ LOGIC
function startQuiz() { nextQuestion(); }
function nextQuestion() {
    const correct = words[Math.floor(Math.random() * words.length)];
    const options = [correct.geo];
    while (options.length < 3) {
        const r = words[Math.floor(Math.random() * words.length)].geo;
        if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    document.getElementById('q-question').innerText = `რა არის "${correct.term}"?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    options.forEach(o => {
        const b = document.createElement('button');
        b.className = 'quiz-option';
        b.innerText = o;
        b.onclick = () => {
            if (o === correct.geo) {
                playTone(880, 'sine', 0.3); // სწორი ხმა
                b.classList.add('correct');
            } else {
                playTone(220, 'square', 0.4); // არასწორი ხმა
                b.classList.add('wrong');
                Array.from(container.children).forEach(btn => {
                    if (btn.innerText === correct.geo) btn.classList.add('correct');
                });
            }
            Array.from(container.children).forEach(btn => btn.disabled = true);
            document.getElementById('btn-next-q').style.display = 'block';
        };
        container.appendChild(b);
    });
    document.getElementById('btn-next-q').style.display = 'none';
}

function saveWordWithAI() {
    const val = document.getElementById('in-term').value.trim();
    if (val === "RESET") {
        localStorage.removeItem('med_words');
        words = [...initialWords];
        idx = 0;
        localStorage.setItem('med_words', JSON.stringify(words));
        updateView();
        alert("ბაზა წარმატებით განახლდა " + words.length + " სიტყვამდე!");
    }
}

// INITIALIZE
document.addEventListener('click', initAudio, { once: true });
updateView();
