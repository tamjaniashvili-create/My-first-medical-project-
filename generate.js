export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { word } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Provide JSON for "${word}". Format: {"georgian": "თარგმანი", "definition": "ინგლისური განმარტება", "ipa": "ფონეტიკა", "example": "მაგალითი"}. Return ONLY raw JSON.` }] }]
            })
        });

        const data = await response.json();
        let text = data.candidates[0].content.parts[0].text;
        
        // აქ ხდება "სუფთა" JSON-ის ამოღება
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("AI-მ არ დააბრუნა JSON");
        
        res.status(200).json(JSON.parse(jsonMatch[0]));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
