"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Globe, Mail, Rocket, BarChart3, Phone, Target, FileCheck, ShieldCheck, ArrowRight, Flame } from "lucide-react";
import { useLang } from "@/components/LangProvider";

interface ProcessSimulatorProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    h2a: "See How It", h2b: "Works",
    p: "Our complete 10-step process. Every step is visible. Nothing is hidden.",
    btn: "Start This Process For Me",
    stepLabel: "STEP",
    steps: [
      { title: "Define Offer, Goals & ICP", description: "We define your ideal customer profile, your offer angle, and the goals for the campaign." },
      { title: "Scrape Leads by Title, Industry & Tech", description: "Using premium B2B databases and live scrapers, we find thousands of decision-makers matching your ICP." },
      { title: "Clean & Verify Lead List", description: "Every email is verified. Bad addresses are removed. Only real, deliverable contacts make the cut." },
      { title: "Buy Domains & Create Inboxes", description: "We purchase similar domains and set up dedicated sending inboxes." },
      { title: "Set Up SPF, DKIM, DMARC", description: "Technical authentication protocols are configured to maximize deliverability." },
      { title: "Warm Inboxes to 100% Health", description: "New inboxes are warmed over 7-14 days until they reach full sending capacity." },
      { title: "Write Copy & 3-5 Follow-ups", description: "AI-personalized email sequences with A/B tested subject lines and multiple follow-up angles." },
      { title: "Launch & Scale Campaign", description: "Campaign goes live. We monitor inbox health and scale volume progressively." },
      { title: "Monitor Reply Rates & Iterate", description: "We track reply rates. If below threshold, we refine copy, targeting, or offer angle." },
      { title: "Book Calls & Push Leads to You", description: "Positive replies are tagged, nurtured, and pushed directly to your calendar. You just close." },
    ],
  },
  es: {
    h2a: "Así Es Como", h2b: "Funciona",
    p: "Nuestro proceso completo de 10 pasos. Todo es visible. Nada está oculto.",
    btn: "Empezar Este Proceso Para Mí",
    stepLabel: "PASO",
    steps: [
      { title: "Definimos Oferta, Objetivos e ICP", description: "Definimos tu perfil de cliente ideal, el ángulo de tu oferta y los objetivos de la campaña." },
      { title: "Scrapeamos Leads por Cargo, Industria y Tecnología", description: "Usando bases de datos B2B premium, encontramos miles de decisores que coinciden con tu ICP." },
      { title: "Limpiamos y Verificamos la Lista", description: "Cada email es verificado. Se eliminan las direcciones incorrectas. Solo contactos reales y entregables." },
      { title: "Compramos Dominios y Creamos Bandejas", description: "Adquirimos dominios similares y configuramos bandejas de entrada dedicadas al outreach." },
      { title: "Configuramos SPF, DKIM, DMARC", description: "Configuramos los protocolos de autenticación técnica para maximizar la entregabilidad." },
      { title: "Calentamos las Bandejas al 100%", description: "Las nuevas bandejas se calientan durante 7-14 días hasta alcanzar capacidad total de envío." },
      { title: "Escribimos Copy y 3-5 Follow-ups", description: "Secuencias de email personalizadas con IA, líneas de asunto A/B testeadas y múltiples follow-ups." },
      { title: "Lanzamos y Escalamos la Campaña", description: "La campaña se activa. Monitorizamos la salud de las bandejas y escalamos el volumen progresivamente." },
      { title: "Monitorizamos Respuestas e Iteramos", description: "Seguimos las tasas de respuesta. Si están por debajo del umbral, refinamos el copy, targeting u oferta." },
      { title: "Agendamos Llamadas y te las Enviamos", description: "Las respuestas positivas se filtran y se empujan directamente a tu calendario. Tú solo cierras." },
    ],
  },
};

const stepColors = [
  "from-primary/20 to-primary/5",
  "from-blue-500/20 to-blue-500/5",
  "from-emerald-500/20 to-emerald-500/5",
  "from-violet-500/20 to-violet-500/5",
  "from-amber-500/20 to-amber-500/5",
  "from-orange-500/20 to-orange-500/5",
  "from-cyan-500/20 to-cyan-500/5",
  "from-pink-500/20 to-pink-500/5",
  "from-indigo-500/20 to-indigo-500/5",
  "from-success/20 to-success/5",
];

const stepIcons = [Target, Search, FileCheck, Globe, ShieldCheck, Flame, Mail, Rocket, BarChart3, Phone];

const ProcessSimulator = ({ onCtaClick }: ProcessSimulatorProps) => {
  const lang = useLang();
  const t = T[lang];

  return (
    <section id="simulator" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.h2a} <span className="text-primary">{t.h2b}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.p}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
          {t.steps.map((step, i) => {
            const StepIcon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stepColors[i]} border border-border/50 p-6 group cursor-default transition-shadow hover:shadow-lg`}
              >
                <span className="absolute top-3 right-4 text-6xl font-black text-foreground/[0.04] select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="h-12 w-12 rounded-xl bg-background/80 backdrop-blur flex items-center justify-center flex-shrink-0 shadow-sm border border-border/50 group-hover:scale-110 transition-transform">
                    <StepIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary/70">{t.stepLabel} {i + 1}</span>
                    </div>
                    <h4 className="font-bold text-foreground text-base leading-tight mb-1.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {i < t.steps.length - 1 && i % 2 === 0 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 z-20">
                    <ArrowRight className="h-5 w-5 text-primary/30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary/80">
            {t.btn} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSimulator;
