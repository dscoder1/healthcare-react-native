import { GoogleGenerativeAI } from "@google/generative-ai";

import { ENV } from "../config/env";

const genAI = new GoogleGenerativeAI(ENV.GEMINI_API_KEY);

export async function askGemini(message: string) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const result = await model.generateContent(message);

  return result.response.text();
}
