// MedVocab-Pro v23.0 - Full Database & Voice Features
const initialWords = [
    // --- სია 1 & 2: აკადემიური და კლინიკური ---
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Strict observance of guidelines or treatment plans.", geo: "დაცვა, ერთგულება (წესების/მკურნალობის)" },
    { term: "Precision", ipa: "/prɪˈsɪʒən/", def: "The quality of being exact and accurate.", geo: "სიზუსტე" },
    { term: "Refractory", ipa: "/rɪˈfræktəri/", def: "Resistant to a process or stimulus (e.g., treatment).", geo: "რეზისტენტული, მკურნალობისადმი მდგრადი" },
    { term: "Ambiguity", ipa: "/ˌæmbɪˈɡjuːɪti/", def: "Open to more than one interpretation.", geo: "ორაზროვნება" },
    { term: "Subsequent", ipa: "/ˈsʌbsɪkwənt/", def: "Coming after something in time; following.", geo: "მომდევნო" },
    { term: "Counteract", ipa: "/ˌkaʊntərˈækt/", def: "Act against something to reduce its force.", geo: "წინააღმდეგ მოქმედება" },
    { term: "Prevalence", ipa: "/ˈprevələns/", def: "The condition of being widespread (e.g., disease).", geo: "გავრცელება" },
    { term: "Delineate", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray something precisely.", geo: "გამოკვეთა, აღწერა" },
    { term: "Deviation", ipa: "/ˌdiːviˈeɪʃən/", def: "Departing from an established course or standard.", geo: "გადახრა" },
    { term: "Precursor", ipa: "/priˈkɜːrsər/", def: "A sign or thing that comes before another.", geo: "წინამორბედი" },
    { term: "Discrepancy", ipa: "/dɪˈskrepənsi/", def: "Lack of compatibility between two facts.", geo: "შეუსაბამობა" },
    { term: "Compliance", ipa: "/kəmˈplaɪəns/", def: "Patient compliance affects treatment success.", geo: "შესაბამისობა, დამორჩილება" },
    { term: "Implementation", ipa: "/ˌɪmplɪmenˈteɪʃən/", def: "The process of putting a plan into effect.", geo: "განხორციელება" },
    { term: "Congestion", ipa: "/kənˈdʒestʃən/", def: "Blocked or overcrowded state (e.g., nasal).", geo: "შეშუპება, გადატვირთვა" },
    { term: "Regurgitation", ipa: "/rɪˌɡɜːrdʒɪˈteɪʃən/", def: "Backward flow of body fluids.", geo: "რეგურგიტაცია" },
    { term: "Distension", ipa: "/dɪˈstenʃən/", def: "Swollen from internal pressure.", geo: "გაბერვა" },
    { term: "Contractility", ipa: "/ˌkɒntrækˈtɪləti/", def: "The capability of shrinking or contracting.", geo: "შეკუმშვის უნარი" },
    { term: "Garbled", ipa: "/ˈɡɑːrbld/", def: "Reproduced in a distorted way.", geo: "გაუგებარი" },
    { term: "Tote", ipa: "/toʊt/", def: "To carry something heavy.", geo: "ტარება" },
    { term: "Deft", ipa: "/deft/", def: "Skillful and quick in movements.", geo: "მოხერხებული" },
    { term: "Boorish", ipa: "/ˈbʊərɪʃ/", def: "Rough and bad-mannered.", geo: "უზრდელი" },
    { term: "Fractious", ipa: "/ˈfrækʃəs/", def: "Irritable and difficult to control.", geo: "კონფლიქტური" },
    { term: "Putative", ipa: "/ˈpjuːtətɪv/", def: "Generally considered or reputed to be.", geo: "სავარაუდო" },
    { term: "Nadir", ipa: "/neɪdɪər/", def: "The lowest point in fortunes or status.", geo: "ყველაზე დაბალი წერტილი" },
    { term: "Hector", ipa: "/ˈhɛktər/", def: "To bully or intimidate.", geo: "ზეწოლა" },
    { term: "Bessoted", ipa: "/bɪˈsɒtɪd/", def: "Strongly obsessed with someone.", geo: "ძლიერ გატაცებული" },
    { term: "Gambit", ipa: "/ˈɡæmbɪt/", def: "A calculated move for advantage.", geo: "გათვლილი ნაბიჯი" },
    { term: "Immure", ipa: "/ɪˈmjʊər/", def: "To enclose or confine.", geo: "გამოკეტვა" },
    { term: "Rash", ipa: "/ræʃ/", def: "Acting without consideration.", geo: "დაუფიქრებელი" },
    { term: "Tranche", ipa: "/trɑːnʃ/", def: "A portion of money or data.", geo: "ნაწილი" },

    // --- სია 3: აკადემიური & სამედიცინო ---
    { term: "Conjecture", ipa: "/kənˈdʒektʃər/", def: "Theory without evidence.", geo: "ვარაუდი" },
    { term: "Advent", ipa: "/ˈædvent/", def: "The arrival of a notable person or thing.", geo: "გამოჩენა, დასაწყისი" },
    { term: "Downplaying", ipa: "/ˈdaʊnpleɪɪŋ/", def: "Make something appear less important.", geo: "მნიშვნელობის შემცირება" },
    { term: "Mind Trap", ipa: "/maɪnd træp/", def: "Common cognitive bias or error.", geo: "აზროვნების შეცდომა" },
    { term: "Dissent", ipa: "/dɪˈsent/", def: "Expression of disagreement.", geo: "უთანხმოება" },
    { term: "Foolproof", ipa: "/fuːlpruːf/", def: "Incapable of going wrong.", geo: "შეცდომისგან დაცული" },
    { term: "Deadlock", ipa: "/ˈdedlɒk/", def: "A situation where no progress is possible.", geo: "ჩიხური მდგომარეობა" },
    { term: "Envoy", ipa: "/ˈenvɔɪ/", def: "A messenger or representative.", geo: "ელჩი, წარმომადგენელი" },
    { term: "Inviolable", ipa: "/ɪnˈvaɪələbl/", def: "Never to be broken or infringed.", geo: "ხელშეუხებელი" },
    { term: "Aggravate", ipa: "/ˈæɡrəveɪt/", def: "Make a problem or injury worse.", geo: "გაუარესება" },
    { term: "Intermittent", ipa: "/ˌɪntəˈmɪtənt/", def: "Occurring at irregular intervals.", geo: "პერიოდული" },
    { term: "Purulent", ipa: "/ˈpjʊərʊlənt/", def: "Consisting of, or discharging pus.", geo: "ჩირქოვანი" },
    { term: "Sputum", ipa: "/ˈspjuːtəm/", def: "Saliva and mucus coughed up.", geo: "ნახველი" },
    { term: "Teetotal", ipa: "/ˌtiːˈtəʊtəl/", def: "Total abstinence from alcohol.", geo: "ალკოჰოლზე სრული უარი" },
    { term: "Spry", ipa: "/spraɪ/", def: "Active and lively (of an old person).", geo: "ენერგიული" },
    { term: "Tenacious", ipa: "/əˈneɪʃəs/", def: "Persisting in existence; not easily let go.", geo: "შეუპოვარი, ჯიუტი" },

    // --- სია 4: ახალი 30 ტერმინი ---
    { term: "Observer Bias", ipa: "/əbˈzɜːrvər ˈbaɪəs/", def: "Observers see what they expect to see.", geo: "დამკვირვებლის მიკერძოება" },
    { term: "Abating", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense.", geo: "შემცირება, დაცხრომა" },
    { term: "Ward off", ipa: "/wɔːrd ɒf/", def: "To prevent harm.", geo: "თავიდან აცილება, მოგერიება" },
    { term: "Surplus", ipa: "/ˈsɜːrpləs/", def: "An amount left over.", geo: "ჭარბი, ნამტი" },
    { term: "Deprivation", ipa: "/ˌdeprɪˈveɪʃən/", def: "Damaging lack of necessities.", geo: "დეპრივაცია, უკმარისობა" },
    { term: "Recuperation", ipa: "/rɪˌkuːpəˈreɪʃən/", def: "Recovery from illness.", geo: "ძალების აღდგენა" },
    { term: "Futile", ipa: "/ˈfjuːtaɪl/", def: "Pointless; no useful result.", geo: "ამაო, უშედეგო" },
    { term: "Sluggish", ipa: "/ˈslʌɡɪʃ/", def: "Slow-moving; lacking energy.", geo: "დუნე, შენელებული" },
    { term: "Postpone", ipa: "/poʊstˈpoʊn/", def: "Arrange for a later time.", geo: "გადადება" },
    { term: "Fortified", ipa: "/ˈfɔːrtɪfaɪd/", def: "Strengthened or enriched.", geo: "გაძლიერებული" },
    { term: "Equilibrium", ipa: "/ˌiːkwɪˈlɪbriəm/", def: "State of balance.", geo: "წონასწორობა" },
    { term: "Stall", ipa: "/stɔːl/", def: "Stop making progress.", geo: "შეფერხება" },
    { term: "Relapse", ipa: "/rɪˈlæps/", def: "Health deterioration after improvement.", geo: "რეციდივი" },
    { term: "Cue", ipa: "/kjuː/", def: "A signal for action.", geo: "ნიშანი, მინიშნება" },
    { term: "Aversion", ipa: "/əˈvɜːrʒən/", def: "A strong dislike.", geo: "ზიზღი" },
    { term: "Recruitment", ipa: "/rɪˈkruːtmənt/", def: "Finding new people for a study/org.", geo: "დაკომპლექტება" },
    { term: "Tardive", ipa: "/ˈtɑːrdɪv/", def: "Delayed onset (e.g., dyskinesia).", geo: "გვიანი გამოვლინება" },
    { term: "Rigor Check", ipa: "/ˈrɪɡər tʃek/", def: "Evaluation of validity.", geo: "სიზუსტის შემოწმება" },
    { term: "Pruritus", ipa: "/pruːˈraɪtəs/", def: "Severe itching of the skin.", geo: "ქავილი" },
    { term: "Interbody spacer", ipa: "/ˌɪntərˈbɒdi ˈspeɪsər/", def: "Device for spinal fusion.", geo: "მალთაშუა სპეისერი" },
    { term: "Cultural Accretion", ipa: "/ˈkʌltʃərəl əˈkriːʃən/", def: "Growth by accumulation of traits.", geo: "კულტურული დაგროვება" },
    { term: "Lavished", ipa: "/ˈlævɪʃt/", def: "Bestowed extravagantly.", geo: "უხვად გაცემული" },
    { term: "Unwittingly", ipa: "/ʌnˈwɪtɪŋli/", def: "Without being aware.", geo: "უნებლიეთ" },
    { term: "Affronted", ipa: "/əˈfrʌntɪd/", def: "Offended or insulted.", geo: "შეურაცხყოფილი" },
    { term: "To ebb", ipa: "/tuː eb/", def: "Gradually reduce.", geo: "შემცირება" },
    { term: "Mining Of", ipa: "/ˈmaɪnɪŋ ɒv/", def: "Extracting data/resources.", geo: "მოპოვება" },
    { term: "Envisage", ipa: "/ɪnˈvɪzɪdʒ/", def: "Conceive as a possibility.", geo: "განჭვრეტა" },
    { term: "Alterations", ipa: "/ˌɔːltəˈreɪʃənზ/", def: "Changes or modifications.", geo: "ცვლილებები" },
    { term: "Algae", ipa: "/ˈældʒი/", def: "Non-flowering aquatic plants.", geo: "წყალმცენარეები" },
    { term: "Mediocre", ipa: "/ˌmiːdiˈoʊkər/", def: "Moderate quality; not very good.", geo: "არაფრით გამორჩეული" }
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

function searchWords() {
    const query = document.getElementById('term-search').value.toLowerCase();
    const fIdx = words.findIndex(w => w.term.toLowerCase().startsWith(query));
    if (fIdx !== -1 && query.length > 0) { idx = fIdx; updateView(); }
}

function startVoiceSearch() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    const sInput = document.getElementById('term-search');
    sInput.placeholder = "🎤 გისმენთ...";
    recognition.onresult = (e) => {
        const t = e.results[0][0].transcript.toLowerCase();
        sInput.value = t;
        searchWords();
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
    document.getElementById('q-feedback').innerText = '';
    document.getElementById('btn-next-q').style.display = 'none';
}

async function saveWordWithAI() {
    const term = document.getElementById('in-term').value.trim();
    if(!term) return;
    const st = document.getElementById('ai-status');
    st.innerText = "⏳ Gemini მუშაობს...";
    try {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ term })
        });
        const d = await res.json();
        words.push({ term, ipa: d.ipa, def: d.def, geo: d.geo });
        localStorage.setItem('med_words', JSON.stringify(words));
        st.innerText = "✅ დაემატა!";
        setTimeout(() => navigate('study'), 1000);
    } catch (e) { st.innerText = "❌ შეცდომა"; }
}

sortWords();
updateView();
