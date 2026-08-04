import { ENV } from "../config/env";

import { askGemini } from "../services/gemini";

import { askGrok } from "../services/grok";

export async function askAI(message: string) {
  if (ENV.AI_PROVIDER === "grok") {
    return askGrok(message);
  }

  return askGemini(message);
}
