import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Falqen vs Belkins — B2B Appointment Setting Agency Comparison",
  description:
    "Comparing Falqen and Belkins for B2B appointment setting and cold email outreach. See how pricing, setup time, targeting, and results differ between the two agencies.",
  keywords: [
    "belkins alternative",
    "belkins vs falqen",
    "belkins appointment setting review",
    "belkins competitor",
    "b2b appointment setting agency comparison",
    "alternative to belkins",
  ],
  openGraph: {
    title: "Falqen vs Belkins — B2B Appointment Setting Comparison",
    description: "How Falqen compares to Belkins on pricing, speed, and results.",
    url: "https://falqen.com/vs/belkins",
  },
  alternates: { canonical: "https://falqen.com/vs/belkins" },
};

const faqs = [
  { q: "What is Belkins?", a: "Belkins is a B2B appointment setting agency founded in 2017, known for cold email outreach and SDR services. They serve mid-market and enterprise clients and are one of the larger agencies in the space." },
  { q: "How is Falqen different from Belkins?", a: "Falqen operates as a leaner, more hands-on agency with faster setup times, more transparent reporting, and pricing structures better suited to small and mid-size B2B companies. We focus exclusively on cold email and LinkedIn — no SDR teams or complex retainers." },
  { q: "Is Falqen cheaper than Belkins?", a: "Generally yes. Belkins typically works with larger retainers suited to enterprise or funded companies. Falqen's model is designed for B2B companies at earlier revenue stages who need results without enterprise-level pricing." },
  { q: "What if I'm not happy with the results?", a: "We're transparent about realistic expectations from day one. If campaigns are underperforming, we iterate on copy, targeting, and offer within 48 hours. We don't hide behind monthly reports — you have visibility into what's happening in real time." },
];

export default function VsBelkins() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            Agency Comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Falqen vs. Belkins<br />
            <span className="text-primary">Which Agency Books More Meetings?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Both agencies do B2B appointment setting. The differences come down to pricing, speed, and who they&apos;re built for.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-border/50">
            <table className="w-full">
              <thead className="bg-secondary/50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-muted-foreground">Factor</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-foreground">Belkins</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-primary">Falqen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Founded", "2017", "2023"],
                  ["Pricing model", "Enterprise retainer", "Volume-based, flexible"],
                  ["Best for", "Mid-market & enterprise", "SMB to mid-market B2B"],
                  ["Setup time", "3–6 weeks", "7–14 days"],
                  ["Channels", "Cold email + SDR calls", "Cold email + LinkedIn"],
                  ["Reporting", "Monthly reports", "Weekly + real-time access"],
                  ["Contract length", "Long-term retainer", "Monthly, no lock-in"],
                  ["Personalization", "Template-based at scale", "AI-personalized per contact"],
                  ["Domain safety", "Standard approach", "Air-gapped domains, full auth"],
                ].map(([factor, belkins, falqen]) => (
                  <tr key={factor} className="hover:bg-secondary/20">
                    <td className="py-4 px-6 text-sm font-medium text-foreground">{factor}</td>
                    <td className="py-4 px-6 text-sm text-center text-muted-foreground">{belkins}</td>
                    <td className="py-4 px-6 text-sm text-center text-primary font-medium">{falqen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Information based on publicly available data. Belkins pricing and features may have changed.
          </p>
        </div>
      </section>

      {/* When to choose each */}
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">When to Choose Which</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Choose Belkins if:</h3>
              <ul className="space-y-2">
                {[
                  "You're a funded startup or enterprise company",
                  "You need SDR calls + email combined",
                  "You want a large established agency with a portfolio",
                  "Budget is $10,000+/month",
                  "You have a long enterprise sales cycle",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-primary/20 rounded-2xl p-6 ring-2 ring-primary/10">
              <h3 className="text-xl font-bold text-primary mb-4">Choose Falqen if:</h3>
              <ul className="space-y-2">
                {[
                  "You're a B2B company under $20M ARR",
                  "You want to be live and generating meetings in 2 weeks",
                  "You need cold email + LinkedIn without enterprise pricing",
                  "You want weekly reporting and full visibility",
                  "You want to test outbound before committing long-term",
                ].map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-start gap-2">
                    <span className="text-success mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">Common Questions</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">See Falqen in Action</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Book a free strategy call. We&apos;ll show you exactly what a campaign for your business would look like and what results to expect.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
