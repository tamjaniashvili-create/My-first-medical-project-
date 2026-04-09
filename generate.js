export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
    
    const { term } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Return JSON for medical term "${term}": {"georgian":"...","definition":"...","ipa":"...","example":"..."}. Use Georgian for translation, English for others.` }] }]
            })
        });
        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        const json = JSON.parse(text.match(/\{[\s\S]*\}/)[0]);
        res.status(200).json(json);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
