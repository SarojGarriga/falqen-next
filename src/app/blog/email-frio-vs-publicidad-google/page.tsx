import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Email Frío vs. Google Ads para B2B: ¿Cuál Funciona Mejor en 2026? — Falqen",
  description:
    "Comparamos el coste por lead, la escalabilidad y el ROI del email frío y Google Ads para empresas B2B. Los datos hablan por sí solos.",
  keywords: [
    "email frío vs google ads B2B",
    "coste por lead B2B España",
    "email frío vs publicidad digital",
    "generación leads B2B sin anuncios",
    "ROI email frío B2B",
    "alternativas publicidad B2B",
  ],
  openGraph: {
    title: "Email Frío vs. Google Ads para B2B — ¿Cuál Funciona Mejor en 2026?",
    description: "Comparativa de coste, ROI y escalabilidad entre email frío y Google Ads para empresas B2B.",
    url: "https://falqen.com/blog/email-frio-vs-publicidad-google",
    locale: "es_ES",
  },
};

export default function ArticleES2() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-16" />
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span>Email Frío vs. Google Ads</span>
          </div>

          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">Estrategia</span>
              <span className="text-xs font-bold bg-success/10 text-success px-3 py-1 rounded-full">ES</span>
              <span className="text-xs text-muted-foreground">18 de marzo, 2026 · 7 min</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Email Frío vs. Google Ads para B2B: ¿Cuál Funciona Mejor en 2026?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Google Ads solía ser la forma más rápida de conseguir leads B2B. En 2026, los números cuentan una historia muy diferente. Aquí está la comparativa completa.
            </p>
          </div>

          <div className="space-y-8 text-foreground">

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">El Panorama Ha Cambiado Radicalmente</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hace cinco años, Google Ads era una máquina de leads fiable para muchas empresas B2B. Hoy, la IA de Google está respondiendo directamente a las búsquedas — lo que significa que menos usuarios hacen clic en anuncios. Los costes por clic están subiendo mientras los volúmenes de búsqueda relevantes bajan.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Al mismo tiempo, el email frío ha madurado enormemente. Las herramientas de personalización, verificación y entregabilidad han avanzado hasta el punto donde una campaña bien ejecutada puede generar un retorno de 10x o más sobre la inversión.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Comparativa: Coste por Lead</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 pr-4 text-foreground font-semibold">Métrica</th>
                      <th className="text-center py-3 px-4 text-foreground font-semibold">Google Ads B2B</th>
                      <th className="text-center py-3 pl-4 text-success font-semibold">Email Frío</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    {[
                      ["Coste por lead medio", "80€–250€", "3€–15€"],
                      ["Coste por reunión", "300€–1.000€+", "30€–150€"],
                      ["Tiempo hasta primer lead", "Inmediato", "7–14 días"],
                      ["Escalabilidad", "Solo pagando más", "Ilimitada"],
                      ["Propiedad de los datos", "Google los controla", "Tuyos para siempre"],
                      ["Impacto si paras", "0 leads inmediatamente", "La lista sigue siendo tuya"],
                      ["Segmentación B2B", "Por palabras clave", "Por cargo, empresa, sector"],
                    ].map(([metric, google, email]) => (
                      <tr key={metric}>
                        <td className="py-3 pr-4 text-muted-foreground">{metric}</td>
                        <td className="py-3 px-4 text-center text-muted-foreground">{google}</td>
                        <td className="py-3 pl-4 text-center text-success font-medium">{email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">El Problema de la Dependencia en Google</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cuando inviertes en Google Ads, básicamente estás alquilando visibilidad. El día que dejas de pagar, tus leads se detienen completamente. No hay nada acumulado, no hay activo construido.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Además, Google puede cambiar sus políticas, aumentar los precios o degradar la visibilidad de tus anuncios en cualquier momento. Muchas empresas han visto sus costes por clic triplicarse de un año para otro sin cambios en su producto.
              </p>
              <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 mt-4">
                <p className="text-foreground font-medium">⚠️ El mayor riesgo de Google Ads: dependes completamente de una plataforma que no controlas y que puede dejar de funcionar para tu negocio de un día para otro.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">La Ventaja Acumulativa del Email Frío</h2>
              <p className="text-muted-foreground leading-relaxed">
                Con el email frío, cada prospecto que contactas se convierte en un activo tuyo. La lista de contactos que construyes es permanente — nadie puede quitártela. Con el tiempo, esa lista puede convertirse en una newsletter, en una base de datos de remarketing, o simplemente en contactos que puedes volver a activar cuando lanzas nuevos servicios.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Además, los datos que recopilas sobre qué ángulos de mensaje funcionan mejor, qué sectores responden más, y qué propuestas de valor resuenan — todo eso es conocimiento propietario que mejora con el tiempo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">¿Cuándo Tiene Sentido Google Ads para B2B?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Google Ads sigue teniendo su lugar en algunas situaciones B2B:
              </p>
              <ul className="list-none space-y-2 mt-3">
                {[
                  "Productos con alta intención de búsqueda (software específico, categorías bien definidas)",
                  "Ciclos de compra muy cortos donde el prospecto ya sabe lo que busca",
                  "Marcas con suficiente volumen para optimizar las campañas con datos reales",
                  "Complemento al email frío, no sustituto",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="text-primary mt-1 flex-shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">El Veredicto para Empresas B2B en 2026</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para la gran mayoría de empresas B2B — especialmente las que venden servicios o software de ticket medio-alto — el email frío ofrece un ROI sustancialmente mejor que Google Ads, con más control, más escalabilidad y sin dependencia de una plataforma externa.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La recomendación: empieza con email frío para construir tu pipeline. Una vez que tienes tracción y prueba de concepto, puedes añadir Google Ads como canal complementario si tiene sentido para tu negocio.
              </p>
            </section>

          </div>

          <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-foreground mb-3">¿Listo para probar el email frío?</h3>
            <p className="text-primary-foreground/80 mb-6">Te mostramos exactamente cuántas reuniones podemos generar para tu negocio.</p>
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
              <Link href="/blog/agencia-prospección-b2b-guia" className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                <p className="text-xs text-primary font-medium mb-2">Prospección</p>
                <h4 className="font-semibold text-foreground text-sm leading-snug">Guía para Elegir una Agencia de Prospección B2B</h4>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
