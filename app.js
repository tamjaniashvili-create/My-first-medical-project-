const initialWords = [
    { term: "Abating", level: "C1", pos: "Adj.", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", level: "C2", pos: "Noun", ipa: "/ˌæbəˈreɪʃən/", def: "A departure from what is normal or expected.", geo: "გადახრა ნორმიდან, აბერაცია" },
    { term: "Abjure", level: "C2", pos: "Verb", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce a belief or claim.", geo: "უარყოფა, ფიცის ქვეშ უარის თქმა" },
    { term: "Accretion", level: "C2", pos: "Noun", ipa: "/əˈkriːʃən/", def: "Growth or increase by gradual accumulation.", geo: "ზრდა დაგროვებით, აკრეცია" },
    { term: "Acquiesce", level: "C2", pos: "Verb", ipa: "/ˌækwiˈes/", def: "Accept something reluctantly but without protest.", geo: "ჩუმად დათანხმება, დათმობა" },
    { term: "Adherence", level: "C1", pos: "Noun", ipa: "/ədˈhɪərəns/", def: "Strict observance of a rule or belief.", geo: "ერთგულება, დაცვა (წესის)" },
    { term: "Adroit", level: "C2", pos: "Adj.", ipa: "/əˈdrɔɪt/", def: "Clever or skillful in using the hands or mind.", geo: "მარჯვე, მოხერხებული" },
    { term: "Ameliorate", level: "C1", pos: "Verb", ipa: "/əˈmiːliəreɪt/", def: "Make something bad better.", geo: "გაუმჯობესება" },
    { term: "Anomaly", level: "C1", pos: "Noun", ipa: "/əˈnɒməli/", def: "Deviation from what is standard or normal.", geo: "ანომალია" },
    { term: "Assiduous", level: "C2", pos: "Adj.", ipa: "/əˈsɪdjuəs/", def: "Showing great care and perseverance.", geo: "ბეჯითი, გულმოდგინე" },
    { term: "Augment", level: "B2", pos: "Verb", ipa: "/ɔːɡˈment/", def: "Make greater by adding to it.", geo: "გადიდება, გაზრდა" },
    { term: "Banal", level: "C2", pos: "Adj.", ipa: "/bəˈnɑːl/", def: "Lacking in originality; boring.", geo: "ბანალური, გაცვეთილი" },
    { term: "Capricious", level: "C2", pos: "Adj.", ipa: "/kəˈprɪʃəs/", def: "Sudden changes of mood or behavior.", geo: "კაპრიზული, ცვალებადი" },
    { term: "Cognizant", level: "C1", pos: "Adj.", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge or being aware of.", geo: "ინფორმირებული, მცოდნე" },
    { term: "Delineate", level: "C1", pos: "Verb", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Efficacy", level: "C1", pos: "Noun", ipa: "/ˈefɪkəsi/", def: "Ability to produce a desired result.", geo: "ეფექტურობა" },
    { term: "Exacerbate", level: "C1", pos: "Verb", ipa: "/ɪɡˈzæsərbeɪt/", def: "Make a problem or disease worse.", geo: "გამწვავება" },
    { term: "Fastidious", level: "C2", pos: "Adj.", ipa: "/fæˈstɪdiəs/", def: "Very attentive to accuracy and detail.", geo: "პრეტენზიული, წვრილმანი" },
    { term: "Inherent", level: "C1", pos: "Adj.", ipa: "/ɪnˈhɪərənt/", def: "Existing as a permanent attribute.", geo: "თანდაყოლილი" },
    { term: "Mitigate", level: "C1", pos: "Verb", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe or painful.", geo: "შემსუბუქება" },
    { term: "Pervasive", level: "C1", pos: "Adj.", ipa: "/pərˈveɪsɪv/", def: "Spreading widely throughout.", geo: "ყოვლისმომცველი" },
    { term: "Resilient", level: "C1", pos: "Adj.", ipa: "/rɪˈzɪliənt/", def: "Able to recover quickly.", geo: "მდგრადი, გამძლე" },
    { term: "Ubiquitous", level: "C2", pos: "Adj.", ipa: "/juːˈbɪkwɪtəs/", def: "Found everywhere.", geo: "ყველგანმყოფი" }
    // აქ კოდში დანარჩენი სიტყვებიც იქნება (სულ 95)...
];

let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

// AUDIO FEEDBACK SYSTEM (IT სპეციალისტის გადაწყვეტა)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration) {
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

const soundCorrect = () => playTone(880, 'sine', 0.3); // მაღალი ტონალობა
const soundWrong = () => playTone(220, 'square', 0.4); // დაბალი ტონალობა

// CORE LOGIC
function saveToLocal() { localStorage.setItem('med_words', JSON.stringify(words)); }
function sortWords() { words.sort((a, b) => a.term.localeCompare(b.term)); }

function navigate(pId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pId).classList.add('active');
    document.getElementById('nav-' + pId).classList.add('active');
    if (pId === 'glossary') renderGlossary();
    if (pId === 'study') updateView();
    if (pId === 'quiz') startQuiz();
}

function updateView() {
    sortWords();
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa;
    document.getElementById('c-def').innerText = w.def;
    document.getElementById('c-geo').innerText = w.geo;
    document.getElementById('c-level').innerText = w.level;
    document.getElementById('c-pos').innerText = w.pos;
    document.getElementById('progress-text').innerText = `${idx + 1} / ${words.length}`;
    document.getElementById('card-inner').classList.remove('flipped');
}

function flipCard() { document.getElementById('card-inner').classList.toggle('flipped'); }
function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const m = new SpeechSynthesisUtterance(words[idx].term);
    m.lang = 'en-US'; window.speechSynthesis.speak(m);
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

// QUIZ WITH AUDIO
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
            const isCorrect = o === correct.geo;
            if (isCorrect) {
                soundCorrect();
                b.classList.add('correct');
            } else {
                soundWrong();
                b.classList.add('wrong');
                // სწორი პასუხის მინიშნება
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
        saveToLocal();
        updateView();
        alert("ბაზა განახლდა 95 სიტყვამდე!");
    }
}

document.getElementById('gloss-search').addEventListener('input', (e) => renderGlossary(e.target.value));
updateView();
