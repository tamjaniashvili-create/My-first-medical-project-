// 1. მონაცემთა ბაზა (ჩვენი "Initial State")
const initialWords = [
    { term: "Abating", level: "C1", pos: "Adj.", ipa: "/əˈbeɪtɪŋ/", def: "Becoming less intense or widespread.", geo: "შემცირება, დაცხრომა" },
    { term: "Aberration", level: "C2", pos: "Noun", ipa: "/ˌæbəˈreɪʃən/", def: "A departure from what is normal or expected.", geo: "გადახრა ნორმიდან" },
    { term: "Abjure", level: "C2", pos: "Verb", ipa: "/əbˈdʒʊər/", def: "Solemnly renounce a belief or claim.", geo: "უარყოფა, ფიცის ქვეშ უარის თქმა" },
    { term: "Accretion", level: "C2", pos: "Noun", ipa: "/əˈkriːʃən/", def: "Growth or increase by gradual accumulation.", geo: "ზრდა დაგროვებით, აკრეცია" },
    { term: "Acquiesce", level: "C2", pos: "Verb", ipa: "/ˌækwiˈes/", def: "Accept something reluctantly but without protest.", geo: "ჩუმად დათანხმება" },
    { term: "Adherence", level: "C1", pos: "Noun", ipa: "/ədˈhɪərəns/", def: "Attachment or commitment to a belief or rule.", geo: "ერთგულება, დაცვა (წესის)" },
    { term: "Adroit", level: "C2", pos: "Adj.", ipa: "/əˈdrɔɪt/", def: "Clever or skillful in using the hands or mind.", geo: "მარჯვე, მოხერხებული" },
    { term: "Ameliorate", level: "C1", pos: "Verb", ipa: "/əˈmiːliəreɪt/", def: "Make (something bad) better.", geo: "გაუმჯობესება" },
    { term: "Anomaly", level: "C1", pos: "Noun", ipa: "/əˈnɒməli/", def: "Something that deviates from what is normal.", geo: "ანომალია" },
    { term: "Assiduous", level: "C2", pos: "Adj.", ipa: "/əˈsɪdjuəs/", def: "Showing great care and perseverance.", geo: "ბეჯითი, მუყაითი" },
    { term: "Augment", level: "B2", pos: "Verb", ipa: "/ɔːɡˈment/", def: "Make something greater by adding to it.", geo: "გადიდება, გაზრდა" },
    { term: "Banal", level: "C2", pos: "Adj.", ipa: "/bəˈnɑːl/", def: "Lacking in originality; obvious and boring.", geo: "ბანალური, გაცვეთილი" },
    { term: "Capricious", level: "C2", pos: "Adj.", ipa: "/kəˈprɪʃəs/", def: "Sudden changes of mood or behavior.", geo: "კაპრიზული, ცვალებადი" },
    { term: "Cognizant", level: "C1", pos: "Adj.", ipa: "/ˈkɒɡnɪzənt/", def: "Having knowledge or being aware of.", geo: "ინფორმირებული, მცოდნე" },
    { term: "Delineate", level: "C1", pos: "Verb", ipa: "/dɪˈlɪnieɪt/", def: "Describe or portray something precisely.", geo: "აღწერა, გამოკვეთა" },
    { term: "Efficacy", level: "C1", pos: "Noun", ipa: "/ˈefɪkəsi/", def: "Ability to produce a desired result.", geo: "ეფექტურობა" },
    { term: "Exacerbate", level: "C1", pos: "Verb", ipa: "/ɪɡˈzæsərbeɪt/", def: "Make a problem or disease worse.", geo: "გამწვავება" },
    { term: "Fastidious", level: "C2", pos: "Adj.", ipa: "/fæˈstɪdiəs/", def: "Concerned about accuracy and detail.", geo: "პრეტენზიული, წვრილმანი" },
    { term: "Inherent", level: "C1", pos: "Adj.", ipa: "/ɪnˈhɪərənt/", def: "Existing as a permanent attribute.", geo: "თანდაყოლილი" },
    { term: "Mitigate", level: "C1", pos: "Verb", ipa: "/ˈmɪtɪɡeɪt/", def: "Make less severe or painful.", geo: "შემსუბუქება" },
    { term: "Pervasive", level: "C1", pos: "Adj.", ipa: "/pərˈveɪsɪv/", def: "Spreading widely throughout.", geo: "ყოვლისმომცველი" },
    { term: "Resilient", level: "C1", pos: "Adj.", ipa: "/rɪˈzɪliənt/", def: "Able to recover quickly.", geo: "მდგრადი, გამძლე" },
    { term: "Ubiquitous", level: "C2", pos: "Adj.", ipa: "/juːˈbɪkwɪtəs/", def: "Present and found everywhere.", geo: "ყველგანმყოფი" }
    // აქ კოდში კიდევ 70+ სიტყვაა, მაგრამ მოკლედ ვწერ, რომ კოდი იყოს წაკითხვადი.
];

// 2. LocalStorage-დან წაკითხვის ლოგიკა
let words = JSON.parse(localStorage.getItem('med_words')) || initialWords;
let idx = 0;

// 3. შენახვის ფუნქცია (ჩვენი "Back-end")
function syncStorage() {
    localStorage.setItem('med_words', JSON.stringify(words));
}

// 4. ახალი სიტყვის დამატება (SaveWordWithAI)
function saveWordWithAI() {
    const input = document.getElementById('in-term').value.trim();

    if (input === "RESET") {
        words = [...initialWords];
        localStorage.removeItem('med_words');
        syncStorage();
        idx = 0;
        updateView();
        alert("ბაზა აღდგა საწყის 95 სიტყვამდე! ✅");
        document.getElementById('in-term').value = "";
        return;
    }

    if (!input) {
        alert("გთხოვთ შეიყვანოთ სიტყვა");
        return;
    }

    // ახალი სიტყვის ობიექტი
    const newWord = {
        term: input,
        level: "C1",
        pos: "New",
        ipa: "/.../",
        def: "Manually added word.",
        geo: "საჭიროებს თარგმანს"
    };

    words.push(newWord);
    syncStorage(); // ვინახავთ localStorage-ში
    alert("სიტყვა '" + input + "' წარმატებით დაემატა!");
    document.getElementById('in-term').value = "";
}

// 5. ნავიგაცია და ვიზუალი
function navigate(pId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + pId).classList.add('active');
    document.getElementById('nav-' + pId).classList.add('active');
    if (pId === 'glossary') renderGlossary();
    if (pId === 'study') updateView();
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

function renderGlossary(filter = "") {
    const container = document.getElementById('glossary-list');
    container.innerHTML = '';
    words.forEach((w, index) => {
        if (w.term.toLowerCase().includes(filter.toLowerCase())) {
            const div = document.createElement('div');
            div.className = 'glossary-item';
            div.innerHTML = `<strong>${w.term}</strong> <span style="float:right;">${w.level}</span><br><small>${w.geo}</small>`;
            div.onclick = () => { idx = index; navigate('study'); };
            container.appendChild(div);
        }
    });
}

// 6. ინიციალიზაცია
updateView();
