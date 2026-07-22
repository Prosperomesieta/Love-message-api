const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: "Write a short, sweet, 3-sentence morning love message for a partner. Output ONLY the message text without quotes or intros.",
            },
          ],
        },
      ],
    }),
  }
);
