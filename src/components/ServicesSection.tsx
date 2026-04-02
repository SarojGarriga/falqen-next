"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Link2, Shield, Sparkles, Users, RefreshCw, MessageSquare, Target, ArrowRight, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/components/LangProvider";

interface ServicesSectionProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    h2: "How We Get You Clients",
    p: "We do all the hard work. You just show up and close the deal.",
    btn: "Tell Us About Your Business — It's Free",
    services: [
      {
        title: "Cold Email",
        description: "We write and send thousands of personal emails to people who need what you sell. They land in the inbox — not spam.",
        features: [
          "Your main website stays 100% safe",
          "Each email is written just for them",
          "We test and improve every week",
          "Only people who fit your business",
        ],
        cta: "Start Getting Emails Out",
      },
      {
        title: "LinkedIn Messages",
        description: "We connect with your ideal clients on LinkedIn and start real conversations that turn into sales calls.",
        features: [
          "We make your profile look amazing",
          "Friendly messages that get replies",
          "Follow-up messages that work",
          "We find the right people for you",
        ],
        cta: "Start LinkedIn Outreach",
      },
    ],
  },
  es: {
    h2: "Cómo Conseguimos tus Clientes",
    p: "Hacemos todo el trabajo duro. Tú solo apareces y cierras el deal.",
    btn: "Cuéntanos tu Negocio — Es Gratis",
    services: [
      {
        title: "Email Frío",
        description: "Escribimos y enviamos miles de emails personalizados a personas que necesitan lo que vendes. Llegan a la bandeja de entrada — no al spam.",
        features: [
          "Tu dominio principal siempre seguro",
          "Cada email escrito específicamente para ellos",
          "Testeamos y mejoramos cada semana",
          "Solo contactamos a quien encaja con tu negocio",
        ],
        cta: "Empezar con Email Frío",
      },
      {
        title: "Mensajes de LinkedIn",
        description: "Conectamos con tus clientes ideales en LinkedIn e iniciamos conversaciones reales que se convierten en llamadas de ventas.",
        features: [
          "Optimizamos tu perfil de LinkedIn",
          "Mensajes que generan respuestas",
          "Follow-ups que funcionan",
          "Encontramos a las personas correctas",
        ],
        cta: "Empezar con LinkedIn",
      },
    ],
  },
};

const icons = [
  [Shield, Sparkles, RefreshCw, Target],
  [Users, MessageSquare, RefreshCw, Target],
];
const serviceIcons = [Mail, Link2];

const ServicesSection = ({ onCtaClick }: ServicesSectionProps) => {
  const lang = useLang();
  const t = T[lang];

  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{t.h2}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.p}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {t.services.map((service, idx) => {
            const ServiceIcon = serviceIcons[idx];
            const featureIcons = icons[idx];
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
                <Card className="rounded-2xl border-border/50 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <ServiceIcon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((f, fi) => {
                        const FIcon = featureIcons[fi];
                        return (
                          <li key={fi} className="flex items-center gap-3">
                            <FIcon className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{f}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <Button onClick={onCtaClick} variant="outline" className="rounded-xl w-full font-semibold border-primary/20 hover:bg-primary/5">
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            <Rocket className="mr-2 h-5 w-5" /> {t.btn}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
