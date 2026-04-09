// MedVocab-Pro v24.0 - Enhanced Search & Medical Precision
const initialWords = [
    // --- შესწორებული და ორმაგი მნიშვნელობის ტერმინები ---
    { term: "Rash", ipa: "/ræʃ/", def: "1. Skin eruption; 2. Acting without consideration.", geo: "გამონაყარი; დაუფიქრებელი, იმპულსური" },
    { term: "Stall", ipa: "/stɔːl/", def: "1. Stop making progress; 2. A compartment/booth.", geo: "შეფერხება, გაჩერება; ჯიხური, განყოფილება" },
    { term: "Relapse", ipa: "/rɪˈlæps/", def: "Deterioration after improvement; recurrence of disease.", geo: "რეციდივი, მდგომარეობის გაუარესება; ხელახალი გამწვავება" },
    { term: "Pruritus", ipa: "/pruːˈraɪtəs/", def: "Severe itching of the skin (medical term).", geo: "ქავილი (სამედიცინო ტერმინი)" },
    
    // --- დანარჩენი აკადემიური და კლინიკური სია ---
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Strict observance of guidelines.", geo: "დაცვა, ერთგულება (წესების)" },
    { term: "Precision", ipa: "/prɪˈsɪʒən/", def: "The quality of being exact.", geo: "სიზუსტე" },
    { term: "Observer Bias", ipa: "/əbˈzɜːrvər ˈbaɪəs/", def: "Tendency to see what is expected.", geo: "დამკვირვებლის მიკერძოება" },
    { term: "Abating", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense.", geo: "შემცირება, დაცხრომა" },
    { term: "Ward off", ipa: "/wɔːrd ɒf/", def: "To prevent harm or illness.", geo: "თავიდან აცილება, მოგერიება" },
    { term: "Surplus", ipa: "/ˈsɜːrpləs/", def: "An amount left over.", geo: "ჭარბი, ნამტი" },
    { term: "Deprivation", ipa: "/ˌdeprɪˈveɪʃən/", def: "Lack of necessities.", geo: "უკმარისობა, დეპრივაცია" },
    { term: "Recuperation", ipa: "/rɪˌkuːpəˈreɪʃən/", def: "Recovery from illness.", geo: "ძალების აღდგენა" },
    { term: "Futile", ipa: "/ˈfjuːtaɪl/", def: "Pointless result.", geo: "ამაო, უშედეგო" },
    { term: "Sluggish", ipa: "/ˈslʌɡɪʃ/", def: "Slow-moving; inactive.", geo: "დუნე, შენელებული" },
    { term: "Postpone", ipa: "/poʊstˈpoʊn/", def: "Arrange for a later time.", geo: "გადადება" },
    { term: "Fortified", ipa: "/ˈfɔːrtɪfaɪd/", def: "Strengthened/enriched.", geo: "გაძლიერებული" },
    { term: "Equilibrium", ipa: "/ˌiːkwɪˈlɪbriəm/", def: "State of balance.", geo: "წონასწორობა" },
    { term: "Cue", ipa: "/kjuː/", def: "A signal for action.", geo: "ნიშანი, მინიშნება" },
    { term: "Aversion", ipa: "/əˈvɜːrʒən/", def: "Strong dislike.", geo: "ზიზღი, ანტიპათია" },
    { term: "Recruitment", ipa: "/rɪˈkruːtmənt/", def: "Finding new people.", geo: "რეკრუტირება" },
    { term: "Tardive", ipa: "/ˈtɑːrdɪv/", def: "Delayed onset.", geo: "გვიანი გამოვლინება" },
    { term: "Interbody spacer", ipa: "/ˌɪntərˈbɒdi ˈspeɪsər/", def: "Device for spinal fusion.", geo: "მალთაშუა სპეისერი" },
    { term: "Cultural Accretion", ipa: "/ˈkʌltʃərəl əˈkriːʃən/", def: "Growth by accumulation.", geo: "კულტურული დაგროვება" },
    { term: "Lavished", ipa: "/ˈlævɪʃt/", def: "Bestowed extravagantly.", geo: "უხვად გაცემული" },
    { term: "Unwittingly", ipa: "/ʌnˈwɪtɪŋli/", def: "Unintentionally.", geo: "უნებლიეთ" },
    { term: "Affronted", ipa: "/əˈfrʌntɪd/", def: "Offended or insulted.", geo: "შეურაცხყოფილი" },
    { term: "To ebb", ipa: "/tuː eb/", def: "Gradually reduce.", geo: "შემცირება, მიქცევა" },
    { term: "Mining Of", ipa: "/ˈmaɪnɪŋ ɒv/", def: "Extracting data/resources.", geo: "მოპოვება" },
    { term: "Envisage", ipa: "/ɪnˈvɪzɪdʒ/", def: "Conceive as a possibility.", geo: "განჭვრეტა" },
    { term: "Alterations", ipa: "/ˌɔːltəˈreɪʃənz/", def: "Changes/modifications.", geo: "ცვლილებები" },
    { term: "Algae", ipa: "/ˈældʒiː/", def: "Aquatic plants.", geo: "წყალმცენარეები" },
    { term: "Mediocre", ipa: "/ˌmiːdiˈoʊkər/", def: "Moderate quality.", geo: "არაფრით გამორჩეული" },
    { term: "Refractory", ipa: "/rɪˈfræktəri/", def: "Resistant to treatment.", geo: "მდგრადი, რეზისტენტული" },
    { term: "Prevalence", ipa: "/ˈprevələns/", def: "Widespread occurrence.", geo: "გავრცელება" },
    { term: "Purulent", ipa: "/ˈpjʊərʊlənt/", def: "Discharging pus.", geo: "ჩირქოვანი" },
    { term: "Sputum", ipa: "/ˈspjuːtəm/", def: "Mucus coughed up.", geo: "ნახველი" }
];

let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

function sortWords() { words.sort((a, b) => a.term.localeCompare(b.term)); }

function navigate(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    document.getElementById('nav-' + pageId).classList.add('active');
    if(pageId === 'study') updateView();
    if(pageId === 'quiz') startQuiz();
}

function updateView() {
    if (words.length === 0) return;
    sortWords();
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa;
    document.getElementById('c-def').innerText = w.def;
    document.getElementById('c-geo').innerText = w.geo;
    document.getElementById('progress-text').innerText = `${idx + 1}/${words.length}`;
    document.getElementById('progress-fill').style.width = `${((idx + 1) / words.length) * 100}%`;
    document.getElementById('card-inner').classList.remove('flipped');
}

// **გაუმჯობესებული ძიება: ტექსტის წერისას რეაგირება**
function setupSearch() {
    const sInput = document.getElementById('term-search');
    sInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length > 0) {
            const foundIdx = words.findIndex(w => w.term.toLowerCase().includes(query));
            if (foundIdx !== -1) {
                idx = foundIdx;
                updateView();
            }
        }
    });
}

function startVoiceSearch() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    const sInput = document.getElementById('term-search');
    sInput.placeholder = "🎤 გისმენთ...";
    recognition.onresult = (e) => {
        const t = e.results[0][0].transcript.toLowerCase();
        sInput.value = t;
        const foundIdx = words.findIndex(w => w.term.toLowerCase().includes(t));
        if (foundIdx !== -1) { idx = foundIdx; updateView(); }
        sInput.placeholder = "🔍 მოძებნე ტერმინი...";
    };
    recognition.start();
}

function flipCard() { document.getElementById('card-inner').classList.toggle('flipped'); }
function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const m = new SpeechSynthesisUtterance(words[idx].term);
    m.lang = 'en-US';
    window.speechSynthesis.speak(m);
}

// ქვიზის და დამატების ლოგიკა უცვლელია...
function startQuiz() { if(words.length > 1) nextQuestion(); }
function nextQuestion() {
    const correct = words[Math.floor(Math.random() * words.length)];
    const options = [correct.geo];
    while(options.length < 3) {
        const r = words[Math.floor(Math.random() * words.length)].geo;
        if(!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    document.getElementById('q-question').innerHTML = `რას ნიშნავს: <strong>${correct.term}</strong>?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    options.forEach(o => {
        const b = document.createElement('button');
        b.className = 'btn'; b.style.marginBottom = '10px'; b.innerText = o;
        b.onclick = () => {
            const fb = document.getElementById('q-feedback');
            fb.innerText = (o === correct.geo) ? "✅ სწორია!" : `❌ სწორია: ${correct.geo}`;
            fb.style.color = (o === correct.geo) ? "green" : "red";
            document.getElementById('btn-next-q').style.display = 'block';
        };
        container.appendChild(b);
    });
    document.getElementById('btn-next-q').style.display = 'none';
}

sortWords();
updateView();
setupSearch();
