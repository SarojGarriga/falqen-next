import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "LinkedIn Outreach Agency for B2B — Falqen | Managed LinkedIn Prospecting",
  description:
    "Falqen manages your LinkedIn outreach end-to-end. We optimize your profile, build targeted prospect lists, send personalized connection requests and messages, and book qualified meetings directly on your calendar.",
  keywords: [
    "linkedin outreach agency",
    "linkedin prospecting service",
    "b2b linkedin outreach",
    "managed linkedin outreach",
    "linkedin lead generation agency",
    "linkedin outreach service",
    "outsource linkedin prospecting",
    "linkedin appointment setting",
  ],
  openGraph: {
    title: "LinkedIn Outreach Agency for B2B — Falqen",
    description: "Managed LinkedIn prospecting that books qualified meetings with decision-makers.",
    url: "https://falqen.com/linkedin-outreach-agency",
  },
  alternates: { canonical: "https://falqen.com/linkedin-outreach-agency" },
};

const faqs = [
  { q: "Is LinkedIn outreach worth it for B2B?", a: "Yes — LinkedIn has 950M+ professionals and is the only platform where you can filter prospects by exact job title, company size, industry, and seniority level. Connection acceptance rates average 20–40% and reply rates are 2–5x higher than cold email when done correctly." },
  { q: "Will this get my LinkedIn account banned?", a: "Not with proper management. We operate within LinkedIn's daily limits, use connection sequences that look natural, and avoid the automation patterns that trigger bans. We've never had a client account banned using our approach." },
  { q: "How many connection requests can you send per week?", a: "LinkedIn limits accounts to roughly 100–150 connection requests per week for most accounts. LinkedIn Premium and Sales Navigator accounts have higher limits. We maximize within those limits and supplement with email to hit the same prospects on both channels." },
  { q: "Do I need LinkedIn Sales Navigator?", a: "Not required, but recommended. Sales Navigator unlocks advanced filtering (company headcount, job changes, intent signals) and higher outreach limits. We can run campaigns on a standard LinkedIn account, but Sales Navigator significantly improves targeting precision." },
  { q: "How long does LinkedIn outreach take to show results?", a: "LinkedIn is slower than cold email. Connection requests take 1–7 days to be accepted, then message sequences run over 2–3 weeks. Most clients see their first booked meetings in week 2–3. Volume builds significantly in month 2 as connections accumulate." },
  { q: "Can you combine LinkedIn with cold email?", a: "Yes — this is our recommended approach. When a prospect sees your name on both LinkedIn and in their inbox, response rates more than double. We coordinate both channels so sequences are synchronized and prospects don't receive duplicate messages." },
];

export default function LinkedInOutreachAgency() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Managed LinkedIn Outreach
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            LinkedIn Outreach Agency<br />
            <span className="text-primary">That Reaches Decision-Makers.</span><br />
            Not Just Connections.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We manage your entire LinkedIn outreach — profile optimization, targeted prospect lists, personalized connection requests, follow-up messages, and meeting booking. Your profile becomes a pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Get a Free Strategy Call →
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 border border-primary/20 text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/5 transition-colors">
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20–40%", label: "Connection acceptance rate" },
              { value: "2x", label: "Reply rate vs cold email alone" },
              { value: "950M+", label: "LinkedIn professionals" },
              { value: "0", label: "Accounts banned" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">What&apos;s Included</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
            We handle every part of the process. You focus on closing.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Profile Optimization", desc: "We rewrite your headline, about section, and featured section to position you as an authority in your space. First impressions matter — a weak profile kills reply rates." },
              { title: "Targeted Prospect Lists", desc: "We build lists by exact job title, company size, industry, location, and seniority using LinkedIn Sales Navigator and additional enrichment tools." },
              { title: "Personalized Connection Requests", desc: "Every connection request includes a short personalized note referencing something specific about the prospect. Generic 'I'd like to connect' requests get ignored." },
              { title: "Multi-Step Message Sequences", desc: "Once connected, we send a 3–4 message sequence over 2–3 weeks. Each message adds value and builds toward a meeting — no immediate pitches." },
              { title: "Reply Management", desc: "We monitor all replies daily. Interested prospects get a tailored response and are pushed toward a meeting. Negative replies are removed from sequences." },
              { title: "Combined Email + LinkedIn", desc: "Our recommended setup. We run LinkedIn and cold email simultaneously to the same prospect list — doubling visibility and significantly increasing response rates." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-success">✓</span> {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">Who Gets the Best Results</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Best fit ✓", items: ["B2B companies with deal sizes over $2,000", "Targeting VP, Director, C-Suite decision-makers", "SaaS, consulting, professional services, agencies", "Companies with a clear value proposition and case studies", "Teams that can handle 10–30 inbound conversations/month"] },
              { title: "Not a good fit ✗", items: ["B2C companies or consumer products", "Deal sizes under $500", "No clear ICP or target market defined", "Expecting 100+ meetings per month from LinkedIn alone", "Businesses that need immediate same-day results"] },
            ].map((col) => (
              <div key={col.title} className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className={col.title.includes("✓") ? "text-success mt-0.5" : "text-destructive mt-0.5"}>
                        {col.title.includes("✓") ? "✓" : "✗"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">LinkedIn Outreach FAQ</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card border border-border/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Turn Your LinkedIn Into a Pipeline</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">We&apos;ll optimize your profile, build your prospect list, and start booking meetings — all within 14 days.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
