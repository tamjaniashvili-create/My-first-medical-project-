export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'მხოლოდ POST მოთხოვნა' });
    }

    // ვკითხულობთ მონაცემებს
    const { word, category } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a medical English expert. For the term "${word}" (category: ${category || 'General'}), provide a valid JSON object with: "ipa" (phonetic), "definition" (clinical), "example" (medical sentence), "georgian" (translation). Return ONLY JSON.`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0]) {
            throw new Error('AI პასუხი ვერ მიიღეს');
        }

        let aiText = data.candidates[0].content.parts[0].text.replace(/```json|```/g, "").trim();
        res.status(200).json(JSON.parse(aiText));
        
    } catch (error) {
        res.status(500).json({ error: "კავშირის შეცდომა: " + error.message });
    }
}
