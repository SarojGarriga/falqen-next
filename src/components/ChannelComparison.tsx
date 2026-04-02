"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Link2, Globe, Megaphone, Phone, Shield, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { useLang } from "@/components/LangProvider";

interface ChannelComparisonProps {
  onCtaClick: () => void;
}

type Rating = "excellent" | "good" | "average" | "poor" | "terrible";

const ratingColor = (r: Rating) => {
  if (r === "excellent" || r === "good") return "text-success";
  if (r === "average") return "text-muted-foreground";
  return "text-destructive";
};

const ratingBg = (r: Rating) => {
  if (r === "excellent" || r === "good") return "bg-success/10";
  if (r === "average") return "bg-muted/50";
  return "bg-destructive/10";
};

const T = {
  en: {
    h2a: "Email Beats", h2b: "Everything Else",
    p: "See for yourself. We put email next to every other option. Green = good. Red = bad.",
    ownKey: "🔑 With Email, YOU Own Everything",
    ownP1: "Google, Facebook, Instagram — they can change the rules any time. Google is already using AI to answer questions, so fewer people click on ads. One update and your money is gone. But your email list is YOURS. Nobody can take it away. No algorithm. No policy change. It's like owning a house vs. renting one.",
    ownP2: "Plus, your email list can become a newsletter — a way to stay in touch with thousands of people and sell to them again and again, for free.",
    ownBtn: "Show Me How It Works",
    ctaBtn: "I Want Email Outreach",
    bestChoice: "✦ BEST CHOICE",
    rows: ["Who owns it?", "Cost per lead", "Can you scale it?", "Finding the right people", "Can they shut you down?", "How fast?", "Long-term value"],
    channels: [
      {
        name: "Email & LinkedIn", highlight: true,
        values: ["You do!", "$3–$15", "As much as you want", "We pick exactly who", "No — it's your list", "7–14 days", "Builds forever"],
        ratings: ["excellent","excellent","excellent","excellent","excellent","good","excellent"] as Rating[],
        verdict: "You keep every contact forever. No one can take your list away. It only gets better with time.",
      },
      {
        name: "Google Ads", highlight: false,
        values: ["Google does", "$50–$300", "Only if you pay more", "Based on keywords", "Yes — AI killing ads", "Right away", "Stop paying = no leads"],
        ratings: ["terrible","terrible","average","average","terrible","good","terrible"] as Rating[],
        verdict: "Very expensive. Google's AI is making ads harder to see. When you stop paying, leads stop.",
      },
      {
        name: "Meta / Facebook Ads", highlight: false,
        values: ["Meta does", "$30–$200", "Only if you pay more", "Guesses by interest", "Yes — any day", "Right away", "Stop paying = no leads"],
        ratings: ["terrible","poor","average","poor","terrible","good","terrible"] as Rating[],
        verdict: "Bad for B2B. You can't pick job titles or company sizes. One change and your ads stop working.",
      },
      {
        name: "Cold Calling", highlight: false,
        values: ["You do", "$25–$100", "Need more people", "Manual work", "No", "Same day", "None — people burn out"],
        ratings: ["good","poor","poor","average","good","good","poor"] as Rating[],
        verdict: "It works, but you need to hire people. They burn out fast. Most calls go to voicemail.",
      },
    ],
  },
  es: {
    h2a: "El Email Gana a", h2b: "Todo lo Demás",
    p: "Compáralo tú mismo. Verde = bueno. Rojo = malo.",
    ownKey: "🔑 Con Email, TÚ eres el Dueño",
    ownP1: "Google, Facebook, Instagram — pueden cambiar las reglas cuando quieran. La IA de Google ya está respondiendo búsquedas directamente, así que menos gente hace clic en anuncios. Una actualización y tu dinero desaparece. Pero tu lista de emails es TUYA. Nadie puede quitártela. Sin algoritmos. Sin cambios de política.",
    ownP2: "Además, tu lista de emails puede convertirse en una newsletter — una forma de mantenerte en contacto con miles de personas y venderles una y otra vez, gratis.",
    ownBtn: "Muéstrame Cómo Funciona",
    ctaBtn: "Quiero Email Outreach",
    bestChoice: "✦ MEJOR OPCIÓN",
    rows: ["¿Quién lo posee?", "Coste por lead", "¿Se puede escalar?", "Encontrar al cliente ideal", "¿Te pueden cerrar?", "¿Qué tan rápido?", "Valor a largo plazo"],
    channels: [
      {
        name: "Email & LinkedIn", highlight: true,
        values: ["¡Tú!", "$3–$15", "Todo lo que quieras", "Elegimos exactamente a quién", "No — es tu lista", "7–14 días", "Crece para siempre"],
        ratings: ["excellent","excellent","excellent","excellent","excellent","good","excellent"] as Rating[],
        verdict: "Conservas cada contacto para siempre. Nadie puede quitarte tu lista. Solo mejora con el tiempo.",
      },
      {
        name: "Google Ads", highlight: false,
        values: ["Google", "$50–$300", "Solo pagando más", "Por palabras clave", "Sí — la IA lo destruye", "Inmediatamente", "Paras de pagar = 0 leads"],
        ratings: ["terrible","terrible","average","average","terrible","good","terrible"] as Rating[],
        verdict: "Muy caro. La IA de Google hace que los anuncios sean menos visibles. Si dejas de pagar, los leads paran.",
      },
      {
        name: "Meta / Facebook Ads", highlight: false,
        values: ["Meta", "$30–$200", "Solo pagando más", "Adivina por intereses", "Sí — cuando quieran", "Inmediatamente", "Paras de pagar = 0 leads"],
        ratings: ["terrible","poor","average","poor","terrible","good","terrible"] as Rating[],
        verdict: "Malo para B2B. No puedes elegir cargo ni tamaño de empresa. Un cambio y tus anuncios dejan de funcionar.",
      },
      {
        name: "Llamadas en Frío", highlight: false,
        values: ["Tú", "$25–$100", "Necesitas más personas", "Trabajo manual", "No", "El mismo día", "Ninguno — se agotan"],
        ratings: ["good","poor","poor","average","good","good","poor"] as Rating[],
        verdict: "Funciona, pero necesitas contratar gente. Se queman rápido. La mayoría de llamadas van al buzón.",
      },
    ],
  },
};

const channelIcons = [
  [Mail, Link2],
  [Globe],
  [Megaphone],
  [Phone],
];

const ChannelComparison = ({ onCtaClick }: ChannelComparisonProps) => {
  const lang = useLang();
  const t = T[lang];

  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            {t.h2a} <span className="text-primary">{t.h2b}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.p}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-14">
          <Card className="rounded-2xl border-primary/20 bg-gradient-to-r from-primary/5 to-success/5">
            <CardContent className="p-6 md:p-8 flex gap-4 items-start">
              <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">{t.ownKey}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">{t.ownP1}</p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">{t.ownP2}</p>
                <Button onClick={onCtaClick} className="rounded-2xl font-semibold">
                  {t.ownBtn} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {t.channels.map((ch, idx) => {
            const icons = channelIcons[idx];
            return (
              <motion.div key={ch.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <Card className={`rounded-2xl h-full transition-shadow duration-300 ${ch.highlight ? "border-success shadow-lg shadow-success/10 ring-2 ring-success/30" : "border-border/50 hover:shadow-md"}`}>
                  {ch.highlight && (
                    <div className="bg-success text-success-foreground text-center text-xs font-bold py-2 rounded-t-2xl">
                      {t.bestChoice}
                    </div>
                  )}
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      {icons.map((Icon, i) => (
                        <div key={i} className={`h-10 w-10 rounded-lg flex items-center justify-center ${ch.highlight ? "bg-success/10" : "bg-secondary"}`}>
                          <Icon className={`h-5 w-5 ${ch.highlight ? "text-success" : "text-muted-foreground"}`} />
                        </div>
                      ))}
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-4">{ch.name}</h3>
                    <div className="space-y-2.5">
                      {t.rows.map((rowLabel, ri) => {
                        const rating = ch.ratings[ri];
                        return (
                          <div key={ri} className={`flex items-center justify-between p-2 rounded-lg ${ratingBg(rating)}`}>
                            <span className="text-xs text-muted-foreground">{rowLabel}</span>
                            <span className={`text-xs font-semibold flex items-center gap-1 ${ratingColor(rating)}`}>
                              {(rating === "excellent" || rating === "good") ? <CheckCircle2 className="h-3 w-3" /> :
                               (rating === "poor" || rating === "terrible") ? <XCircle className="h-3 w-3" /> : null}
                              {ch.values[ri]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">{ch.verdict}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary/80">
            {t.ctaBtn} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChannelComparison;
