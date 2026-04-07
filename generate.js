import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { word } = JSON.parse(req.body);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const result = await model.generateContent(`Provide JSON: {"georgian": "თარგმანი", "definition": "განმარტება"} for: ${word}`);
    const text = result.response.text().replace(/```json|```/g, "").trim();
    
    return res.status(200).json(JSON.parse(text));
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
