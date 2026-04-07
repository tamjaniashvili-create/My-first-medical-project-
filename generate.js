export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'მხოლოდ POST მოთხოვნა' });
    }

    const { word } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Provide JSON for medical term "${word}". 
                        Format: {"georgian": "თარგმანი", "definition": "ინგლისური განმარტება", "ipa": "ფონეტიკა", "example": "მაგალითი"}.
                        Return ONLY the raw JSON object, no markdown, no code blocks.`
                    }]
                }]
            })
        });

        const data = await response.json();
        let aiText = data.candidates[0].content.parts[0].text.trim();

        // თუ AI-მ მაინც გამოაყოლა ზედმეტი სიმბოლოები (მაგ: ```json), მათ აქ ვასუფთავებთ:
        const cleanJsonText = aiText.replace(/```json/g, "").replace(/```/g, "").trim();
        
        const result = JSON.parse(cleanJsonText);
        res.status(200).json(result);
        
    } catch (error) {
        console.error("Parsing Error:", error);
        res.status(500).json({ error: "მონაცემების დამუშავების შეცდომა. სცადეთ თავიდან." });
    }
}
