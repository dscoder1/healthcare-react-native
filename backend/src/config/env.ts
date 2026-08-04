import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT || 5000,

  AI_PROVIDER: process.env.AI_PROVIDER || "gemini",

  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",

  GROK_API_KEY: process.env.GROK_API_KEY || "",

  GROK_BASE_URL: process.env.GROK_BASE_URL || "",
};
