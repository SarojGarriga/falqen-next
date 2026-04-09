import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Falqen vs CIENCE — B2B Outbound Agency Comparison",
  description:
    "Comparing Falqen and CIENCE Technologies for B2B lead generation and appointment setting. Pricing, setup time, channels, and who each agency is built for.",
  keywords: [
    "cience alternative",
    "cience technologies alternative",
    "cience vs falqen",
    "cience technologies review",
    "cience competitor",
    "b2b lead generation agency comparison",
    "alternative to cience",
  ],
  openGraph: {
    title: "Falqen vs CIENCE — B2B Outbound Agency Comparison",
    description: "How Falqen compares to CIENCE Technologies on pricing, results, and who they serve.",
    url: "https://falqen.com/vs/cience",
  },
  alternates: { canonical: "https://falqen.com/vs/cience" },
};

const faqs = [
  { q: "What is CIENCE Technologies?", a: "CIENCE is a people-as-a-service outbound lead generation company founded in 2015. They provide SDR teams, data services, and outbound technology. They're one of the larger players in the B2B lead generation space, primarily serving mid-market and enterprise clients." },
  { q: "How is Falqen different from CIENCE?", a: "CIENCE is a large agency offering a broad platform including SDR hiring, data enrichment tools, and software. Falqen is a focused outreach agency specializing in cold email and LinkedIn outreach — no large teams, no complex platforms. We're built for B2B companies that want fast results without enterprise overhead." },
  { q: "Is Falqen cheaper than CIENCE?", a: "Generally yes. CIENCE's model is built for companies with larger budgets and longer sales cycles. Falqen is designed for B2B companies at earlier revenue stages who need qualified meetings without committing to large monthly retainers." },
  { q: "Who should use CIENCE vs Falqen?", a: "CIENCE is a strong choice if you need a managed SDR team, want a data platform, or are an enterprise company with complex multi-touch requirements. Falqen is the better choice if you want a lean, fast, focused cold email and LinkedIn operation that produces meetings in 2–3 weeks." },
];

export default function VsCience() {
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
            Falqen vs. CIENCE Technologies<br />
            <span className="text-primary">Which Is Right for Your Business?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Both handle B2B outbound lead generation. The differences come down to what you need — a full SDR platform or a focused outreach operation.
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
                  <th className="text-center py-4 px-6 text-sm font-semibold text-foreground">CIENCE</th>
                  <th className="text-center py-4 px-6 text-sm font-semibold text-primary">Falqen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Founded", "2015", "2023"],
                  ["Model", "People-as-a-service + platform", "Focused outreach agency"],
                  ["Channels", "SDR calls, email, data", "Cold email + LinkedIn"],
                  ["Best for", "Enterprise / mid-market", "SMB to mid-market B2B"],
                  ["Setup time", "4–8 weeks", "7–14 days"],
                  ["Pricing", "Large retainers + platform fees", "Volume-based, flexible"],
                  ["Reporting", "Platform dashboard", "Weekly reports + real-time"],
                  ["Contract", "Long-term commitments", "Monthly, no lock-in"],
                  ["Team size", "Large SDR teams", "Lean, dedicated specialists"],
                ].map(([factor, cience, falqen]) => (
                  <tr key={factor} className="hover:bg-secondary/20">
                    <td className="py-4 px-6 text-sm font-medium text-foreground">{factor}</td>
                    <td className="py-4 px-6 text-sm text-center text-muted-foreground">{cience}</td>
                    <td className="py-4 px-6 text-sm text-center text-primary font-medium">{falqen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Information based on publicly available data. CIENCE pricing and features may have changed.
          </p>
        </div>
      </section>

      {/* When to choose each */}
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-14">When to Choose Which</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Choose CIENCE if:</h3>
              <ul className="space-y-2">
                {[
                  "You need a full managed SDR team with calling",
                  "You want an all-in-one outbound platform",
                  "You're an enterprise company with $15,000+/month budget",
                  "You need data enrichment as a standalone service",
                  "You have a complex multi-touch enterprise sales process",
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
                  "You want qualified meetings in your calendar in 2 weeks",
                  "You need cold email and LinkedIn without enterprise pricing",
                  "You're a B2B company under $30M ARR",
                  "You want weekly visibility and fast iteration",
                  "You want to start without long-term commitments",
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">See If Falqen Is Right for You</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Book a free strategy call. We&apos;ll be honest about whether we&apos;re the right fit — and if not, we&apos;ll tell you who is.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
