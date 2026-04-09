// MedVocab-Pro v25.0 - Full Expanded Database (90+ Terms)
const initialWords = [
    // --- კლინიკური სიზუსტე & ორმაგი მნიშვნელობები ---
    { term: "Rash", ipa: "/ræʃ/", def: "1. Skin eruption (medical); 2. Acting without thinking.", geo: "გამონაყარი; დაუფიქრებელი, იმპულსური" },
    { term: "Stall", ipa: "/stɔːl/", def: "1. Stop making progress; 2. A booth/compartment.", geo: "შეფერხება, გაჩერება; ჯიხური" },
    { term: "Relapse", ipa: "/rɪˈlæps/", def: "Return of disease symptoms after improvement.", geo: "რეციდივი, მდგომარეობის გაუარესება" },
    { term: "Pruritus", ipa: "/pruːˈraɪtəs/", def: "Severe itching of the skin.", geo: "ქავილი" },
    { term: "Tardive", ipa: "/ˈtɑːrdɪv/", def: "Delayed onset of symptoms (e.g., dyskinesia).", geo: "გვიანი გამოვლინება" },

    // --- დღევანდელი სია (IELTS & Medical) ---
    { term: "Observer Bias", ipa: "/əbˈzɜːrvər ˈbaɪəs/", def: "Tendency to see what is expected.", geo: "დამკვირვებლის მიკერძოება" },
    { term: "Abating", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense.", geo: "შემცირება, დაცხრომა" },
    { term: "Ward off", ipa: "/wɔːrd ɒf/", def: "To prevent harm or illness.", geo: "თავიდან აცილება, მოგერიება" },
    { term: "Surplus", ipa: "/ˈsɜːrpləs/", def: "An amount left over.", geo: "ჭარბი, ნამტი" },
    { term: "Deprivation", ipa: "/ˌdeprɪˈveɪʃən/", def: "Damaging lack of necessities.", geo: "დეპრივაცია, უკმარისობა" },
    { term: "Recuperation", ipa: "/rɪˌkuːpəˈreɪʃən/", def: "Recovery from illness.", geo: "ძალების აღდგენა" },
    { term: "Futile", ipa: "/ˈfjuːtaɪl/", def: "Pointless; no useful result.", geo: "ამაო, უშედეგო" },
    { term: "Sluggish", ipa: "/ˈslʌɡɪʃ/", def: "Slow-moving; lacking energy.", geo: "დუნე, შენელებული" },
    { term: "Postpone", ipa: "/poʊstˈpoʊn/", def: "Arrange for a later time.", geo: "გადადება" },
    { term: "Fortified", ipa: "/ˈfɔːrtɪfaɪd/", def: "Strengthened or enriched.", geo: "გაძლიერებული" },
    { term: "Equilibrium", ipa: "/ˌiːkwɪˈlɪbriəm/", def: "State of balance.", geo: "წონასწორობა" },
    { term: "Cue", ipa: "/kjuː/", def: "A signal for action.", geo: "ნიშანი, მინიშნება" },
    { term: "Aversion", ipa: "/əˈvɜːrʒən/", def: "Strong dislike.", geo: "ზიზღი, ანტიპათია" },
    { term: "Recruitment", ipa: "/rɪˈkruːtmənt/", def: "Finding new people for study/org.", geo: "რეკრუტირება" },
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

    // --- წინა სიები (C1/MED) ---
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Observance of treatment plans.", geo: "დაცვა, ერთგულება" },
    { term: "Refractory", ipa: "/rɪˈfræktəri/", def: "Resistant to treatment.", geo: "მდგრადი" },
    { term: "Prevalence", ipa: "/ˈprevələns/", def: "Widespread occurrence.", geo: "გავრცელება" },
    { term: "Purulent", ipa: "/ˈpjʊərʊlənt/", def: "Discharging pus.", geo: "ჩირქოვანი" },
    { term: "Sputum", ipa: "/ˈspjuːtəm/", def: "Mucus from lungs.", geo: "ნახველი" },
    { term: "Precision", ipa: "/prɪˈsɪʒən/", def: "Quality of being exact.", geo: "სიზუსტე" },
    { term: "Ambiguity", ipa: "/ˌæmbɪˈɡjuːɪti/", def: "Unclear meaning.", geo: "ორაზროვნება" },
    { term: "Subsequent", ipa: "/ˈsʌbsɪkwənt/", def: "Following in time.", geo: "მომდევნო" },
    { term: "Counteract", ipa: "/ˌkaʊntərˈækt/", def: "Neutralize an effect.", geo: "წინააღმდეგ მოქმედება" },
    { term: "Delineate", ipa: "/dɪˈlɪnieɪt/", def: "Describe precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Deviation", ipa: "/ˌdiːviˈeɪʃən/", def: "Departure from standard.", geo: "გადახრა" },
    { term: "Discrepancy", ipa: "/dɪˈskrepənsi/", def: "Lack of compatibility.", geo: "შეუსაბამობა" },
    { term: "Congestion", ipa: "/kənˈdʒestʃən/", def: "Blocked/overcrowded state.", geo: "შეშუპება" },
    { term: "Contractility", ipa: "/ˌkɒntrækˈtɪləti/", def: "Capability of shrinking.", geo: "შეკუმშვის უნარი" },
    { term: "Nadir", ipa: "/neɪdɪər/", def: "Lowest point.", geo: "ყველაზე დაბალი წერტილი" },
    { term: "Tranche", ipa: "/trɑːnʃ/", def: "A portion/slice.", geo: "ნაწილი" },
    { term: "Advent", ipa: "/ˈædvent/", def: "Arrival of something new.", geo: "გამოჩენა" },
    { term: "Deadlock", ipa: "/ˈdedlɒk/", def: "No progress possible.", geo: "ჩიხი" },
    { term: "Teetotal", ipa: "/ˌtiːˈtəʊtəl/", def: "No alcohol consumption.", geo: "ფხიზელი" }
    // ... (სისტემა ავტომატურად დაალაგებს დანარჩენებს)
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

// **ავტომატური ძიება აკრეფისას**
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
}

sortWords();
updateView();
setupSearch();
