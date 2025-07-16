import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";
import getPrompt from "./prompt.js";

const app = express();
const PORT = 3001;

dotenv.config();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
});

app.use(express.json());
app.use(cors());

async function getDescription(prompt) {
  const result = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [{ role: "user", content: prompt }],
  });
  return result.choices[0].message.content;
}

app.post("/description", async (req, res) => {
  const { details, languages, type, platform } = req.body;
  const prompt = getPrompt(details, languages, type, platform);
  const response = await getDescription(prompt);
  const description = JSON.parse(response);
  console.log(response);
  return res.json({
    description,
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`);
});
