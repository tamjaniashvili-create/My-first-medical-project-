export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    const { word } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Provide JSON for medical term "${word}". Format: {"georgian": "თარგმანი", "definition": "ინგლისური განმარტება", "ipa": "ფონეტიკა", "example": "მაგალითი"}. Return ONLY the raw JSON object.` }] }]
            })
        });

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        
        // ეს Regex პოულობს მხოლოდ JSON-ს ტექსტში
        const jsonMatch = text.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("AI-მ არასწორი ფორმატი დააბრუნა");
        
        res.status(200).json(JSON.parse(jsonMatch[0]));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
