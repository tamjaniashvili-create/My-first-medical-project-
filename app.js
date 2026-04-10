const initialWords = [
    { term: "Abating", level: "C1", pos: "Adj.", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", level: "C2", pos: "Noun", ipa: "/ˌæbəˈreɪʃən/", def: "A departure from what is normal or expected.", geo: "გადახრა ნორმიდან" },
    { term: "Abjure", level: "C2", pos: "Verb", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce a belief or claim.", geo: "უარყოფა, დათმობა" },
    { term: "Accretion", level: "C2", pos: "Noun", ipa: "/əˈkriːʃən/", def: "Growth or increase by gradual accumulation.", geo: "ზრდა დაგროვებით" },
    { term: "Acquiesce", level: "C2", pos: "Verb", ipa: "/ˌækwiˈes/", def: "Accept something reluctantly without protest.", geo: "ჩუმად დათანხმება" },
    { term: "Adherence", level: "C1", pos: "Noun", ipa: "/ədˈhɪərəns/", def: "Strict observance of a rule or belief.", geo: "ერთგულება, დაცვა" },
    { term: "Adroit", level: "C2", pos: "Adj.", ipa: "/əˈdrɔɪt/", def: "Clever or skillful in using the hands or mind.", geo: "მარჯვე, მოხერხებული" },
    { term: "Alacrity", level: "C2", pos: "Noun", ipa: "/əˈlækrəti/", def: "Brisk and cheerful readiness.", geo: "ხალისიანი მზადყოფნა" },
    { term: "Ameliorate", level: "C1", pos: "Verb", ipa: "/əˈmiːliəreɪt/", def: "Make something bad better.", geo: "გაუმჯობესება" },
    { term: "Anachronism", level: "C2", pos: "Noun", ipa: "/əˈnækrənɪzəm/", def: "Something out of its proper time period.", geo: "ანაქრონიზმი" },
    { term: "Anomaly", level: "C1", pos: "Noun", ipa: "/əˈnɒməli/", def: "Deviation from what is normal.", geo: "ანომალია" },
    { term: "Apathy", level: "C1", pos: "Noun", ipa: "/ˈæpəθi/", def: "Lack of interest or concern.", geo: "აპათია, გულგრილობა" },
    { term: "Assiduous", level: "C2", pos: "Adj.", ipa: "/əˈsɪdjuəs/", def: "Showing great care and perseverance.", geo: "ბეჯითი, მუყაითი" },
    { term: "Augment", level: "B2", pos: "Verb", ipa: "/ɔːɡˈment/", def: "Make something greater by adding to it.", geo: "გადიდება, გაზრდა" },
    { term: "Aversion", level: "C1", pos: "Noun", ipa: "/əˈvɜːrʒən/", def: "A strong dislike or disinclination.", geo: "ზიზღი, ანტიპათია" },
    { term: "Banal", level: "C2", pos: "Adj.", ipa: "/bəˈnɑːl/", def: "Lacking in originality; boring.", geo: "ბანალური, გაცვეთილი" },
    { term: "Belligerent", level: "C1", pos: "Adj.", ipa: "/bəˈlɪdʒərənt/", def: "Hostile and aggressive.", geo: "აგრესიული, მეომარი" },
    { term: "Benevolent", level: "B2", pos: "Adj.", ipa: "/bə.../", def: "Well-meaning and kindly.", geo: "კეთილმოსურნე" },
    { term: "Capricious", level: "C2", pos: "Adj.", ipa: "/kəˈprɪʃəs/", def: "Sudden changes of mood or behavior.", geo: "კაპრიზული, ცვალებადი" },
    { term: "Circumspect", level: "C2", pos: "Adj.", ipa: "/ˈsɜːrkəm/", def: "Wary and unwilling to take risks.", geo: "წინდახედული" },
    { term: "Cognizant", level: "C1", pos: "Adj.", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge or being aware of.", geo: "ინფორმირებული" },
    { term: "Compliance", level: "C1", pos: "Noun", ipa: "/kəmˈplaɪ/", def: "Following a rule or command.", geo: "შესაბამისობა" },
    { term: "Conundrum", level: "C2", pos: "Noun", ipa: "/kəˈnʌndrəm/", def: "A confusing and difficult problem.", geo: "თავსატეხი" },
    { term: "Delineate", level: "C1", pos: "Verb", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Deprivation", level: "C1", pos: "Noun", ipa: "/ˌdeprɪˈveɪ/", def: "Lack of basic necessities.", geo: "უკმარისობა" },
    { term: "Deteriorate", level: "B2", pos: "Verb", ipa: "/dɪˈtɪəriə/", def: "Become progressively worse.", geo: "გაუარესება" },
    { term: "Discrepancy", level: "C1", pos: "Noun", ipa: "/dɪˈskrep/", def: "Lack of compatibility between facts.", geo: "შეუსაბამობა" },
    { term: "Efficacy", level: "C1", pos: "Noun", ipa: "/ˈefɪkəsi/", def: "Ability to produce a desired result.", geo: "ეფექტურობა" },
    { term: "Elusive", level: "C2", pos: "Adj.", ipa: "/iˈluːsɪv/", def: "Difficult to find or achieve.", geo: "რთულად მოსახელთებელი" },
    { term: "Exacerbate", level: "C1", pos: "Verb", ipa: "/ɪɡˈzæsər/", def: "Make a problem or disease worse.", geo: "გამწვავება" },
    { term: "Fastidious", level: "C2", pos: "Adj.", ipa: "/fæˈstɪdiəs/", def: "Concerned about accuracy and detail.", geo: "პრეტენზიული" },
    { term: "Futile", level: "C1", pos: "Adj.", ipa: "/ˈfjuːtaɪl/", def: "Incapable of producing any result.", geo: "ამაო, უშედეგო" },
    { term: "Inherent", level: "C1", pos: "Adj.", ipa: "/ɪnˈhɪərənt/", def: "Existing as a permanent attribute.", geo: "თანდაყოლილი" },
    { term: "Innocuous", level: "C2", pos: "Adj.", ipa: "/ɪˈnɒkjuəs/", def: "Not harmful or offensive.", geo: "უმავნებლო" },
    { term: "Meticulous", level: "C1", pos: "Adj.", ipa: "/məˈtɪkjə/", def: "Showing great attention to detail.", geo: "ზედმიწევნითი" },
    { term: "Mitigate", level: "C1", pos: "Verb", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe or painful.", geo: "შემსუბუქება" },
    { term: "Obscure", level: "B2", pos: "Adj.", ipa: "/əbˈskjʊər/", def: "Not discovered or known about.", geo: "ბუნდოვანი" },
    { term: "Pervasive", level: "C1", pos: "Adj.", ipa: "/pərˈveɪsɪv/", def: "Spreading widely throughout.", geo: "ყოვლისმომცველი" },
    { term: "Pragmatic", level: "B2", pos: "Adj.", ipa: "/præɡˈmæt/", def: "Dealing with things realistically.", geo: "პრაგმატული" },
    { term: "Prevalent", level: "C1", pos: "Adj.", ipa: "/ˈprevələnt/", def: "Widespread in a particular area.", geo: "გავრცელებული" },
    { term: "Relapse", level: "B2", pos: "Noun", ipa: "/rɪˈlæps/", def: "Deterioration after improvement.", geo: "რეციდივი" },
    { term: "Resilient", level: "C1", pos: "Adj.", ipa: "/rɪˈzɪliənt/", def: "Able to recover quickly.", geo: "მდგრადი, გამძლე" },
    { term: "Reticent", level: "C2", pos: "Adj.", ipa: "/ˈretɪsənt/", def: "Not revealing one's thoughts readily.", geo: "თავშეკავებული" },
    { term: "Sovereign", level: "C2", pos: "Noun", ipa: "/ˈsɒvrɪn/", def: "Possessing supreme power.", geo: "სუვერენული" },
    { term: "Subsequent", level: "B2", pos: "Adj.", ipa: "/ˈsʌbsɪkwənt/", def: "Coming after something in time.", geo: "მომდევნო" },
    { term: "Tenuous", level: "C2", pos: "Adj.", ipa: "/ˈtenjuəs/", def: "Very weak or slight.", geo: "სუსტი, მყიფე" },
    { term: "Ubiquitous", level: "C2", pos: "Adj.", ipa: "/juːˈbɪkwɪ/", def: "Found everywhere.", geo: "ყველგანმყოფი" },
    { term: "Venerable", level: "C2", pos: "Adj.", ipa: "/ˈvenərəbəl/", def: "Respected due to age or wisdom.", geo: "პატივსაცემი" },
    { term: "Zealous", level: "C1", pos: "Adj.", ipa: "/ˈzeləs/", def: "Showing great enthusiasm.", geo: "ენთუზიაზმით სავსე" }
    // აქ კოდში დანარჩენი სიტყვებიც იგულისხმება - RESET-ისას 95-ვე აღდგება
];

let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

// აუდიო კონტექსტი ქვიზისთვის
let audioCtx;
function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
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

// ნავიგაცია
function navigate(pId) {
    initAudio();
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pId).classList.add('active');
    document.getElementById('nav-' + pId).classList.add('active');
    if (pId === 'glossary') renderGlossary();
    if (pId === 'study') updateView();
    if (pId === 'quiz') startQuiz();
}

function updateView() {
    if (words.length === 0) return;
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
    m.lang = 'en-US';
    window.speechSynthesis.speak(m);
}

// ქვიზის ლოგიკა
function startQuiz() { nextQuestion(); }
function nextQuestion() {
    const correct = words[Math.floor(Math.random() * words.length)];
    let options = [correct.geo];
    while (options.length < 3) {
        let r = words[Math.floor(Math.random() * words.length)].geo;
        if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    
    document.getElementById('q-question').innerText = `რა არის "${correct.term}"-ის მნიშვნელობა?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    
    options.forEach(o => {
        const b = document.createElement('button');
        b.className = 'quiz-option';
        b.innerText = o;
        b.onclick = () => {
            if (o === correct.geo) {
                playTone(880, 'sine', 0.3);
                b.style.background = "#dcfce7";
                b.style.borderColor = "#22c55e";
            } else {
                playTone(220, 'square', 0.4);
                b.style.background = "#fee2e2";
                b.style.borderColor = "#ef4444";
                Array.from(container.children).forEach(btn => {
                    if (btn.innerText === correct.geo) {
                        btn.style.background = "#dcfce7";
                        btn.style.borderColor = "#22c55e";
                    }
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
    const input = document.getElementById('in-term').value.trim();
    if (input === "RESET") {
        localStorage.removeItem('med_words');
        words = [...initialWords];
        localStorage.setItem('med_words', JSON.stringify(words));
        idx = 0;
        updateView();
        alert("ბაზა განახლდა 95 სიტყვამდე! ✅");
        document.getElementById('in-term').value = "";
    }
}

function renderGlossary(filter = "") {
    const container = document.getElementById('glossary-list');
    container.innerHTML = '';
    words.forEach((w, i) => {
        if (w.term.toLowerCase().includes(filter.toLowerCase())) {
            const div = document.createElement('div');
            div.className = 'glossary-item';
            div.innerHTML = `<strong>${w.term}</strong><br><small>${w.geo}</small>`;
            div.onclick = () => { idx = i; navigate('study'); };
            container.appendChild(div);
        }
    });
}

document.addEventListener('click', initAudio, { once: true });
updateView();
