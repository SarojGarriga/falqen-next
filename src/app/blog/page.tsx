import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "B2B Sales & Lead Generation Blog — Falqen",
  description:
    "Expert guides on cold email outreach, LinkedIn prospecting, B2B appointment setting, and building a predictable sales pipeline. In English and Spanish.",
  keywords: ["B2B sales blog", "cold email tips", "lead generation guide", "B2B outreach", "appointment setting tips"],
  openGraph: {
    title: "B2B Sales & Lead Generation Blog — Falqen",
    description: "Expert guides on cold email, LinkedIn outreach, and B2B appointment setting.",
    url: "https://falqen.com/blog",
  },
};

const posts = [
  {
    slug: "how-to-get-more-b2b-sales-meetings",
    title: "How to Get More B2B Sales Meetings in 2026 (Without Paying for Ads)",
    description: "A step-by-step playbook for filling your calendar with qualified sales meetings using cold email and LinkedIn outreach — no ad spend required.",
    date: "March 28, 2026",
    readTime: "8 min read",
    category: "Cold Email",
    lang: "EN",
  },
  {
    slug: "cold-email-agency-vs-in-house",
    title: "Cold Email Agency vs. In-House SDR: Which Delivers More ROI in 2026?",
    description: "A honest cost and performance comparison between hiring a B2B cold email agency and building an in-house sales development team.",
    date: "March 20, 2026",
    readTime: "7 min read",
    category: "Strategy",
    lang: "EN",
  },
  {
    slug: "b2b-appointment-setting-guide",
    title: "The Complete Guide to B2B Appointment Setting (2026 Edition)",
    description: "Everything you need to know about B2B appointment setting — what it is, how it works, what to look for in an agency, and how to measure results.",
    date: "March 12, 2026",
    readTime: "10 min read",
    category: "Appointment Setting",
    lang: "EN",
  },
  {
    slug: "como-conseguir-reuniones-de-ventas-b2b",
    title: "Cómo Conseguir Más Reuniones de Ventas B2B en 2026 (Sin Gastar en Publicidad)",
    description: "Guía completa para llenar tu calendario con reuniones calificadas usando email frío y LinkedIn — sin depender de Google Ads ni Meta.",
    date: "March 25, 2026",
    readTime: "8 min read",
    category: "Email Frío",
    lang: "ES",
  },
  {
    slug: "email-frio-vs-publicidad-google",
    title: "Email Frío vs. Google Ads para B2B: ¿Cuál Funciona Mejor en 2026?",
    description: "Comparamos el coste por lead, la escalabilidad y el ROI del email frío y Google Ads para empresas B2B. Los números hablan por sí solos.",
    date: "March 18, 2026",
    readTime: "7 min read",
    category: "Estrategia",
    lang: "ES",
  },
  {
    slug: "agencia-prospección-b2b-guia",
    title: "Guía para Elegir una Agencia de Prospección B2B en 2026",
    description: "Todo lo que necesitas saber antes de contratar una agencia de prospección outbound: qué preguntar, qué evitar y cómo medir resultados.",
    date: "March 10, 2026",
    readTime: "9 min read",
    category: "Prospección",
    lang: "ES",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-16" />

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            B2B Sales Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Guides on cold email, LinkedIn outreach, and B2B appointment setting. In English and Spanish.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-card border border-border/50 rounded-2xl p-7 hover:shadow-lg transition-all hover:border-primary/30">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">{post.category}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${post.lang === "ES" ? "bg-success/10 text-success" : "bg-secondary text-muted-foreground"}`}>{post.lang}</span>
                </div>
                <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.description}</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to get qualified meetings?</h2>
          <p className="text-primary-foreground/80 mb-8">Stop reading about lead generation. Let us do it for you.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-background/90 transition-colors shadow-lg">
            Book a Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
