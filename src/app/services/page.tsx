import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "B2B Appointment Setting Services | Cold Email & LinkedIn Outreach — Falqen",
  description:
    "Falqen offers done-for-you cold email outreach and LinkedIn prospecting for B2B companies. We build your pipeline, book qualified meetings, and deliver ready-to-close leads directly to your calendar.",
  keywords: [
    "B2B appointment setting service",
    "cold email agency",
    "LinkedIn outreach service",
    "B2B lead generation agency",
    "outbound sales agency",
    "done for you cold email",
    "qualified meeting booking",
  ],
  openGraph: {
    title: "B2B Appointment Setting Services — Falqen",
    description: "Done-for-you cold email and LinkedIn outreach. We book the meetings, you close the deals.",
    url: "https://falqen.com/services",
  },
  alternates: { canonical: "https://falqen.com/services" },
};

const services = [
  {
    name: "Cold Email Outreach",
    slug: "cold-email",
    headline: "Reach thousands of ideal prospects — directly in their inbox",
    description:
      "We build dedicated sending infrastructure, verify every lead, write personalized copy, and send thousands of targeted cold emails on your behalf every month. Your main domain stays 100% safe — we use air-gapped sending domains with full SPF, DKIM, and DMARC authentication.",
    benefits: [
      "500,000+ emails sent per month across all clients",
      "Dedicated sending domains — your main domain stays safe",
      "AI-personalized copy for every recipient",
      "Full A/B testing on subject lines and body copy",
      "Weekly reporting with open, reply, and booking rates",
      "7–14 day setup, first replies within 48 hours of launch",
    ],
    who: "Best for B2B companies selling services or software priced $1,000–$50,000+ per deal.",
    stat: "Average 4–9% reply rate",
  },
  {
    name: "LinkedIn Outreach",
    slug: "linkedin",
    headline: "Build real relationships with decision-makers on LinkedIn",
    description:
      "We optimize your LinkedIn profile, identify your ideal customers by job title, industry, and company size, and run a fully managed outreach sequence — connection requests, personalized messages, and follow-ups. We handle every step until the prospect agrees to a call.",
    benefits: [
      "Profile optimization to maximize credibility",
      "Laser-targeted prospect lists by title, company size, and industry",
      "Personalized connection requests and message sequences",
      "Follow-up automation that doesn't feel automated",
      "Positive replies handed off directly to your calendar",
      "Works alongside cold email for omnipresent coverage",
    ],
    who: "Best for B2B founders and sales teams targeting director-level and above decision-makers.",
    stat: "2x booking rate when combined with cold email",
  },
  {
    name: "Full Pipeline Package",
    slug: "full-pipeline",
    headline: "Email + LinkedIn combined — the most effective B2B outbound system",
    description:
      "Our flagship service combines cold email and LinkedIn outreach into one coordinated campaign. Prospects see your name on both channels — if they miss the email, they see the LinkedIn message. This multi-touch approach dramatically increases response rates and delivers a consistent flow of qualified meetings every month.",
    benefits: [
      "Everything in Cold Email + LinkedIn packages",
      "Coordinated multi-touch sequences across both channels",
      "Unified reporting dashboard",
      "Dedicated account manager",
      "Monthly strategy review calls",
      "Priority onboarding (5-day setup)",
    ],
    who: "Best for companies serious about building a predictable outbound revenue engine.",
    stat: "10–20 qualified meetings per month on average",
  },
];

const process = [
  { step: 1, title: "Define Your ICP & Offer", desc: "We map your ideal customer profile and craft an irresistible outreach angle." },
  { step: 2, title: "Build & Verify Lead Lists", desc: "We scrape and verify thousands of decision-makers matching your exact criteria." },
  { step: 3, title: "Set Up Infrastructure", desc: "Dedicated domains, warmed inboxes, full email authentication. Done in 7–10 days." },
  { step: 4, title: "Write & Launch Sequences", desc: "Personalized copy, 3–5 follow-up variations, A/B tested from day one." },
  { step: 5, title: "Monitor & Optimize", desc: "Weekly iteration on copy, targeting, and offer based on real reply data." },
  { step: 6, title: "Book Meetings", desc: "Interested prospects are pushed directly to your calendar. You just close." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={[
        { question: "How is this different from buying a lead list?", answer: "A lead list gives you names. We give you conversations. We research, verify, write, send, follow up, and only hand you prospects who have expressed interest in a call." },
        { question: "Will cold email hurt my domain reputation?", answer: "Never. We use completely separate domains and inboxes for all outreach. Your main domain and email are untouched. We set up full SPF, DKIM, and DMARC authentication on every sending domain." },
        { question: "How long until I see my first meeting?", answer: "Setup takes 7–10 days. After launch, most clients see their first reply within 48 hours and their first booked meeting within the first week." },
        { question: "Do I need to be involved day-to-day?", answer: "No. You fill out an onboarding form, we handle everything. You just show up to the calls we book for you." },
        { question: "What industries do you work with?", answer: "We work with B2B companies across SaaS, professional services, logistics, manufacturing, healthcare IT, fintech, and more." },
      ]} />
      {/* Nav spacer */}
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Done-For-You B2B Outreach
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            B2B Appointment Setting Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We handle cold email and LinkedIn outreach end-to-end. You get qualified sales meetings on your calendar. You close the deals.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
            Get Started — Free Strategy Call
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">What We Offer</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
            Three ways to work with us. All fully managed. All focused on one outcome: more qualified meetings.
          </p>
          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((s) => (
              <div key={s.slug} className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="inline-block bg-success/10 text-success text-xs font-bold px-3 py-1 rounded-full mb-3">{s.stat}</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{s.name}</h3>
                    <p className="text-primary font-medium mb-4">{s.headline}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-success mt-0.5">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">{s.who}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg text-center mb-14">From onboarding to booked meetings in 14 days or less.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {process.map((p) => (
              <div key={p.step} className="bg-card border border-border/50 rounded-xl p-6 flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center flex-shrink-0">{p.step}</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{p.title}</h4>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How is this different from buying a lead list?", a: "A lead list gives you names. We give you conversations. We research, verify, write, send, follow up, and only hand you prospects who have expressed interest in a call. You never have to touch a spreadsheet." },
              { q: "Will cold email hurt my domain reputation?", a: "Never. We use completely separate domains and inboxes for all outreach. Your main domain and email are untouched. We set up full SPF, DKIM, and DMARC authentication on every sending domain." },
              { q: "How long until I see my first meeting?", a: "Setup takes 7–10 days. After launch, most clients see their first reply within 48 hours and their first booked meeting within the first week." },
              { q: "Do I need to be involved day-to-day?", a: "No. You fill out an onboarding form, we handle everything. You just show up to the calls we book for you." },
              { q: "What industries do you work with?", a: "We work with B2B companies across SaaS, professional services, logistics, manufacturing, healthcare IT, fintech, and more. If you sell to other businesses, we can build your outbound pipeline." },
            ].map((faq) => (
              <div key={faq.q} className="bg-card border border-border/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Fill Your Calendar?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us about your business. We&apos;ll show you exactly how many meetings we can generate for you.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
