import express from "express";

import cors from "cors";

import helmet from "helmet";

import morgan from "morgan";

import compression from "compression";

import { ENV } from "./config/env";

import chatRoute from "./routes/chat";

const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "AI Chat Backend Running",
  });
});

app.use("/api", chatRoute);

app.listen(ENV.PORT, () => {
  console.log(`Server running on ${ENV.PORT}`);
});
