import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Cold Email Agency vs. In-House SDR Team: Real Cost & ROI Breakdown (2026)",
  description:
    "Agency: $3K–8K/month, live in 14 days. In-house SDR: $6K–10K/month + 90 days to hire. We break down the real numbers, reply rates, and which model wins for B2B companies under $10M ARR.",
  keywords: [
    "cold email agency vs in-house SDR",
    "outsource cold email vs hire SDR",
    "B2B cold email agency cost",
    "SDR vs lead generation agency",
    "cold email agency ROI",
    "outsource B2B prospecting",
  ],
  openGraph: {
    title: "Cold Email Agency vs. In-House SDR: Which Delivers More ROI?",
    description: "A cost and performance breakdown to help you decide whether to outsource or build in-house.",
    url: "https://falqen.com/blog/cold-email-agency-vs-in-house",
  },
  alternates: { canonical: "https://falqen.com/blog/cold-email-agency-vs-in-house" },
};

export default function Article2() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="article" title="Cold Email Agency vs. In-House SDR: Which Delivers More ROI in 2026?" description="A detailed cost and performance comparison between hiring a cold email agency and building an in-house SDR team for B2B lead generation in 2026." url="https://falqen.com/blog/cold-email-agency-vs-in-house" datePublished="2026-02-18" />
      <div className="h-16" />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span>Cold Email Agency vs. In-House SDR</span>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Strategy</span>
              <span className="text-xs text-muted-foreground">March 20, 2026 · 7 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Cold Email Agency vs. In-House SDR: Which Delivers More ROI in 2026?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You need more qualified sales meetings. The question is: do you hire someone internally, or do you outsource to a specialist agency? Here&apos;s the honest breakdown.
            </p>
          </div>

          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Real Cost of Hiring an SDR</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most companies underestimate the true cost of an in-house Sales Development Representative. The salary is just the beginning.
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 mt-4 space-y-3">
                {[
                  { item: "Base salary (US average)", cost: "$55,000–$75,000/year" },
                  { item: "On-target earnings (OTE with commission)", cost: "$70,000–$95,000/year" },
                  { item: "Employer taxes & benefits", cost: "+25–30%" },
                  { item: "Recruiting & onboarding", cost: "$5,000–$15,000 one-time" },
                  { item: "Tools (CRM, sequencer, data, enrichment)", cost: "$500–$2,000/month" },
                  { item: "Management time", cost: "5–10 hrs/week" },
                  { item: "Ramp-up time", cost: "3–6 months before full productivity" },
                ].map((r) => (
                  <div key={r.item} className="flex justify-between items-center text-sm border-b border-border/30 pb-2">
                    <span className="text-muted-foreground">{r.item}</span>
                    <span className="font-semibold text-foreground">{r.cost}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center text-sm font-bold pt-1">
                  <span className="text-foreground">Total Year 1 Cost</span>
                  <span className="text-destructive">$100,000–$140,000+</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                And that&apos;s before accounting for the fact that the average SDR tenure is just 14 months — meaning you&apos;ll likely be recruiting again within a year, paying the full onboarding cost again.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Real Cost of a Cold Email Agency</h2>
              <p className="text-muted-foreground leading-relaxed">
                A quality B2B cold email agency typically charges $1,500–$5,000 per month depending on volume, channels (email only vs. email + LinkedIn), and level of management.
              </p>
              <div className="bg-success/5 border border-success/20 rounded-xl p-6 mt-4 space-y-3">
                {[
                  { item: "Monthly retainer (email + LinkedIn)", cost: "$2,000–$5,000/month" },
                  { item: "Setup fee (one-time)", cost: "$0–$2,000" },
                  { item: "Tools included", cost: "Usually yes" },
                  { item: "Time to first results", cost: "2–4 weeks" },
                  { item: "Management required", cost: "1–2 hrs/week" },
                  { item: "Annual total", cost: "$24,000–$60,000" },
                ].map((r) => (
                  <div key={r.item} className="flex justify-between items-center text-sm border-b border-border/30 pb-2">
                    <span className="text-muted-foreground">{r.item}</span>
                    <span className="font-semibold text-foreground">{r.cost}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Performance Comparison</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cost aside, which actually books more meetings? Here&apos;s what the data shows:
              </p>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Factor</th>
                      <th className="text-center py-3 px-4 text-foreground font-semibold">In-House SDR</th>
                      <th className="text-center py-3 pl-4 text-success font-semibold">Cold Email Agency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {[
                      ["Emails per month", "500–2,000", "10,000–100,000+"],
                      ["Time to first meeting", "3–6 months", "2–4 weeks"],
                      ["Deliverability expertise", "Limited", "Specialized"],
                      ["Copy A/B testing", "Rarely", "Systematic"],
                      ["Data sourcing quality", "Varies", "Premium tools"],
                      ["Domain protection", "Risk to main domain", "Dedicated domains"],
                      ["Scalability", "Hire more people", "Instant scale"],
                    ].map(([factor, sdr, agency]) => (
                      <tr key={factor}>
                        <td className="py-3 pr-4 text-muted-foreground">{factor}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{sdr}</td>
                        <td className="py-3 pl-4 text-center text-success font-medium">{agency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">When an In-House SDR Makes Sense</h2>
              <p className="text-muted-foreground leading-relaxed">
                An in-house SDR can be the right choice when:
              </p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  "You have a very complex, niche product requiring deep domain expertise to explain",
                  "Your sales cycle is 12+ months and requires constant relationship nurturing",
                  "You want full control over messaging and strategy",
                  "You have enough volume that a full-time person would be fully utilized from day one",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-1 flex-shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">When a Cold Email Agency Makes Sense</h2>
              <p className="text-muted-foreground leading-relaxed">
                An agency is typically the better choice when:
              </p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  "You need results in weeks, not months",
                  "You don't want to manage headcount, tools, and infrastructure",
                  "You want to test outbound before committing to a full in-house team",
                  "Your deal size is $1,000–$50,000 (sweet spot for outbound economics)",
                  "You want to scale volume quickly without proportional cost increases",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-success mt-1 flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Verdict</h2>
              <p className="text-muted-foreground leading-relaxed">
                For most B2B companies — especially those under $10M ARR — a cold email agency delivers better ROI than an in-house SDR, faster, with less management overhead and lower risk.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The agency model lets you get to revenue faster while you focus on closing the meetings they book. Once you&apos;ve validated that outbound works for your business with an agency, you can then decide whether to bring some of that function in-house.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-4">
                <p className="text-foreground font-medium">💡 The smartest move: Start with an agency to get proof of concept and pipeline flowing, then use those learnings to hire the right SDR if and when it makes sense.</p>
              </div>
            </section>

          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">Want us to build your pipeline?</h3>
            <p className="text-primary-foreground/80 mb-6">We handle cold email and LinkedIn outreach end-to-end. No SDR hiring needed.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-background/90 transition-colors shadow-lg">
              Book a Free Strategy Call
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Keep Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/how-to-get-more-b2b-sales-meetings" className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <p className="text-xs text-primary font-medium mb-2">Cold Email</p>
                <h4 className="font-semibold text-foreground text-sm leading-snug">How to Get More B2B Sales Meetings in 2026 Without Paying for Ads</h4>
              </Link>
              <Link href="/blog/b2b-appointment-setting-guide" className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <p className="text-xs text-primary font-medium mb-2">Appointment Setting</p>
                <h4 className="font-semibold text-foreground text-sm leading-snug">The Complete Guide to B2B Appointment Setting (2026)</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
