import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Falqen's support assistant on falqen.com. Falqen is a B2B appointment setting agency that books qualified sales meetings through cold email and LinkedIn outreach.

About Falqen:
- Service: Done-for-you cold email + LinkedIn outreach for B2B companies
- Results: 8–20 qualified meetings per month on average
- Timeline: Live and sending within 7–14 days
- Pricing: Starter ($1,500/mo), Growth ($3,500/mo), Scale (custom)
- No long-term contracts — month to month
- Best for: B2B companies with $3,000+ average deal size, any industry
- No cold calling — email and LinkedIn only
- Website: falqen.com

Your behavior:
- Be friendly, direct, and concise — max 3 sentences per reply
- Answer questions about Falqen's services, pricing, and process clearly
- If someone asks how to get started, tell them to book a free strategy call on the site
- If someone seems ready, push them toward booking: "Want to book a free 15-min call to see if we're a fit?"
- Never invent numbers or facts not listed above
- If you don't know something, say: "Great question — our team will cover that on your strategy call"
- Don't use bullet points in chat — keep it conversational`;

export async function POST(req: NextRequest) {
  try {
    const { messages, visitorName } = await req.json();

    const systemContent = visitorName
      ? `${SYSTEM_PROMPT}\n\nThe visitor's name is ${visitorName}. Use their name occasionally to keep it personal.`
      : SYSTEM_PROMPT;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://falqen.com",
        "X-Title": "Falqen Support Chat",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-5-haiku",
        messages: [{ role: "system", content: systemContent }, ...messages],
        max_tokens: 250,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "AI unavailable" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
