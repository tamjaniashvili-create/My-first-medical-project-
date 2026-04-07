import { GoogleGenerativeAI } from "@google/generative-ai";

// Vercel-ის გარემოდან იღებს გასაღებს
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'მხოლოდ POST მოთხოვნა' });
    }

    const { word, category } = req.body;

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const prompt = `You are a medical English expert. For the term "${word}" (category: ${category || 'General'}), 
        provide a valid JSON object with: 
        "ipa" (phonetic), "definition" (clinical), "example" (medical sentence), "georgian" (translation). 
        Return ONLY JSON.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text().replace(/```json|```/g, "").trim();
        
        res.status(200).json(JSON.parse(text));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "AI ვერ დაუკავშირდა სერვერს. შეამოწმეთ API Key Vercel-ში." });
    }
}
