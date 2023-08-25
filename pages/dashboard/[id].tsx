import { useRouter } from "next/router";
import OpenAI from "openai";
import { useState, useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  const [gpt3Response, setGpt3Response] = useState('');

  // Function to make API request to GPT-3
  const fetchGpt3Response = async () => {
    try {
      const response: any = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            "role": "system",
            "content": "You are a helpful assistant."
          },
          {
            "role": "user",
            "content": `Show me some quotes about ${id} in headings,subheadings`
          }
        ],
        temperature: 1,
        max_tokens: 256,
      });
      return response.choices[0].message.content;
    } catch (error) {
      console.error(error);
    }
  };

  // Call the GPT-3 function and handle the response
  useEffect(() => {
    fetchGpt3Response().then(response => {
      setGpt3Response(response);
    });
  }, [id]);

  return (
    <div className="container">
        <h1>You are reading article with id: {id}</h1>
        <p>{gpt3Response}</p>
    </div>
  );
}