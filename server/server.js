const express = require('express');
const OpenAI = require('openai');
const app = express();
const cors = require('cors');

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY',  
});

app.use(express.json());
app.use(cors());

app.post('/chat', async (req, res) => {
  try {
    const input = `Provide steps to recycle or even best out of waste for ${req.body.prompt} in points, also add links to help them.`;
    const response = await main(input);
    res.json({ output: response });
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/chats', async (req, res) => {
  try {
    const input = `Provide latest details and articles or blog site details on ${req.body.prompt} which tells how it affects the nature. Instructions: Include relevant links in the response.`;
    const response = await main(input);
    res.json({ output: response });
    console.log(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

async function main(input) {
  const messages = [{ role: "user", content: input }];
  const completions = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
  });
  return completions.choices[0].message.content;
}

const server = app.listen(9005, () => {
  console.log('Express server is listening on port 9005');
});
