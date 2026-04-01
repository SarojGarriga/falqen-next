import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agencia de Prospección B2B | Email Frío y LinkedIn — Falqen",
  description:
    "Falqen llena tu calendario con reuniones de ventas calificadas. Gestionamos tu prospección outbound completa — email frío y LinkedIn — para que tú solo te dediques a cerrar deals.",
  keywords: [
    "agencia prospección B2B",
    "email frío B2B",
    "generación de leads B2B",
    "outreach LinkedIn B2B",
    "agencia leads ventas",
    "reuniones de ventas calificadas",
    "prospección outbound España",
    "conseguir clientes B2B",
  ],
  openGraph: {
    title: "Agencia de Prospección B2B — Falqen",
    description: "Llenamos tu calendario con reuniones de ventas calificadas. Tú solo cierras los deals.",
    url: "https://falqen.com/es",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://falqen.com/es",
    languages: { "en": "https://falqen.com", "es": "https://falqen.com/es" },
  },
};

const steps = [
  { n: "01", title: "Definimos tu cliente ideal", desc: "Identificamos exactamente a quién contactar: sector, tamaño de empresa, cargo y más." },
  { n: "02", title: "Construimos tu lista de leads", desc: "Usamos bases de datos premium para encontrar miles de decisores que encajan con tu perfil." },
  { n: "03", title: "Configuramos la infraestructura", desc: "Dominios dedicados, bandejas calentadas, SPF, DKIM y DMARC. Tu dominio principal siempre seguro." },
  { n: "04", title: "Escribimos y lanzamos las secuencias", desc: "Copy personalizado con IA, líneas de asunto A/B testeadas y 3–5 follow-ups automáticos." },
  { n: "05", title: "Gestionamos las respuestas", desc: "Filtramos los interesados y los empujamos directamente a tu calendario." },
  { n: "06", title: "Tú solo cierras", desc: "Tu único trabajo es aparecer a las llamadas y convertir. Nosotros hacemos todo lo demás." },
];

const testimonials = [
  { quote: "En el primer mes cerramos dos contratos grandes gracias a las campañas de email de Falqen. Lo mejor es que no tengo que hacer nada — solo aparezco a las llamadas.", name: "Elias Thorne", title: "CEO, Verta Logistics" },
  { quote: "Llevaba años intentando hacer esto internamente y nunca funcionó. Falqen lo configuró todo en dos semanas y ya en el primer mes teníamos reuniones con directores de empresas que nos interesaban.", name: "Sarah Jenkins", title: "Fundadora, Optima Health Solutions" },
  { quote: "El ROI es innegable. Firmamos un proyecto de €45k la semana pasada gracias a un lead que vino por su secuencia de LinkedIn. 15x retorno sobre nuestra inversión mensual.", name: "David Rossi", title: "Director, Cobalt Architecture" },
];

const faqs = [
  { q: "¿Esto dañará la reputación de mi dominio?", a: "Para nada. Usamos dominios y bandejas de entrada completamente separados para toda la prospección. Tu dominio principal nunca se toca." },
  { q: "¿Cuánto tarda en empezar a funcionar?", a: "La configuración tarda 7–10 días. Después del lanzamiento, la mayoría de clientes ven su primera respuesta en 48 horas y su primera reunión en la primera semana." },
  { q: "¿Tengo que involucrarme en el día a día?", a: "No. Rellenas el formulario de onboarding, nosotros hacemos todo. Tú solo apareces a las reuniones que te agendamos." },
  { q: "¿Cuántas reuniones puedo esperar al mes?", a: "Depende de tu sector y ticket medio. En promedio, apuntamos a 10–20 conversaciones calificadas al mes. Te damos una estimación real en nuestra primera llamada." },
  { q: "¿Funciona para empresas en España y Latinoamérica?", a: "Sí. Tenemos clientes en España, México, Argentina, Colombia y más. Hacemos outreach en español e inglés según tu mercado objetivo." },
];

export default function SpanishPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-16" />

      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/8 via-background to-success/5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[80px] -z-10" />
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
            ⚡ Enviamos más de 500.000 emails al mes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Llenamos tu Calendario<br />
            con <span className="text-primary">Reuniones de Ventas</span><br />
            <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">Calificadas.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Enviamos emails y mensajes de LinkedIn a las personas que necesitan lo que tú vendes. Ellos responden. Reservan una llamada. Tú cierras el deal. Nosotros nos encargamos de todo lo demás.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25">
              Quiero Más Clientes →
            </Link>
            <Link href="/" className="inline-flex items-center gap-2 border border-primary/20 text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-primary/5 transition-colors">
              Hablar con Nosotros — Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            {[
              { value: "500K+", label: "Emails enviados al mes" },
              { value: "10–20", label: "Reuniones por mes de media" },
              { value: "7–14 días", label: "Hasta el primer lead" },
              { value: "850%", label: "ROI medio de nuestros clientes" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Cómo Conseguimos tus Clientes</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Hacemos todo el trabajo duro. Tú solo apareces y cierras el deal.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "✉️",
                title: "Email Frío",
                desc: "Escribimos y enviamos miles de emails personalizados a personas que necesitan lo que vendes. Llegan a la bandeja de entrada — no al spam.",
                features: ["Tu dominio principal siempre seguro", "Cada email escrito específicamente para ellos", "Testeamos y mejoramos cada semana", "Solo contactamos a quien encaja con tu negocio"],
              },
              {
                icon: "💼",
                title: "Mensajes de LinkedIn",
                desc: "Conectamos con tus clientes ideales en LinkedIn e iniciamos conversaciones reales que se convierten en llamadas de ventas.",
                features: ["Optimizamos tu perfil de LinkedIn", "Mensajes que generan respuestas", "Follow-ups que funcionan", "Encontramos a las personas correctas"],
              },
            ].map((s) => (
              <div key={s.title} className="bg-card border border-border/50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-success">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Nuestro Proceso en 6 Pasos</h2>
          <p className="text-muted-foreground text-lg text-center mb-14">Todo es visible. Nada está oculto.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="bg-card border border-border/50 rounded-xl p-6 flex gap-4">
                <div className="text-3xl font-black text-primary/20 leading-none flex-shrink-0">{s.n}</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-muted-foreground text-lg text-center mb-14">Personas reales. Negocios reales. Resultados reales.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border/50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-primary">★</span>)}</div>
                <p className="text-foreground italic text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-primary">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-card border border-border/50 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">{f.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">¿Listo para llenar tu calendario?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">Cuéntanos sobre tu negocio. Te mostraremos exactamente cuántas reuniones podemos generar para ti.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold text-base hover:bg-background/90 transition-colors shadow-lg">
            Reservar Llamada Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
}
