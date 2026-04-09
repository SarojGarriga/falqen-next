import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Pricing — Cold Email & LinkedIn Outreach Agency | Falqen",
  description:
    "Falqen's pricing is based on outreach volume and meetings booked — not retainers. See what cold email and LinkedIn outreach actually costs and what you get for your investment.",
  keywords: [
    "cold email agency pricing",
    "b2b lead generation agency cost",
    "appointment setting agency pricing",
    "linkedin outreach agency cost",
    "how much does cold email outreach cost",
    "b2b outreach agency pricing",
  ],
  openGraph: {
    title: "Pricing — Cold Email & LinkedIn Outreach | Falqen",
    description: "Transparent pricing for B2B cold email and LinkedIn outreach. No hidden fees.",
    url: "https://falqen.com/pricing",
  },
  alternates: { canonical: "https://falqen.com/pricing" },
};

const faqs = [
  { q: "Are there any setup fees?", a: "Yes — there is a one-time infrastructure setup fee to cover domain purchases, inbox creation, and technical configuration. This varies based on the volume of your campaign. We'll outline all costs transparently on your strategy call." },
  { q: "Is there a minimum contract length?", a: "We recommend a minimum 3-month engagement for cold email to see the full potential of follow-up sequences and optimization. However, we don't lock you into annual contracts. Most clients stay 6–18 months because the results compound over time." },
  { q: "What's included in every plan?", a: "Every engagement includes: ICP definition, lead list building, email infrastructure setup, copywriting, campaign management, reply handling, and weekly performance reports. LinkedIn add-ons are priced separately." },
  { q: "How is pricing calculated?", a: "Pricing is based on email volume (number of contacts in your campaign per month), number of dedicated inboxes needed, and whether LinkedIn is included. We don't charge per meeting — you keep all the meetings we book for you." },
  { q: "What's the ROI I should expect?", a: "This depends heavily on your deal size. If your average deal is $5,000 and we book 10 meetings/month with a 20% close rate, that's $10,000/month in new revenue from a $3,000–5,000 investment. Most clients see 3–15x ROI within 90 days." },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Transparent Pricing.<br />
            <span className="text-primary">No Hidden Fees.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Our pricing is based on the volume of outreach and the results we generate — not bloated monthly retainers. Book a call and we&apos;ll give you an exact quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter",
                tagline: "Test the channel",
                price: "From $1,500",
                period: "/month",
                highlight: false,
                features: [
                  "5,000 emails/month",
                  "2 dedicated sending domains",
                  "4 warmed inboxes",
                  "1 active sequence",
                  "Verified lead list (ICP-matched)",
                  "Full copy + follow-ups written",
                  "Weekly reporting",
                  "Reply management",
                ],
                cta: "Book a Call",
                note: "Best for: solo founders or small teams testing outbound for the first time.",
              },
              {
                name: "Growth",
                tagline: "Build consistent pipeline",
                price: "From $3,500",
                period: "/month",
                highlight: true,
                features: [
                  "20,000 emails/month",
                  "6 dedicated sending domains",
                  "12 warmed inboxes",
                  "3 active sequences (A/B tested)",
                  "Verified lead list (ICP-matched)",
                  "Full copy + follow-ups written",
                  "Weekly reporting",
                  "Reply management + lead qualification",
                  "Dedicated account manager",
                  "Monthly strategy calls",
                ],
                cta: "Book a Call",
                note: "Best for: B2B companies targeting 10–20 qualified meetings per month.",
              },
              {
                name: "Scale",
                tagline: "Dominate your market",
                price: "Custom",
                period: "",
                highlight: false,
                features: [
                  "50,000+ emails/month",
                  "Full LinkedIn outreach included",
                  "Multi-market campaign support",
                  "Multiple ICPs and verticals",
                  "Full copy team assigned",
                  "Priority reply management",
                  "Real-time dashboard access",
                  "Weekly strategy calls",
                  "Competitor displacement campaigns",
                ],
                cta: "Book a Call",
                note: "Best for: funded companies or agencies wanting to build a serious outbound machine.",
              },
            ].map((plan) => (
              <div key={plan.name} className={`rounded-2xl border p-8 flex flex-col ${plan.highlight ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary/20 relative" : "border-border/50 bg-card"}`}>
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{plan.tagline}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="text-success mt-0.5 flex-shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground italic mb-4">{plan.note}</p>
                <Link href="/" className={`w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors ${plan.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/20 text-foreground hover:bg-primary/5"}`}>
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included note */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">Everything Is Fully Managed</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { icon: "🎯", title: "Lead Research", desc: "We build and verify your prospect lists from scratch using premium B2B databases." },
              { icon: "⚙️", title: "Tech Setup", desc: "Domains, inboxes, SPF/DKIM/DMARC — all configured and maintained by us." },
              { icon: "✍️", title: "Copywriting", desc: "We write personalized first-line hooks, email bodies, and 3–5 follow-up variants." },
              { icon: "📅", title: "Meeting Booking", desc: "Qualified prospects are booked directly onto your calendar. You just close." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border/50 rounded-xl p-5 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-foreground mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Pricing Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Get Your Custom Quote</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us your target market and deal size. We&apos;ll give you an exact projection of meetings per month and total cost.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
