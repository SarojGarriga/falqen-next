import type { Metadata } from "next";
import Link from "next/link";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Guía para Elegir una Agencia de Prospección B2B en 2026 — Falqen",
  description:
    "Todo lo que necesitas saber antes de contratar una agencia de prospección outbound B2B: preguntas clave, señales de alerta, métricas a exigir y cómo evaluar resultados.",
  keywords: [
    "agencia prospección B2B",
    "cómo elegir agencia outbound",
    "agencia leads B2B España",
    "prospección outbound B2B",
    "contratar agencia email frío",
    "generación leads B2B agencia",
  ],
  openGraph: {
    title: "Guía para Elegir una Agencia de Prospección B2B en 2026",
    description: "Todo lo que necesitas saber antes de contratar una agencia de prospección outbound B2B.",
    url: "https://falqen.com/blog/agencia-prospección-b2b-guia",
    locale: "es_ES",
  },
};

export default function ArticleES3() {
  return (
    <div className="min-h-screen bg-background">
      <Schema type="article" title="Guía para Elegir una Agencia de Prospección B2B en 2026" description="Todo lo que necesitas saber antes de contratar una agencia de prospección outbound B2B: preguntas clave, señales de alerta, métricas a exigir y cómo evaluar resultados." url="https://falqen.com/blog/agencia-prospección-b2b-guia" datePublished="2026-03-10" lang="es" />
      <div className="h-16" />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span>Guía Agencia Prospección B2B</span>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Prospección</span>
              <span className="text-xs font-bold bg-success/10 text-success px-3 py-1 rounded-full">ES</span>
              <span className="text-xs text-muted-foreground">10 de marzo, 2026 · 9 min</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Guía para Elegir una Agencia de Prospección B2B en 2026
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No todas las agencias de prospección B2B son iguales. Muchas prometen resultados que no pueden cumplir. Esta guía te da las herramientas para elegir bien.
            </p>
          </div>

          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Qué Hace Exactamente una Agencia de Prospección B2B</h2>
              <p className="text-muted-foreground leading-relaxed">
                Una agencia de prospección B2B gestiona todo el proceso outbound en tu nombre: identificar prospectos, construir listas verificadas, escribir secuencias de emails y mensajes de LinkedIn, configurar la infraestructura técnica, gestionar las respuestas y agendar reuniones directamente en tu calendario.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Tu único trabajo es aparecer a las reuniones y cerrar los deals. Ellos hacen todo lo demás.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Las 8 Preguntas que Debes Hacer Antes de Contratar</h2>
              <div className="space-y-4">
                {[
                  { q: "¿Usáis mi dominio principal para el outreach?", a: "La respuesta correcta es NO. Deben usar dominios dedicados exclusivamente para el outreach. Si van a usar tu dominio principal, es una señal de alarma grave." },
                  { q: "¿Cómo verificáis los emails antes de enviar?", a: "Deben usar herramientas de verificación como ZeroBounce, NeverBounce o similares. Sin verificación, tu entregabilidad se destruirá rápidamente." },
                  { q: "¿Qué tasa de respuesta media obtenéis?", a: "Busca cifras realistas: 4–9% en campañas bien segmentadas. Desconfía de quien promete 15–20% — suele ser deshonesto o van a bajar el umbral de calidad." },
                  { q: "¿Podéis mostrarme ejemplos de copy que habéis usado?", a: "Una agencia seria no tendrá problema en mostrarte ejemplos anonimizados de secuencias que han funcionado." },
                  { q: "¿Con qué frecuencia reportáis y qué métricas incluís?", a: "Mínimo semanal, con datos de: emails enviados, tasa de apertura, tasa de respuesta, respuestas positivas, reuniones reservadas." },
                  { q: "¿Qué pasa si los resultados no llegan?", a: "Busca agencias que tengan un proceso de iteración claro: si los números no dan, ¿qué cambian? ¿Copy? ¿Targeting? ¿Oferta?" },
                  { q: "¿Cuánto tiempo tardáis en lanzar la primera campaña?", a: "Entre 7 y 14 días es lo estándar para una configuración seria. Menos de 5 días puede significar que se están saltando pasos importantes de calentamiento." },
                  { q: "¿Trabajáis exclusivamente en B2B o también en B2C?", a: "Las mejores agencias de prospección outbound se especializan en B2B. Las que hacen ambas cosas suelen ser mediocres en las dos." },
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border/50 rounded-xl p-6">
                    <h4 className="font-semibold text-foreground mb-2">❓ {item.q}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed"><span className="text-primary font-medium">Qué buscar: </span>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Señales de Alerta que Debes Evitar</h2>
              <div className="space-y-3">
                {[
                  "Garantizan un número específico de reuniones (las reuniones garantizadas suelen ser de baja calidad)",
                  "Van a usar tu dominio principal para enviar",
                  "No te muestran el copy antes de lanzar",
                  "No tienen proceso de calentamiento de inboxes",
                  "Los reportes son vagos o poco frecuentes",
                  "No tienen casos de éxito que puedas verificar",
                  "Prometen resultados en 48–72 horas (imposible con buenas prácticas)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-destructive/5 border border-destructive/10 rounded-lg p-4 text-sm">
                    <span className="text-destructive font-bold flex-shrink-0">✗</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Métricas que Debes Exigir en el Reporting</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { metric: "Emails enviados", bench: "Seguimiento de volumen" },
                  { metric: "Tasa de apertura", bench: "Objetivo: 40–60%" },
                  { metric: "Tasa de respuesta", bench: "Objetivo: 4–9%" },
                  { metric: "Respuestas positivas", bench: "Objetivo: 1–3%" },
                  { metric: "Reuniones reservadas", bench: "KPI principal" },
                  { metric: "Tasa de asistencia", bench: "Objetivo: 70–80%" },
                  { metric: "Salud del inbox", bench: "Debe monitorizarse diario" },
                  { metric: "Tasa de rebote", bench: "Debe ser <3%" },
                ].map((m) => (
                  <div key={m.metric} className="bg-secondary/50 rounded-xl p-4">
                    <div className="font-semibold text-foreground text-sm">{m.metric}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.bench}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cuánto Deberías Pagar</h2>
              <p className="text-muted-foreground leading-relaxed">
                El precio de una agencia de prospección B2B de calidad en 2026 suele estar entre 1.500€ y 5.000€ al mes, dependiendo del volumen, los canales (solo email vs. email + LinkedIn) y el nivel de gestión.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-4">
                <p className="text-foreground font-medium mb-2">Regla de oro para calcular el ROI:</p>
                <p className="text-muted-foreground text-sm">Si tu ticket medio es de 5.000€ y la agencia te genera 5 reuniones al mes con una tasa de cierre del 20%, estás cerrando 1 deal al mes = 5.000€ de ingreso nuevo. Con una inversión de 2.000€/mes en la agencia, el ROI es 2,5x en el primer mes y crece con el tiempo.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Conclusión: Qué Buscar en una Agencia de Prospección B2B</h2>
              <p className="text-muted-foreground leading-relaxed">
                La agencia correcta para ti combina experiencia técnica (infraestructura de email, entregabilidad) con habilidades de copywriting y gestión de datos. Debe ser transparente, orientada a datos y dispuesta a iterar cuando algo no funciona.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Las mejores agencias no prometen resultados mágicos — te explican exactamente cómo trabajan, te muestran métricas reales y construyen contigo un sistema que mejora con el tiempo.
              </p>
            </section>

          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">Habla con Falqen — sin compromiso</h3>
            <p className="text-primary-foreground/80 mb-6">Te explicamos exactamente cómo trabajamos, qué resultados puedes esperar y si somos la agencia adecuada para tu negocio.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-background/90 transition-colors shadow-lg">
              Reservar Llamada Gratuita
            </Link>
          </div>

          <div className="mt-16">
            <h3 className="text-xl font-bold text-foreground mb-6">Seguir Leyendo</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/como-conseguir-reuniones-de-ventas-b2b" className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <p className="text-xs text-primary font-medium mb-2">Email Frío</p>
                <h4 className="font-semibold text-foreground text-sm leading-snug">Cómo Conseguir Más Reuniones de Ventas B2B en 2026</h4>
              </Link>
              <Link href="/blog/email-frio-vs-publicidad-google" className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <p className="text-xs text-primary font-medium mb-2">Estrategia</p>
                <h4 className="font-semibold text-foreground text-sm leading-snug">Email Frío vs. Google Ads para B2B</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
