<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MedVocab Pro v2.0</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <style>
        :root { --primary: #2563eb; --bg: #f8fafc; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: var(--bg); margin: 0; padding: 15px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; background: white; padding: 15px; border-radius: 15px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); }
        .title-area h1 { color: var(--primary); margin: 0; font-size: 20px; letter-spacing: -0.5px; }
        #searchBar { padding: 10px 15px; border-radius: 20px; border: 1px solid #e2e8f0; width: 40%; outline: none; font-size: 14px; }
        .vocab-card { background: white; padding: 20px; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); margin-bottom: 20px; border: 1px solid #f1f5f9; }
        .vocab-card h2 { color: var(--primary); margin-top: 0; font-size: 22px; border-bottom: 2px solid #eff6ff; padding-bottom: 8px; }
        .vocab-card h3 { color: #334155; font-size: 16px; margin-bottom: 8px; }
        .vocab-card p, .vocab-card li { color: #475569; line-height: 1.6; font-size: 15px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 13px; }
        th, td { border: 1px solid #e2e8f0; padding: 10px; text-align: left; }
        th { background: #f8fafc; color: #1e293b; }
    </style>
</head>
<body>

<div class="header">
    <div class="title-area">
        <h1>MEDVOCAB PRO</h1>
        <small style="color: #64748b;">Clinical Database</small>
    </div>
    <input type="text" id="searchBar" placeholder="ძებნა..." onkeyup="searchTerms()">
</div>

<div id="vocab-container">იტვირთება მონაცემები...</div>

<script>
    const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/tamjaniashvili/My-first-medical-project-/main/terms/New%20words.md';

    async function fetchVocab() {
        try {
            const response = await fetch(GITHUB_RAW_URL);
            const markdown = await response.text();
            const terms = markdown.split('---').filter(t => t.trim().length > 10);
            const container = document.getElementById('vocab-container');
            container.innerHTML = '';

            terms.forEach(termContent => {
                const card = document.createElement('div');
                card.className = 'vocab-card';
                card.innerHTML = marked.parse(termContent);
                container.appendChild(card);
            });
        } catch (e) {
            document.getElementById('vocab-container').innerHTML = "<p style='color:red;'>შეცდომა ბაზის ჩატვირთვისას. შეამოწმეთ ინტერნეტი.</p>";
        }
    }

    function searchTerms() {
        let input = document.getElementById('searchBar').value.toLowerCase();
        let cards = document.getElementsByClassName('vocab-card');
        for (let card of cards) {
            card.style.display = card.innerText.toLowerCase().includes(input) ? "" : "none";
        }
    }

    fetchVocab();
</script>
</body>
</html>
