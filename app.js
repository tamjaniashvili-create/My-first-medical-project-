const initialWords = [
    // --- სია 1 ---
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Strict adherence to guidelines improves outcomes.", geo: "დაცვა, ერთგულება" },
    { term: "Precision", ipa: "/prɪˈsɪʒən/", def: "The procedure requires high precision.", geo: "სიზუსტე" },
    { term: "Refractory", ipa: "/rɪˈfræktəri/", def: "The condition proved refractory to treatment.", geo: "რეზისტენტული" },
    { term: "Ambiguity", ipa: "/ˌæmbɪˈɡjuːɪti/", def: "The statement created ambiguity.", geo: "ორაზროვნება" },
    { term: "Subsequent", ipa: "/ˈsʌbsɪkwənt/", def: "Subsequent tests confirmed the diagnosis.", geo: "მომდევნო" },
    { term: "Counteract", ipa: "/ˌkaʊntərˈækt/", def: "The drug helps counteract inflammation.", geo: "წინააღმდეგ მოქმედება" },
    { term: "Prevalence", ipa: "/ˈprevələns/", def: "The prevalence of diabetes is increasing.", geo: "გავრცელება" },
    { term: "Delineate", ipa: "/dɪˈlɪnieɪt/", def: "The study delineates key risk factors.", geo: "გამოკვეთა, აღწერა" },
    { term: "Deviation", ipa: "/ˌdiːviˈeɪʃən/", def: "Any deviation from protocol must be reported.", geo: "გადახრა" },
    { term: "Precursor", ipa: "/priˈkɜːrsər/", def: "Fatigue can be a precursor to illness.", geo: "წინამორბედი" },
    { term: "Discrepancy", ipa: "/dɪˈskrepənsi/", def: "There is a discrepancy in the data.", geo: "შეუსაბამობა" },
    { term: "Compliance", ipa: "/kəmˈplaɪəns/", def: "Patient compliance affects treatment success.", geo: "შესაბამისობა, დამორჩილება" },
    { term: "Implementation", ipa: "/ˌɪmplɪmenˈteɪʃən/", def: "Implementation of the plan started today.", geo: "განხორციელება" },
    { term: "Congestion", ipa: "/kənˈdʒestʃən/", def: "Nasal congestion caused discomfort.", geo: "შეშუპება, გადატვირთვა" },
    { term: "Regurgitation", ipa: "/rɪˌɡɜːrdʒɪˈteɪʃən/", def: "The patient reported acid regurgitation.", geo: "რეგურგიტაცია" },
    { term: "Distension", ipa: "/dɪˈstenʃən/", def: "Abdominal distension was observed.", geo: "გაბერვა" },
    { term: "Contractility", ipa: "/ˌkɒntrækˈtɪləti/", def: "Cardiac contractility decreased.", geo: "შეკუმშვის უნარი" },
    { term: "Garbled", ipa: "/ˈɡɑːrbld/", def: "The message sounded garbled.", geo: "გაუგებარი" },
    { term: "Tote", ipa: "/toʊt/", def: "She totes her bag everywhere.", geo: "ტარება" },
    { term: "Deft", ipa: "/deft/", def: "He made a deft move.", geo: "მოხერხებული" },
    { term: "Boorish", ipa: "/ˈbʊərɪʃ/", def: "His boorish behavior upset others.", geo: "უზრდელი" },
    { term: "Fractious", ipa: "/ˈfrækʃəs/", def: "The group became fractious.", geo: "კონფლიქტური" },
    { term: "Putative", ipa: "/ˈpjuːtətɪv/", def: "The putative cause remains unclear.", geo: "სავარაუდო" },
    { term: "Nadir", ipa: "/neɪdɪər/", def: "This marked the nadir of his career.", geo: "ყველაზე დაბალი წერტილი" },
    { term: "Hector", ipa: "/ˈhɛktər/", def: "He tried to hector his colleagues.", geo: "ზეწოლა" },
    { term: "Bessoted", ipa: "/bɪˈsɒtɪd/", def: "He became bessoted with her.", geo: "ძლიერ გატაცებული" },
    { term: "Gambit", ipa: "/ˈɡæmbɪt/", def: "It was a risky gambit.", geo: "გათვლილი ნაბიჯი" },
    { term: "Immure", ipa: "/ɪˈmjʊər/", def: "The prisoner was immured for years.", geo: "გამოკეტვა" },
    { term: "Rash", ipa: "/ræʃ/", def: "He made a rash decision.", geo: "დაუფიქრებელი" },
    { term: "Tranche", ipa: "/trɑːnʃ/", def: "Funds were released in a tranche.", geo: "ნაწილი" },

    // --- ახალი სია 2 ---
    { term: "Conjecture", ipa: "/kənˈdʒektʃər/", def: "His theory remained a conjecture without evidence.", geo: "ვარაუდი" },
    { term: "Advent", ipa: "/ˈæდvent/", def: "The advent of the internet transformed communication.", geo: "გამოჩენა, დასაწყისი" },
    { term: "Downplaying", ipa: "/ˈdaʊnpleɪɪŋ/", def: "The company kept downplaying the risks.", geo: "მნიშვნელობის შემცირება" },
    { term: "Mind Trap", ipa: "/maɪnd træp/", def: "Overgeneralization forms a common mind trap.", geo: "აზროვნების შეცდომა" },
    { term: "Dissent", ipa: "/dɪˈsent/", def: "Several members voiced dissent during the debate.", geo: "უთანხმოება" },
    { term: "Foolproof", ipa: "/fuːlpruːf/", def: "The system offers a foolproof safety mechanism.", geo: "შეცდომისგან დაცული" },
    { term: "Deadlock", ipa: "/ˈdedlɒk/", def: "Negotiations reached a deadlock.", geo: "ჩიხური მდგომარეობა" },
    { term: "Envoy", ipa: "/ˈenvɔɪ/", def: "The country sent an envoy to the peace talks.", geo: "წარმომადგენელი, ელჩი" },
    { term: "Inviolable", ipa: "/ɪnˈvaɪələbl/", def: "Human rights remain inviolable.", geo: "ხელშეუხებელი" },
    { term: "Aggravate", ipa: "/ˈæɡrəveɪt/", def: "Lack of sleep aggravates headaches.", geo: "გაუარესება" },
    { term: "Intermittent", ipa: "/ˌɪntəˈmɪtənt/", def: "The patient reported intermittent fever.", geo: "პერიოდული" },
    { term: "Purulent", ipa: "/ˈpjʊərʊlənt/", def: "The wound produced purulent discharge.", geo: "ჩირქოვანი" },
    { term: "Sputum", ipa: "/ˈspjuːtəm/", def: "The doctor examined the sputum sample.", geo: "ნახველი" },
    { term: "Teetotal", ipa: "/ˌtiːˈtəʊtəl/", def: "He remained teetotal for health reasons.", geo: "ალკოჰოლზე სრული უარი" },
    { term: "Dull", ipa: "/dʌl/", def: "The lecture felt dull and repetitive.", geo: "მოსაწყენი" },
    { term: "Spry", ipa: "/spraɪ/", def: "The spry old man still hikes daily.", geo: "ენერგიული, მოხერხებული" },
    { term: "Seclusion", ipa: "/sɪˈkluːʒən/", def: "The writer lived in seclusion.", geo: "განმარტოება" },
    { term: "Flawed", ipa: "/flɔːd/", def: "The argument looked flawed.", geo: "ხარვეზიანი" },
    { term: "Trickiest", ipa: "/ˈtrɪkiɪst/", def: "This puzzle ranks as the trickiest one.", geo: "ყველაზე რთული" },
    { term: "Skyscraper", ipa: "/ˈskaɪskreɪpər/", def: "The new skyscraper dominates the skyline.", geo: "ცათამბჯენი" },
    { term: "Chunks", ipa: "/tʃʌŋks/", def: "The rock broke into chunks.", geo: "დიდი ნაჭრები" },
    { term: "Storyteller", ipa: "/ˈstɔːritelər/", def: "The storyteller captivated the audience.", geo: "მთხრობელი" },
    { term: "Guardrails", ipa: "/ˈɡɑːrdreɪlz/", def: "Ethical guardrails guide research.", geo: "დამცავი საზღვრები" },
    { term: "Robustness", ipa: "/rəʊˈbʌstnəs/", def: "The study tested the robustness of the model.", geo: "მდგრადობა" },
    { term: "Value Alignment", ipa: "/ˈvæljuː əˈlaɪnmənt/", def: "Successful teams depend on value alignment.", geo: "ღირებულებების შესაბამისობა" },
    { term: "Insouciant", ipa: "/ɪnˈsuːsiənt/", def: "His insouciant attitude surprised everyone.", geo: "უდარდელი" },
    { term: "Indolent", ipa: "/ˈɪndələnt/", def: "The indolent student avoided hard work.", geo: "ზარმაცი" },
    { term: "Tenacious", ipa: "/əˈneɪʃəs/", def: "The tenacious researcher pursued the truth.", geo: "შეუპოვარი, ჯიუტი" },
    { term: "Whimsical", ipa: "/ˈwɪmzɪkəl/", def: "The painting showed a whimsical style.", geo: "უცნაური, კაპრიზული" },
    { term: "Abjure", ipa: "/æbˈdʒʊər/", def: "He abjured his former beliefs.", geo: "საჯაროდ უარყოფა" }
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

// QUIZ
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
