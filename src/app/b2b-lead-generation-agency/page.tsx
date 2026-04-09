import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "B2B Lead Generation Agency — Falqen | Outsource Your Pipeline",
  description:
    "Falqen is a B2B lead generation agency that fills your pipeline with qualified prospects through cold email and LinkedIn outreach. We find the leads, start the conversations, and book the meetings. You close.",
  keywords: [
    "b2b lead generation agency",
    "outsource b2b lead generation",
    "b2b lead gen agency",
    "b2b pipeline generation",
    "lead generation company b2b",
    "b2b demand generation agency",
    "outsource sales prospecting",
    "b2b outbound agency",
  ],
  openGraph: {
    title: "B2B Lead Generation Agency — Falqen",
    description: "We build your outbound pipeline. Cold email + LinkedIn outreach that delivers qualified meetings.",
    url: "https://falqen.com/b2b-lead-generation-agency",
  },
  alternates: { canonical: "https://falqen.com/b2b-lead-generation-agency" },
};

const faqs = [
  { q: "What is a B2B lead generation agency?", a: "A B2B lead generation agency handles the outbound prospecting process for you — finding your ideal customers, reaching out to them via email or LinkedIn, and qualifying them until they're ready to talk to your sales team. The best agencies don't just deliver lists — they book meetings directly on your calendar." },
  { q: "How much does B2B lead generation cost?", a: "In-house SDR: $6,000–10,000/month (salary + tools + management overhead). Agency model: $2,000–8,000/month depending on volume. Most B2B companies see 3–5x ROI on agency lead generation within the first 90 days when their average deal size is over $3,000." },
  { q: "How is this different from inbound lead generation?", a: "Inbound relies on content, SEO, and ads to attract buyers to you — this takes 6–12 months and requires ongoing investment. Outbound lead generation means we go directly to your ideal customers and start conversations. Results within 2–4 weeks, not 6–12 months." },
  { q: "What results should I expect?", a: "On average, clients generating 10,000 emails/month with a 4% reply rate and 10% conversion to meeting see 40 replies and 4 booked meetings. Volume and quality of your ICP are the main variables. We provide a realistic projection based on your specific business before you start." },
  { q: "Do you work with early-stage startups?", a: "Yes, but with caveats. Early-stage companies need a clear value proposition and at least one strong case study or reference client. Outbound works best when there's a proven offer. If you're still validating product-market fit, we recommend a smaller test campaign first." },
  { q: "How do you measure success?", a: "Primary KPI: qualified meetings booked per month. Secondary: reply rate, positive reply rate, and meeting-to-opportunity conversion. We send weekly reports showing every metric. If reply rates drop below threshold, we iterate on copy, targeting, or offer angle within 48 hours." },
];

export default function B2BLeadGenerationAgency() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="faq" items={faqs.map(f => ({ question: f.q, answer: f.a }))} />
      <div className="h-16" />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            B2B Lead Generation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
            B2B Lead Generation Agency<br />
            <span className="text-primary">That Builds Your Pipeline.</span><br />
            Not Just Your Contact List.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We handle the entire outbound process — finding your ideal customers, reaching them via cold email and LinkedIn, qualifying their interest, and booking them directly on your calendar. You get a full pipeline without hiring a single SDR.
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
              { value: "10–20", label: "Qualified meetings/month" },
              { value: "14 days", label: "To first meeting" },
              { value: "850%", label: "Average client ROI" },
              { value: "$3–15", label: "Cost per qualified lead" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency vs In-House */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Agency vs. Building In-House</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">The real cost of doing this yourself vs. outsourcing to Falqen.</p>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Factor</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">In-House SDR</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-primary">Falqen Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Monthly cost", "$6,000–10,000", "$2,000–8,000"],
                  ["Time to launch", "60–90 days to hire", "7–14 days"],
                  ["Infrastructure setup", "You manage it", "We handle it"],
                  ["Ramp-up time", "3–6 months", "2–4 weeks"],
                  ["Expertise", "One person's skills", "Full team + systems"],
                  ["Scale up/down", "Hire or fire", "Adjust monthly"],
                  ["Risk", "High (bad hire)", "Low (results or leave)"],
                ].map(([factor, inhouse, agency]) => (
                  <tr key={factor} className="hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{factor}</td>
                    <td className="py-3 px-4 text-sm text-center text-muted-foreground">{inhouse}</td>
                    <td className="py-3 px-4 text-sm text-center text-primary font-medium">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Industries We Generate Leads For</h2>
          <p className="text-muted-foreground text-lg text-center mb-14">If you sell to other businesses, we can build your pipeline.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "SaaS & Software", "Professional Services", "IT & Managed Services",
              "Logistics & Supply Chain", "Financial Services & Fintech", "Healthcare IT",
              "Manufacturing & Industrial", "Marketing & Creative Agencies", "Consulting & Advisory",
              "Construction & Real Estate", "Legal & Compliance", "HR & Recruitment",
            ].map((industry) => (
              <div key={industry} className="bg-card border border-border/50 rounded-xl p-4 text-sm font-medium text-foreground flex items-center gap-2">
                <span className="text-success">✓</span> {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">B2B Lead Generation FAQ</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Stop Waiting for Referrals. Build a Pipeline.</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Tell us your ICP and deal size. We&apos;ll tell you exactly how many meetings we can generate per month.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call →
          </Link>
        </div>
      </section>
    </div>
  );
}
