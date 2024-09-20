import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { sendMail } from "./send-mail";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.post("/api/v1/send-email", sendMail);
app.get("/", (req: Request, res: Response) => {
  res.send("welcome");
});

export default app;
