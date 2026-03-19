import dotenv from "dotenv"
dotenv.config(); 

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});

export async function resume(github_data) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
You are a senior technical recruiter reviewing a GitHub profile for a Software Engineering role.

Given the following GitHub data:
${github_data}

Generate a concise and professional summary.

STRICT OUTPUT FORMAT:

---START---
👤 Profile Summary:
<2-3 lines describing the developer's overall profile>

💻 Technical Strengths:
- <Language/Skill 1>
- <Language/Skill 2>
- <Domain expertise if any>

🚀 Notable Work:
- <Project type or highlight>
- <Another highlight>

📈 Activity Insight:
<1-2 lines about consistency, contribution, or engagement>

⚠️ Improvement Areas:
- <Actionable suggestion 1>
- <Actionable suggestion 2>
---END---

RULES:
- Keep it concise and recruiter-friendly
- No fluff or generic statements
- No markdown formatting like ** or ###
- No extra text outside START and END
`
  });
  console.log(response.text);
}

export async function roast(github_data) {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `
You are a witty stand-up comedian who roasts developers based on their GitHub profiles.

Given this GitHub data:
${github_data}

Generate exactly 5 short, funny roasts using Bollywood-style humor, sarcasm, and analogies.

STRICT OUTPUT FORMAT:

---START---
🔥 Roast 1: <one-liner>
🔥 Roast 2: <one-liner>
🔥 Roast 3: <one-liner>
🔥 Roast 4: <one-liner>
🔥 Roast 5: <one-liner>
---END---

RULES:
- Each roast must be 1–2 lines max
- Use Bollywood references, sarcasm, or relatable dev humor
- No abusive or offensive language
- No extra explanations
- No text outside START and END
`
  });
  console.log(response.text);
}