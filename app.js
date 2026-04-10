const initialWords = [
    { term: "Abating", level: "C1", pos: "Adjective", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense, severe, or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", level: "C2", pos: "Noun", ipa: "/ˌæbəˈreɪʃən/", def: "A departure from what is normal, usual, or expected.", geo: "გადახრა ნორმიდან, აბერაცია" },
    { term: "Abjure", level: "C2", pos: "Verb", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce (a belief, cause, or claim).", geo: "უარყოფა, ფიცის ქვეშ უარის თქმა" },
    { term: "Abundance", level: "C1", pos: "Noun", ipa: "/əˈbʌndəns/", def: "A very large quantity of something.", geo: "სიუხვე, სიმრავლე" },
    { term: "Accretion", level: "C2", pos: "Noun", ipa: "/əˈkriːʃən/", def: "Growth or increase by the gradual accumulation of additional layers.", geo: "ზრდა დაგროვების გზით, აკრეცია" },
    { term: "Acquiesce", level: "C2", pos: "Verb", ipa: "/ˌækwiˈes/", def: "Accept something reluctantly but without protest.", geo: "ჩუმად დათანხმება, დათმობა" },
    { term: "Adherence", level: "C1", pos: "Noun", ipa: "/ədˈhɪərəns/", def: "Attachment or commitment to a person, cause, or belief.", geo: "ერთგულება, დაცვა (წესის)" },
    { term: "Adroit", level: "C2", pos: "Adjective", ipa: "/əˈdrɔɪt/", def: "Clever or skillful in using the hands or mind.", geo: "მარჯვე, მოხერხებული" },
    { term: "Alacrity", level: "C2", pos: "Noun", ipa: "/əˈlækrəti/", def: "Brisk and cheerful readiness.", geo: "ხალისიანი მზადყოფნა" },
    { term: "Ameliorate", level: "C1", pos: "Verb", ipa: "/əˈmiːliəreɪt/", def: "Make (something bad or unsatisfactory) better.", geo: "გაუმჯობესება" },
    { term: "Anachronism", level: "C2", pos: "Noun", ipa: "/əˈnækrənɪzəm/", def: "A thing belonging to a period other than that in which it exists.", geo: "ანაქრონიზმი" },
    { term: "Anomaly", level: "C1", pos: "Noun", ipa: "/əˈnɒməli/", def: "Something that deviates from what is standard, normal, or expected.", geo: "ანომალია" },
    { term: "Apathy", level: "C1", pos: "Noun", ipa: "/ˈæpəθi/", def: "Lack of interest, enthusiasm, or concern.", geo: "აპათია, გულგრილობა" },
    { term: "Assiduous", level: "C2", pos: "Adjective", ipa: "/əˈsɪdjuəs/", def: "Showing great care and perseverance.", geo: "ბეჯითი, გულმოდგინე" },
    { term: "Augment", level: "C1", pos: "Verb", ipa: "/ɔːɡˈment/", def: "Make (something) greater by adding to it; increase.", geo: "გადიდება, გაზრდა" },
    { term: "Aversion", level: "C1", pos: "Noun", ipa: "/əˈvɜːrʒən/", def: "A strong dislike or disinclination.", geo: "ზიზღი, ანტიპათია" },
    { term: "Banal", level: "C2", pos: "Adjective", ipa: "/bəˈnɑːl/", def: "So lacking in originality as to be obvious and boring.", geo: "ბანალური, გაცვეთილი" },
    { term: "Belligerent", level: "C1", pos: "Adjective", ipa: "/bəˈlɪdʒərənt/", def: "Hostile and aggressive.", geo: "აგრესიული, მეომარი" },
    { term: "Benevolent", level: "C1", pos: "Adjective", ipa: "/bəˈnevələnt/", def: "Well-meaning and kindly.", geo: "კეთილმოსურნე" },
    { term: "Capricious", level: "C2", pos: "Adjective", ipa: "/kəˈprɪʃəs/", def: "Given to sudden and unaccountable changes of mood or behavior.", geo: "კაპრიზული, ცვალებადი" },
    { term: "Circumspect", level: "C2", pos: "Adjective", ipa: "/ˈsɜːrkəmspekt/", def: "Wary and unwilling to take risks.", geo: "წინდახედული" },
    { term: "Cognizant", level: "C1", pos: "Adjective", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge or being aware of.", geo: "ინფორმირებული, მცოდნე" },
    { term: "Compliance", level: "C1", pos: "Noun", ipa: "/kəmˈplaɪəns/", def: "The action of complying with a wish or command.", geo: "შესაბამისობა, მორჩილება" },
    { term: "Conundrum", level: "C2", pos: "Noun", ipa: "/kəˈnʌndrəm/", def: "A confusing and difficult problem or question.", geo: "თავსატეხი, გამოცანა" },
    { term: "Delineate", level: "C1", pos: "Verb", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray (something) precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Deprivation", level: "C1", pos: "Noun", ipa: "/ˌdeprɪˈveɪʃən/", def: "The lack or denial of something considered to be a necessity.", geo: "დეპრივაცია, უკმარისობა" },
    { term: "Deteriorate", level: "C1", pos: "Verb", ipa: "/dɪˈtɪəriəreɪt/", def: "Become progressively worse.", geo: "გაუარესება" },
    { term: "Discrepancy", level: "C1", pos: "Noun", ipa: "/dɪˈskrepənsi/", def: "A lack of compatibility or similarity between two or more facts.", geo: "შეუსაბამობა" },
    { term: "Efficacy", level: "C1", pos: "Noun", ipa: "/ˈefɪkəsi/", def: "The ability to produce a desired or intended result.", geo: "ეფექტურობა" },
    { term: "Elusive", level: "C2", pos: "Adjective", ipa: "/iˈluːsɪv/", def: "Difficult to find, catch, or achieve.", geo: "რთულად მოსახელთებელი" },
    { term: "Exacerbate", level: "C1", pos: "Verb", ipa: "/ɪɡˈzæsərbeɪt/", def: "Make (a problem, bad situation, or negative feeling) worse.", geo: "გამწვავება" },
    { term: "Fastidious", level: "C2", pos: "Adjective", ipa: "/fæˈstɪdiəs/", def: "Very attentive to and concerned about accuracy and detail.", geo: "პრეტენზიული, წვრილმანი" },
    { term: "Futile", level: "C1", pos: "Adjective", ipa: "/ˈfjuːtaɪl/", def: "Incapable of producing any useful result; pointless.", geo: "ამაო, უშედეგო" },
    { term: "Inherent", level: "C1", pos: "Adjective", ipa: "/ɪnˈhɪərənt/", def: "Existing in something as a permanent, essential, or characteristic attribute.", geo: "თანდაყოლილი" },
    { term: "Innocuous", level: "C2", pos: "Adjective", ipa: "/ɪˈnɒkjuəs/", def: "Not harmful or offensive.", geo: "უმავნებლო" },
    { term: "Meticulous", level: "C1", pos: "Adjective", ipa: "/məˈtɪkjələs/", def: "Showing great attention to detail; very careful and precise.", geo: "პედანტური, ზედმიწევნითი" },
    { term: "Mitigate", level: "C1", pos: "Verb", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe, serious, or painful.", geo: "შემსუბუქება" },
    { term: "Obscure", level: "C1", pos: "Adjective", ipa: "/əbˈskjʊər/", def: "Not discovered or known about; uncertain.", geo: "ბუნდოვანი, გაურკვეველი" },
    { term: "Pervasive", level: "C1", pos: "Adjective", ipa: "/pərˈveɪsɪv/", def: "Spreading widely throughout an area or a group of people.", geo: "ყოვლისმომცველი" },
    { term: "Pragmatic", level: "C1", pos: "Adjective", ipa: "/præɡˈmætɪk/", def: "Dealing with things sensibly and realistically.", geo: "პრაგმატული" },
    { term: "Prevalent", level: "C1", pos: "Adjective", ipa: "/ˈprevələnt/", def: "Widespread in a particular area or at a particular time.", geo: "გავრცელებული" },
    { term: "Relapse", level: "C1", pos: "Noun", ipa: "/rɪˈlæps/", def: "A deterioration in someone's state of health after a temporary improvement.", geo: "რეციდივი, გაუარესება" },
    { term: "Resilient", level: "C1", pos: "Adjective", ipa: "/rɪˈzɪliənt/", def: "Able to withstand or recover quickly from difficult conditions.", geo: "მდგრადი, გამძლე" },
    { term: "Reticent", level: "C2", pos: "Adjective", ipa: "/ˈretɪsənt/", def: "Not revealing one's thoughts or feelings readily.", geo: "სიტყვაძუნწი, თავშეკავებული" },
    { term: "Sovereign", level: "C2", pos: "Noun/Adj", ipa: "/ˈsɒvrɪn/", def: "Possessing supreme or ultimate power.", geo: "სუვერენული" },
    { term: "Subsequent", level: "B2", pos: "Adjective", ipa: "/ˈsʌbsɪkwənt/", def: "Coming after something in time; following.", geo: "მომდევნო" },
    { term: "Tenuous", level: "C2", pos: "Adjective", ipa: "/ˈtenjuəs/", def: "Very weak or slight; flimsy.", geo: "სუსტი, მყიფე" },
    { term: "Ubiquitous", level: "C2", pos: "Adjective", ipa: "/juːˈbɪkwɪtəs/", def: "Present, appearing, or found everywhere.", geo: "ყველგანმყოფი" },
    { term: "Venerable", level: "C2", pos: "Adjective", ipa: "/ˈvenərəbəl/", def: "Accorded a great deal of respect, especially because of age, wisdom, or character.", geo: "პატივსაცემი" },
    { term: "Zealous", level: "C1", pos: "Adjective", ipa: "/ˈzeləs/", def: "Having or showing great zeal or enthusiasm.", geo: "ენთუზიაზმით აღსავსე" }
];

// --- Core Logic ---
let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

// Force Update Mechanism
function resetToInitial() {
    localStorage.removeItem('med_words');
    words = [...initialWords];
    idx = 0;
    saveToLocal();
    updateView();
    alert("ბაზა განახლდა! 90+ სიტყვა მზადაა.");
}

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
    if (words.length === 0) return;
    sortWords();
    const w = words[idx];
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa;
    document.getElementById('c-def').innerText = w.def;
    document.getElementById('c-geo').innerText = w.geo;
    document.getElementById('c-level').innerText = w.level || "C1";
    document.getElementById('c-pos').innerText = w.pos || "VOCAB";
    document.getElementById('progress-text').innerText = `${idx + 1} / ${words.length}`;
    document.getElementById('card-inner').classList.remove('flipped');
}

// Search Logic
document.getElementById('term-search').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (q.length > 1) {
        const found = words.findIndex(w => w.term.toLowerCase().includes(q));
        if (found !== -1) { idx = found; updateView(); }
    }
});

function flipCard() { document.getElementById('card-inner').classList.toggle('flipped'); }
function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const m = new SpeechSynthesisUtterance(words[idx].term);
    m.lang = 'en-US'; window.speechSynthesis.speak(m);
}

// Glossary System
function renderGlossary(filter = "") {
    const container = document.getElementById('glossary-list');
    container.innerHTML = '';
    sortWords();
    words.forEach((w, index) => {
        if (w.term.toLowerCase().includes(filter.toLowerCase())) {
            const div = document.createElement('div');
            div.className = 'glossary-item';
            div.innerHTML = `
                <div style="display:flex; justify-content:space-between;">
                    <strong>${w.term}</strong>
                    <span style="font-size:10px; opacity:0.6;">${w.level}</span>
                </div>
                <div style="font-size:13px; color:var(--primary);">${w.geo}</div>
            `;
            div.onclick = () => { idx = index; navigate('study'); };
            container.appendChild(div);
        }
    });
}

document.getElementById('gloss-search').addEventListener('input', (e) => renderGlossary(e.target.value));

// Quiz Logic
function startQuiz() { nextQuestion(); }
function nextQuestion() {
    const correct = words[Math.floor(Math.random() * words.length)];
    const options = [correct.geo];
    while (options.length < 3) {
        const r = words[Math.floor(Math.random() * words.length)].geo;
        if (!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    document.getElementById('q-question').innerText = `What does "${correct.term}" mean?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    options.forEach(o => {
        const b = document.createElement('button');
        b.className = 'quiz-option';
        b.innerText = o;
        b.onclick = () => {
            const all = container.querySelectorAll('button');
            all.forEach(btn => {
                if (btn.innerText === correct.geo) btn.classList.add('correct');
                else if (btn.innerText === o) btn.classList.add('wrong');
                btn.disabled = true;
            });
            document.getElementById('btn-next-q').style.display = 'block';
        };
        container.appendChild(b);
    });
    document.getElementById('btn-next-q').style.display = 'none';
}

function saveWordWithAI() {
    const val = document.getElementById('in-term').value.trim();
    if (val === "RESET") { resetToInitial(); return; }
    // აქ შეიძლება დაემატოს AI ლოგიკა...
    alert("ფუნქცია მზადების პროცესშია. გამოიყენეთ 'RESET' ბაზის განსაახლებლად.");
}

// Init
sortWords();
updateView();
