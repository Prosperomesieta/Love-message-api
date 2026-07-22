export default async function handler(req, res) {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  try {
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
                  text: "Write a short, sweet, 2-sentence morning love message for a partner. Output ONLY the message text without quotes or intros.",
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    const loveMessage = data.candidates[0].content.parts[0].text.trim();

    // Sends clean text straight back to Apple Shortcuts
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(loveMessage);
  } catch (error) {
    // Fallback message if anything fails
    res.status(200).send("Good morning my love! Thinking of you today ❤️");
  }
}
