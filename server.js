const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

app.post('/chat', async (req, res) => {
  const message = req.body.message;

  if (message !== "") {
    const prompt_text_advisor = 'Act like a chatbot on a website that helps the customer buy something from that specific website. Dont mention yourself. Answer as short as possible. Dont ever provide information you dont know about, instead tell the customer that you dont know and offer alternatives. Act kind and try (if gently possible) to convert the customer into a buying one. This is his question: ';
    const prompt_text = message;
    const prompt_text2 = '. Please start and end your answer with: #43234. Keep your answers as short as possible. Here is the information you should work with:';
    const prompt_text_website = database;

    const url = 'https://api.openai.com/v1/chat/completions';
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        { role: 'system', content: 'You can start the conversation with a system message if needed.' },
        { role: 'user', content: prompt_text_advisor + prompt_text + prompt_text2 + prompt_text_website }
      ],
      temperature: 0,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    const reply = responseData.choices[0].message.content;

    res.json({ reply });
  } else {
    res.status(400).json({ error: 'Invalid message' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
