import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Cold Email Agency for B2B — Falqen | Done-For-You Outreach",
  description:
    "Falqen is a done-for-you cold email agency for B2B companies. We build the infrastructure, write the copy, send the emails, and book qualified meetings directly to your calendar. No contracts. Results in 14 days.",
  keywords: [
    "cold email agency",
    "cold email service",
    "cold email outreach agency",
    "b2b cold email agency",
    "done for you cold email",
    "cold email agency pricing",
    "outsource cold email",
    "cold email agency usa",
  ],
  openGraph: {
    title: "Cold Email Agency for B2B — Falqen",
    description: "We send the emails. You close the deals. Done-for-you cold email outreach for B2B companies.",
    url: "https://falqen.com/cold-email-agency",
  },
  alternates: { canonical: "https://falqen.com/cold-email-agency" },
};

const faqs = [
  { q: "How much does a cold email agency cost?", a: "Most cold email agencies charge $2,000–$8,000/month depending on volume and level of management. Falqen's pricing is based on the number of emails sent and meetings booked. Book a call to get a custom quote for your business." },
  { q: "How long until I see results from cold email?", a: "Setup takes 7–10 days (infrastructure, domains, copy). After launch, most clients see their first replies within 48 hours and their first booked meeting within the first week. Month 2 is typically when volume picks up as follow-up sequences kick in." },
  { q: "Will cold email damage my domain reputation?", a: "Not with a proper agency. We use completely separate sending domains — your main domain is never touched. We configure SPF, DKIM, and DMARC on every sending domain and warm inboxes before sending a single email." },
  { q: "What industries does cold email work for?", a: "Cold email works best for B2B companies with deal sizes over $1,000. SaaS, professional services, logistics, manufacturing, healthcare IT, fintech, and agency services are our top-performing verticals. If you sell to other businesses, cold email can work for you." },
  { q: "What's the difference between a cold email agency and buying a lead list?", a: "A lead list gives you names and emails. A cold email agency gives you booked meetings. We handle lead sourcing, verification, email infrastructure, copywriting, sending, follow-ups, and reply management. You just show up to the calls." },
  { q: "How do you find the leads to email?", a: "We use premium B2B databases (Apollo, Clay, ZoomInfo) to build lists based on your ideal customer profile — job title, company size, industry, tech stack, location, and more. Every email address is verified before sending." },
];

export default function ColdEmailAgency() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Done-For-You Cold Email
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            Cold Email Agency<br />
            <span className="text-primary">That Books Meetings.</span><br />
            Not Just Sends Emails.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Most cold email agencies send bulk emails and call it a day. We build full outbound systems — verified leads, warmed domains, personalized copy, and reply management — until qualified meetings land on your calendar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
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
              { value: "500K+", label: "Emails sent per month" },
              { value: "4–9%", label: "Average reply rate" },
              { value: "7–14 days", label: "To first reply" },
              { value: "0", label: "Client domains blacklisted" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Everything Is Done For You</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
            Most companies try to do this in-house and fail. Here's why: it's not just "send emails." It's a full system.
          </p>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { step: "01", title: "ICP & Lead Research", desc: "We define your ideal customer profile down to job title, company size, industry, tech stack, and buying signals. Then we build verified lists of decision-makers who match exactly." },
              { step: "02", title: "Email Infrastructure", desc: "We purchase sending domains, configure SPF/DKIM/DMARC, set up dedicated inboxes, and warm them for 10–14 days. Your main domain is never touched." },
              { step: "03", title: "Copy & Sequences", desc: "We write personalized first-line hooks, compelling email bodies, and 3–5 follow-up variants. Every email is A/B tested from day one." },
              { step: "04", title: "Sending & Monitoring", desc: "We manage daily sending volumes, inbox health, deliverability scores, and spam triggers. We scale up or pull back based on real data." },
              { step: "05", title: "Reply Management", desc: "We monitor every reply. Interested prospects get nurtured. Negative replies get removed. Out-of-office replies get auto-followed-up." },
              { step: "06", title: "Meeting Booking", desc: "Qualified prospects get booked directly onto your calendar. You receive a briefing on each lead before the call. You just show up and close." },
            ].map((item) => (
              <div key={item.step} className="bg-card border border-border/50 rounded-2xl p-6 flex gap-4">
                <div className="text-3xl font-black text-primary/20 leading-none flex-shrink-0 mt-1">{item.step}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why cold email */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Cold Email Outperforms Every Other B2B Channel</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
            We've run campaigns across every major outbound channel. Cold email wins on cost, control, and scalability.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "You own the list", desc: "Unlike Google or Meta, nobody can take away your contact list. Every email you collect is yours forever — and can become a newsletter, a retargeting list, or a sales asset." },
              { title: "$3–15 cost per lead", desc: "Google Ads average $50–300 per B2B lead. Meta Ads: $30–200. Cold email with a good agency: $3–15. The math is simple — cold email delivers 10x the ROI at a fraction of the cost." },
              { title: "Scales without limits", desc: "Want to reach 500 people a month? 50,000? We add more domains and inboxes. There's no budget cap. You can scale outreach as fast as your sales team can handle meetings." },
              { title: "Precise targeting", desc: "We target by exact job title, company size, revenue, industry, tech stack, and more. You're not guessing with keywords or interests — you're reaching specific people at specific companies." },
              { title: "No algorithm risk", desc: "Google and Meta change their algorithms constantly. One update can destroy your pipeline overnight. Cold email is immune — it's direct communication between two people." },
              { title: "Results in days, not months", desc: "SEO takes 6–12 months. Paid ads need weeks of optimization. Cold email campaigns go live in 14 days and produce replies in 48 hours. It's the fastest way to test a new market or offer." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border/50 rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">What Our Clients See</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { quote: "First booked call came in on day 4 of the campaign. Efficient execution.", name: "Carlos Mendez", title: "Founder, SolarFlow Energy" },
              { quote: "We closed two major contracts in the first month purely from their email campaigns.", name: "Elias Thorne", title: "CEO, Verta Logistics" },
              { quote: "15x ROI on our monthly spend. It's essentially a money-printing machine.", name: "Emily Clarke", title: "CRO, HrTech Solutions" },
            ].map((t) => (
              <div key={t.name} className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-primary text-sm">★</span>)}</div>
                <p className="text-foreground italic text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div className="font-bold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-primary">{t.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">Cold Email Agency FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Start Getting Meetings?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us about your business. We&apos;ll tell you exactly how many meetings we can generate — and at what cost.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
