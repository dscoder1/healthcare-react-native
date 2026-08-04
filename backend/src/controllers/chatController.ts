import { Request, Response } from "express";

import { askAI } from "../utils/aiProvider";

export async function chatController(
  req: Request,

  res: Response,
) {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message required",
      });
    }

    const reply = await askAI(message);

    res.json({
      reply,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "AI service failed",
    });
  }
}
