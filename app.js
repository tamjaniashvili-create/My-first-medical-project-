const initialWords = [
    { term: "Abating", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", ipa: "/ˌæbəˈreɪʃən/", def: "Departure from what is normal or expected.", geo: "აბერაცია, გადახრა ნორმიდან" },
    { term: "Abjure", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce a belief or claim.", geo: "უარყოფა, ფიცის ქვეშ უარის თქმა" },
    { term: "Abundance", ipa: "/əˈbʌndəns/", def: "A very large quantity of something.", geo: "სიუხვე, სიმრავლე" },
    { term: "Accretion", ipa: "/əˈkriːʃən/", def: "Growth or increase by gradual accumulation.", geo: "აკრეცია, ზრდა დაგროვებით" },
    { term: "Acquiesce", ipa: "/ˌækwiˈes/", def: "Accept something reluctantly but without protest.", geo: "ჩუმად დათანხმება, დათმობა" },
    { term: "Adherence", ipa: "/ədˈhɪərəns/", def: "Strict observance of a rule or treatment.", geo: "დაცვა, ერთგულება (წესის)" },
    { term: "Adroit", ipa: "/əˈdrɔɪt/", def: "Clever or skillful in using the hands or mind.", geo: "მარჯვე, მოხერხებული" },
    { term: "Alacrity", ipa: "/əˈlækrəti/", def: "Brisk and cheerful readiness.", geo: "მზადყოფნა, ხალისი" },
    { term: "Ameliorate", ipa: "/əˈmiːliəreɪt/", def: "Make something bad better.", geo: "გაუმჯობესება" },
    { term: "Anachronism", ipa: "/əˈnækrənɪzəm/", def: "Something out of its proper time period.", geo: "ანაქრონიზმი" },
    { term: "Anomaly", ipa: "/əˈnɒməli/", def: "Something that deviates from what is standard.", geo: "ანომალია" },
    { term: "Apathy", ipa: "/ˈæpəθi/", def: "Lack of interest, enthusiasm, or concern.", geo: "აპათია, გულგრილობა" },
    { term: "Assiduous", ipa: "/əˈsɪdjuəs/", def: "Showing great care and perseverance.", geo: "ბეჯითი, მუყაითი" },
    { term: "Augment", ipa: "/ɔːɡˈment/", def: "Make something greater by adding to it.", geo: "გადიდება, გაზრდა" },
    { term: "Aversion", ipa: "/əˈvɜːrʒən/", def: "A strong dislike or disinclination.", geo: "ზიზღი, ანტიპათია" },
    { term: "Banal", ipa: "/bəˈnɑːl/", def: "So lacking in originality as to be obvious.", geo: "ბანალური, გაცვეთილი" },
    { term: "Belligerent", ipa: "/bəˈlɪdʒərənt/", def: "Hostile and aggressive.", geo: "აგრესიული, მეომარი" },
    { term: "Benevolent", ipa: "/bəˈnevələnt/", def: "Well-meaning and kindly.", geo: "კეთილგანწყობილი" },
    { term: "Capricious", ipa: "/kəˈprɪʃəs/", def: "Given to sudden changes of mood or behavior.", geo: "კაპრიზული, ცვალებადი" },
    { term: "Circumspect", ipa: "/ˈsɜːrkəmspekt/", def: "Wary and unwilling to take risks.", geo: "წინდახედული" },
    { term: "Cognizant", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge or being aware of.", geo: "ინფორმირებული" },
    { term: "Compliance", ipa: "/kəmˈplaɪəns/", def: "Action of complying with a wish or command.", geo: "შესაბამისობა, მორჩილება" },
    { term: "Conundrum", ipa: "/kəˈnʌndrəm/", def: "A confusing and difficult problem or question.", geo: "თავსატეხი" },
    { term: "Delineate", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray something precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Deprivation", ipa: "/ˌdeprɪˈveɪʃən/", def: "Lack of basic necessities.", geo: "დეპრივაცია, უკმარისობა" },
    { term: "Deteriorate", ipa: "/dɪˈtɪəriəreɪt/", def: "Become progressively worse.", geo: "გაუარესება" },
    { term: "Discrepancy", ipa: "/dɪˈskrepənsi/", def: "A lack of compatibility between facts.", geo: "შეუსაბამობა" },
    { term: "Efficacy", ipa: "/ˈefɪkəsi/", def: "Ability to produce a desired result.", geo: "ეფექტურობა" },
    { term: "Elusive", ipa: "/iˈluːsɪv/", def: "Difficult to find, catch, or achieve.", geo: "ძნელად მოსახელთებელი" },
    { term: "Exacerbate", ipa: "/ɪɡˈzæsərbeɪt/", def: "Make a problem or disease worse.", geo: "გამწვავება" },
    { term: "Fastidious", ipa: "/fæˈstɪdiəs/", def: "Very attentive to and concerned about detail.", geo: "პრეტენზიული, წვრილმანი" },
    { term: "Futile", ipa: "/ˈfjuːtaɪl/", def: "Incapable of producing any useful result.", geo: "ამაო, უშედეგო" },
    { term: "Inherent", ipa: "/ɪnˈhɪərənt/", def: "Existing in something as a permanent attribute.", geo: "თანდაყოლილი" },
    { term: "Innocuous", ipa: "/ɪˈnɒkjuəs/", def: "Not harmful or offensive.", geo: "უმავნებლო" },
    { term: "Meticulous", ipa: "/məˈtɪkjələs/", def: "Showing great attention to detail.", geo: "პედანტური, ზედმიწევნითი" },
    { term: "Mitigate", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe, serious, or painful.", geo: "შემსუბუქება" },
    { term: "Obscure", ipa: "/əbˈskjʊər/", def: "Not discovered or known about; uncertain.", geo: "ბუნდოვანი" },
    { term: "Pervasive", ipa: "/pərˈveɪsɪv/", def: "Spreading widely throughout an area.", geo: "ყოვლისმომცველი" },
    { term: "Pragmatic", ipa: "/præɡˈmætɪk/", def: "Dealing with things sensibly and realistically.", geo: "პრაგმატული" },
    { term: "Prevalent", ipa: "/ˈprevələnt/", def: "Widespread in a particular area or time.", geo: "გავრცელებული" },
    { term: "Relapse", ipa: "/rɪˈlæps/", def: "A deterioration in health after improvement.", geo: "რეციდივი" },
    { term: "Resilient", ipa: "/rɪˈzɪliənt/", def: "Able to withstand or recover quickly.", geo: "მდგრადი, გამძლე" },
    { term: "Reticent", ipa: "/ˈretɪsənt/", def: "Not revealing one's thoughts or feelings readily.", geo: "თავშეკავებული" },
    { term: "Sovereign", ipa: "/ˈsɒvrɪn/", def: "Possessing supreme or ultimate power.", geo: "სუვერენული" },
    { term: "Subsequent", ipa: "/ˈsʌbsɪkwənt/", def: "Coming after something in time.", geo: "მომდევნო" },
    { term: "Tenuous", ipa: "/ˈtenjuəs/", def: "Very weak or slight.", geo: "სუსტი, მყიფე" },
    { term: "Ubiquitous", ipa: "/juːˈbɪkwɪtəs/", def: "Present, appearing, or found everywhere.", geo: "ყველგანმყოფი" },
    { term: "Venerable", ipa: "/ˈvenərəbəl/", def: "Accorded a great deal of respect.", geo: "პატივსაცემი" },
    { term: "Zealous", ipa: "/ˈzeləs/", def: "Having or showing great zeal.", geo: "ენთუზიაზმით აღსავსე" }
    // ... დანარჩენი სიტყვები ავტომატურად ანბანურად დალაგდება
];

let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

function sortWords() { words.sort((a, b) => a.term.localeCompare(b.term)); }

function navigate(pId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-'+pId).classList.add('active');
    document.getElementById('nav-'+pId).classList.add('active');
    if(pId === 'study') updateView();
    if(pId === 'quiz') startQuiz();
}

function updateView() {
    if (words.length === 0) return;
    sortWords();
    const w = words[idx];
    document.getElementById('letter-header').innerText = `Section ${w.term.charAt(0).toUpperCase()}`;
    document.getElementById('c-term').innerText = w.term;
    document.getElementById('c-ipa').innerText = w.ipa;
    document.getElementById('c-def').innerText = w.def;
    document.getElementById('c-geo').innerText = w.geo;
    document.getElementById('progress-text').innerText = `${idx + 1} / ${words.length}`;
    document.getElementById('card-inner').classList.remove('flipped');
}

// **გაუმჯობესებული ძიება**
document.getElementById('term-search').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if(q.length > 0) {
        const fIdx = words.findIndex(w => w.term.toLowerCase().includes(q));
        if(fIdx !== -1) { idx = fIdx; updateView(); }
    }
});

function flipCard() { document.getElementById('card-inner').classList.toggle('flipped'); }
function next() { idx = (idx + 1) % words.length; updateView(); }
function prev() { idx = (idx - 1 + words.length) % words.length; updateView(); }

function speak() {
    const m = new SpeechSynthesisUtterance(words[idx].term);
    m.lang = 'en-US'; window.speechSynthesis.speak(m);
}

// **გაუმჯობესებული ქვიზი**
function startQuiz() { nextQuestion(); }
function nextQuestion() {
    const correct = words[Math.floor(Math.random() * words.length)];
    const options = [correct.geo];
    while(options.length < 3) {
        const r = words[Math.floor(Math.random() * words.length)].geo;
        if(!options.includes(r)) options.push(r);
    }
    options.sort(() => Math.random() - 0.5);
    document.getElementById('q-question').innerText = `რას ნიშნავს: ${correct.term}?`;
    const container = document.getElementById('q-options');
    container.innerHTML = '';
    options.forEach(o => {
        const b = document.createElement('button');
        b.className = 'quiz-option';
        b.innerText = o;
        b.onclick = () => {
            const btns = container.querySelectorAll('button');
            btns.forEach(btn => {
                if(btn.innerText === correct.geo) btn.classList.add('correct');
                else if(btn.innerText === o) btn.classList.add('wrong');
                btn.disabled = true;
            });
            document.getElementById('btn-next-q').style.display = 'block';
        };
        container.appendChild(b);
    });
    document.getElementById('btn-next-q').style.display = 'none';
}

updateView();
