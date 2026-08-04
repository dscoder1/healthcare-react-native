import OpenAI from "openai";

import { ENV } from "../config/env";

const client = new OpenAI({
  apiKey: ENV.GROK_API_KEY,

  baseURL: ENV.GROK_BASE_URL,
});

export async function askGrok(message: string) {
  const response = await client.chat.completions.create({
    model: "grok-3",

    messages: [
      {
        role: "user",

        content: message,
      },
    ],
  });

  return response.choices[0].message.content || "";
}
