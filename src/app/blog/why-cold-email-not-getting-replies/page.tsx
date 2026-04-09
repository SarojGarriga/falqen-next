import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Why Your Cold Email Is Not Getting Replies (10 Real Reasons + Fixes)",
  description:
    "Your cold email open rates are low or your replies have dried up. Here are the 10 most common reasons cold email campaigns fail — and exactly what to fix for each one.",
  keywords: [
    "why cold email not getting replies",
    "cold email not working",
    "cold email low reply rate",
    "cold email going to spam",
    "improve cold email reply rate",
    "cold email optimization",
    "cold email deliverability issues",
    "cold email tips 2026",
    "fix cold email campaign",
  ],
  openGraph: {
    title: "Why Your Cold Email Is Not Getting Replies (And How to Fix It)",
    description: "The 10 most common reasons cold email campaigns fail — and the exact fixes for each one.",
    url: "https://falqen.com/blog/why-cold-email-not-getting-replies",
  },
  alternates: { canonical: "https://falqen.com/blog/why-cold-email-not-getting-replies" },
};

const faqs = [
  { q: "How do I know if my cold emails are going to spam?", a: "Check your open rates. If you're sending to a quality list but seeing under 15% open rates, spam is likely the issue. You can also use tools like Mail-Tester or GlockApps to test your inbox placement before sending. Check your sending domain's reputation on Google Postmaster Tools and MXToolbox." },
  { q: "What's a normal cold email reply rate?", a: "For well-targeted, personalized cold email campaigns, 2–5% positive reply rate is strong. 1–2% is acceptable. Below 1% indicates a problem with targeting, copy, or deliverability. If you're above 5%, you've found an excellent ICP and offer combination." },
  { q: "How many follow-ups should I send?", a: "3–5 follow-ups is standard. Many campaigns see 60–70% of replies come from follow-ups 2–5, not the original email. Each follow-up should add a new angle or value — not just 'bumping this up' or 'just checking in'. Stop after 5 touches and move to a long-term nurture." },
  { q: "Should I use a different domain for cold email?", a: "Yes — always. Never send cold email from your main domain (the one your company uses for regular business). A blacklisted sending domain can make your regular emails go to spam too. Use a separate domain registered 4–6 weeks before you start sending, and warm it up gradually." },
];

export default function WhyColdEmailNotGettingReplies() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="article" title="Why Your Cold Email Is Not Getting Replies (10 Real Reasons + Fixes)" description="The 10 most common reasons cold email campaigns fail — and the exact fixes for each one. Covers deliverability, copy, targeting, and sequence issues." url="https://falqen.com/blog/why-cold-email-not-getting-replies" datePublished="2026-04-09" />
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span>Why Cold Email Is Not Getting Replies</span>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Troubleshooting</span>
              <span className="text-xs text-muted-foreground">April 9, 2026 · 8 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Why Your Cold Email Is Not Getting Replies (10 Real Reasons + Fixes)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You&apos;re sending. Nobody&apos;s replying. Before you give up on cold email entirely, read this. There are exactly 10 reasons cold email campaigns fail — and every single one is fixable.
            </p>
          </div>

          <div className="space-y-10 text-foreground">

            <section>
              <p className="text-muted-foreground leading-relaxed bg-secondary/40 rounded-xl p-5">
                <strong className="text-foreground">Quick diagnostic:</strong> If you&apos;re seeing under 20% open rates → deliverability problem. If open rates are fine but no replies → copy or targeting problem. If you&apos;re getting opens and even some replies but no meetings → offer or ICP problem. Use this to jump to the right section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">The 10 Reasons Your Cold Email Isn&apos;t Working</h2>

              {[
                {
                  num: "01",
                  category: "Deliverability",
                  title: "Your emails are going to spam",
                  symptoms: "Open rate under 20% despite a valid list",
                  cause: "Missing SPF/DKIM/DMARC records, no inbox warm-up, sending too many emails too fast from a new domain, high spam complaint rate from previous sends.",
                  fix: "Check your authentication records on MXToolbox. Set up Google Postmaster Tools to monitor your domain reputation. Warm up new inboxes over 4–6 weeks before ramping volume. Use a dedicated sending domain — never your main one.",
                },
                {
                  num: "02",
                  category: "Deliverability",
                  title: "You're sending from your main domain",
                  symptoms: "Meetings from cold email dropping, then your regular emails start getting filtered",
                  cause: "Sending cold email from your main domain (yourcompany.com) puts the domain's reputation at risk. One spam campaign can blacklist your main domain, affecting ALL email from your business.",
                  fix: "Register separate sending domains (e.g., get-falqen.com, tryfalqen.com, falqenoutreach.com). Point DNS records on those domains — never touch your main domain for cold outreach.",
                },
                {
                  num: "03",
                  category: "Deliverability",
                  title: "Your sending volume is too aggressive",
                  symptoms: "Good open rates for the first 500 emails, then a cliff drop",
                  cause: "Sending 200+ emails per day from a single inbox, or ramping too fast from a new inbox. Gmail and Outlook have sending limits and throttle suspicious volume spikes.",
                  fix: "Max 40–50 emails per inbox per day. Spread volume across multiple warmed inboxes. Ramp new inboxes over 4–6 weeks starting at 5–10 emails/day and increasing 5/day each week.",
                },
                {
                  num: "04",
                  category: "Targeting",
                  title: "Your ICP is too broad",
                  symptoms: "Sends are going out, people open, but no one replies — message doesn't resonate",
                  cause: "'B2B companies, 10–500 employees' is not an ICP. It's a demographic. Without industry, company stage, buyer role specificity, your email reads as generic broadcast.",
                  fix: "Narrow your ICP to 3–5 defining criteria. E.g.: 'VP of Sales at B2B SaaS companies, 20–100 employees, Series A funded, US-based, using Salesforce'. Run smaller, tighter lists before scaling.",
                },
                {
                  num: "05",
                  category: "Targeting",
                  title: "You're emailing the wrong person",
                  symptoms: "People reply 'not the right contact' or forward it internally without a response",
                  cause: "Emailing a manager when the budget decision is at the VP level, or emailing the CEO when the real buyer is a department head.",
                  fix: "Map your sales cycle to the right buyer persona. For sub-50 employee companies, CEO is often the right contact. For 50–500, go for the VP of the relevant department. For enterprise, start with a director and work up.",
                },
                {
                  num: "06",
                  category: "Copy",
                  title: "Your subject line is getting filtered or ignored",
                  symptoms: "Low open rates despite good deliverability",
                  cause: "Subject lines like 'Quick question', 'Following up', 'Touching base', 'Partnership opportunity', or anything with excessive capitalization or exclamation points are trained-spam signals.",
                  fix: "Write subject lines that look like internal emails: short, specific, no hype. 'outbound pipeline at [Company]', 'question about your SDR team', '[mutual connection] suggested I reach out'. Test 3–4 variants.",
                },
                {
                  num: "07",
                  category: "Copy",
                  title: "Your email is about you, not them",
                  symptoms: "Opens but no replies — even when the list is right",
                  cause: "Most cold emails start with: 'My name is X, I work at Y, we do Z, I'd love to connect.' Nobody cares. The buyer hasn't been given a reason to care yet.",
                  fix: "Start with their world: a specific observation about their company, a pain point they likely have, or a relevant result someone like them achieved. Earn their interest before introducing yourself.",
                },
                {
                  num: "08",
                  category: "Copy",
                  title: "Your value prop is vague",
                  symptoms: "People respond 'can you tell me more?' but rarely convert to meetings",
                  cause: "'We help companies grow faster' or 'We help sales teams hit quota' is not specific enough for a skeptical buyer to take action on.",
                  fix: "Include a specific, credible result: '12 qualified meetings in the first 30 days for a [ICP-similar company]'. Specificity builds trust. Vagueness reads as marketing.",
                },
                {
                  num: "09",
                  category: "Sequence",
                  title: "You're stopping after 1–2 touches",
                  symptoms: "Your first email reply rate is low and you're not following up",
                  cause: "60–70% of replies in a well-run cold email campaign come from follow-ups 2–5, not the first email. Stopping after one send means you're leaving most of your pipeline on the table.",
                  fix: "Build a 5-touch sequence over 3–4 weeks. Each follow-up should take a different angle — not just 'bumping this up'. Try a case study on follow-up 2, a different pain point on 3, a breakup email on 5.",
                },
                {
                  num: "10",
                  category: "Offer",
                  title: "Your offer or CTA is too big",
                  symptoms: "People open, some even reply, but nobody books a call",
                  cause: "Asking for a 45-minute demo or 'a meeting to discuss your needs' in a first cold email is a big commitment from a stranger. Most buyers say no reflexively.",
                  fix: "Start with a smaller ask: '15-min call to see if it makes sense', '3 questions to see if we'd be a fit', or 'Would it be worth sending over a quick overview first?' Reduce the commitment, increase the yes rate.",
                },
              ].map((item) => (
                <div key={item.num} className="bg-card border border-border/50 rounded-xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl font-bold text-primary/20 leading-none flex-shrink-0">{item.num}</span>
                    <div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full mb-2 inline-block ${item.category === "Deliverability" ? "bg-destructive/10 text-destructive" : item.category === "Targeting" ? "bg-warning/10 text-warning" : item.category === "Copy" ? "bg-primary/10 text-primary" : item.category === "Sequence" ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`}>
                        {item.category}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  <div className="space-y-3 ml-12">
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Symptoms</p>
                      <p className="text-sm text-muted-foreground italic">{item.symptoms}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1">Root Cause</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.cause}</p>
                    </div>
                    <div className="bg-success/5 border border-success/20 rounded-lg p-3">
                      <p className="text-xs font-bold text-success uppercase tracking-wide mb-1">Fix</p>
                      <p className="text-sm text-foreground leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Diagnostic Checklist</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Run through this before making any changes to your campaign:
              </p>
              <div className="bg-secondary/40 rounded-xl p-6 space-y-3">
                {[
                  ["Deliverability", [
                    "SPF, DKIM, DMARC configured on sending domain",
                    "Sending from dedicated domain (not main domain)",
                    "Inbox warmed up for 4+ weeks",
                    "Under 50 emails/inbox/day",
                    "Spam complaint rate below 0.1%",
                    "Open rate above 30%",
                  ]],
                  ["Targeting", [
                    "ICP has 3–5 specific criteria (not just job title + company size)",
                    "Emailing the actual decision maker for this purchase",
                    "List verified for email validity",
                    "No purchased or scraped mass lists",
                  ]],
                  ["Copy", [
                    "Subject line looks like an internal message",
                    "First sentence is about them, not you",
                    "Specific result included (with numbers)",
                    "CTA is a small ask (15-min call, not 45-min demo)",
                  ]],
                  ["Sequence", [
                    "5-touch sequence over 3–4 weeks",
                    "Each follow-up adds a new angle",
                    "No 'just checking in' follow-ups",
                  ]],
                ].map(([category, items]) => (
                  <div key={category as string}>
                    <p className="text-xs font-bold text-foreground uppercase tracking-wide mb-2">{category as string}</p>
                    <ul className="space-y-1 ml-2">
                      {(items as string[]).map(item => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-success mt-0.5">☐</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">When to Fix It Yourself vs. Hire an Agency</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-card border border-border/50 rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-3">Fix it yourself if:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "You have a technical team that can handle infrastructure",
                      "You have a strong writer who understands B2B sales",
                      "You have 10+ hours/week to manage sequences and reporting",
                      "You're happy to spend 2–3 months learning what works",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2"><span className="mt-0.5">→</span> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-primary/20 rounded-xl p-5 ring-2 ring-primary/10">
                  <h3 className="font-bold text-primary mb-3">Hire an agency if:</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {[
                      "You want to be live and generating meetings in 2 weeks",
                      "You don't have time to manage infrastructure and sequences",
                      "You've tried and results aren't improving",
                      "Your deal size makes the math work ($5K+ ACV)",
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2"><span className="text-success mt-0.5">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <div key={f.q} className="bg-card border border-border/50 rounded-xl p-5">
                    <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Let Us Fix It For You</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">We&apos;ll audit your current campaign (or build a new one from scratch) and get you replies and meetings within 2 weeks. No long-term contracts.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
