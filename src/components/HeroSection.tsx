"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, CalendarCheck, TrendingUp, Users, DollarSign, BarChart3, Mail } from "lucide-react";
import { useLang } from "@/components/LangProvider";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    badge: "We send 500K+ emails every month",
    h1a: "We Get You", h1b: "Sales Meetings.", h1c: "You Just", h1d: "Close Deals.", h1e: "That Simple.",
    p: "We send emails and LinkedIn messages to people who need what you sell. They reply. They book a call with you. You close the deal. We handle everything else.",
    btn1: "I Want More Clients", btn2: "Talk to Us Free",
    tag1: "Email", tag2: "LinkedIn", tag3: "More Clients",
    liveNow: "Live Right Now", livePing: "Campaigns sending right now",
    todayLabel: "Emails Sent Today", counting: "and counting...",
    stat1: "Total Emails Sent", stat2: "Total Meetings Booked", stat3: "Deals This Week", stat4: "Reply Rate",
    ai: "AI Powered", updates: "Updates Daily",
  },
  es: {
    badge: "Enviamos más de 500.000 emails al mes",
    h1a: "Conseguimos tus", h1b: "Reuniones de Ventas.", h1c: "Tú Solo", h1d: "Cierras Deals.", h1e: "Así de Simple.",
    p: "Enviamos emails y mensajes de LinkedIn a las personas que necesitan lo que vendes. Ellos responden. Reservan una llamada. Tú cierras el deal. Nosotros nos encargamos de todo lo demás.",
    btn1: "Quiero Más Clientes", btn2: "Hablar Gratis",
    tag1: "Email", tag2: "LinkedIn", tag3: "Más Clientes",
    liveNow: "En Tiempo Real", livePing: "Campañas enviando ahora mismo",
    todayLabel: "Emails Enviados Hoy", counting: "y contando...",
    stat1: "Total Emails Enviados", stat2: "Reuniones Totales", stat3: "Deals Esta Semana", stat4: "Tasa de Respuesta",
    ai: "Powered by IA", updates: "Se actualiza cada día",
  },
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const getCounterValues = () => {
  const baseDate = new Date("2024-01-01");
  const now = new Date();
  const daysSince = Math.floor((now.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24));
  const dayOfWeek = now.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  let emailTotal = 1_245_890;
  let meetingsTotal = 476_259;
  for (let d = 0; d < daysSince; d++) {
    const date = new Date(baseDate.getTime() + d * 86400000);
    const dow = date.getDay();
    if (dow === 0 || dow === 6) continue;
    emailTotal += Math.round(1483 + seededRandom(d * 7 + 1) * (7043 - 1483));
  }
  const weeksSince = Math.floor(daysSince / 7);
  for (let w = 0; w < weeksSince; w++) {
    meetingsTotal += Math.round(452 + seededRandom(w * 13 + 3) * (954 - 452));
  }
  const weekStart = daysSince - (dayOfWeek === 0 ? 6 : dayOfWeek - 1);
  const weeklyDeals = Math.round(452 + seededRandom(weekStart * 17 + daysSince) * (954 - 452));
  const todayEmails = isWeekend ? 0 : Math.round(1483 + seededRandom(daysSince * 31 + 5) * (7043 - 1483));
  const replyRate = (5.32 + seededRandom(daysSince * 41 + 9) * (9 - 5.32)).toFixed(2);
  return { emailTotal, meetingsTotal, weeklyDeals, todayEmails, replyRate };
};

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const lang = useLang();
  const t = T[lang];
  const values = useMemo(() => getCounterValues(), []);

  const particles = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 6 + 2, duration: Math.random() * 10 + 15, delay: Math.random() * 5,
    })), []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-success/5 -z-10" />
      <div className="absolute top-0 left-0 right-0 h-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.12),transparent_60%)] -z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--success)/0.08),transparent_60%)] -z-10" />
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-success/8 rounded-full blur-[80px] -z-10" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/6 rounded-full blur-[60px] -z-10" />
      <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {particles.map((p) => (
        <motion.div key={p.id} className="absolute rounded-full bg-primary/15 -z-5"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -40, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Zap className="h-4 w-4" />
              {t.badge}
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
              {t.h1a}{" "}<span className="text-primary">{t.h1b}</span><br />
              {t.h1c}{" "}<span className="text-primary">{t.h1d}</span><br />
              <span className="bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">{t.h1e}</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">{t.p}</p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all bg-gradient-to-r from-primary to-primary/80">
                  {t.btn1} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button onClick={onCtaClick} variant="outline" size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold border-primary/20 hover:bg-primary/5">
                  {t.btn2}
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> {t.tag1}</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {t.tag2}</div>
              <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-success" /> {t.tag3}</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="relative">
            <div className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BarChart3 className="h-4 w-4" /> {t.liveNow}
            </div>

            <Card className="rounded-2xl border-border/50 shadow-xl relative overflow-hidden">
              <CardContent className="p-6">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, type: "spring" }}
                  className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-bold">
                  +850% ROI
                </motion.div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                  </span>
                  <span className="text-xs text-muted-foreground">{t.livePing}</span>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 mb-4 border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{t.todayLabel}</span>
                  </div>
                  <div className="text-5xl font-bold text-primary">{values.todayEmails.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground mt-1">{t.counting}</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary rounded-xl p-4">
                    <Zap className="h-4 w-4 text-primary mb-1" />
                    <div className="text-lg font-bold text-primary">{values.emailTotal.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">{t.stat1}</div>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <CalendarCheck className="h-4 w-4 text-success mb-1" />
                    <div className="text-lg font-bold text-success">{values.meetingsTotal.toLocaleString()}</div>
                    <div className="text-[10px] text-muted-foreground">{t.stat2}</div>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <DollarSign className="h-4 w-4 text-primary mb-1" />
                    <div className="text-lg font-bold text-primary">{values.weeklyDeals}</div>
                    <div className="text-[10px] text-muted-foreground">{t.stat3}</div>
                  </div>
                  <div className="bg-secondary rounded-xl p-4">
                    <TrendingUp className="h-4 w-4 text-success mb-1" />
                    <div className="text-lg font-bold text-success">{values.replyRate}%</div>
                    <div className="text-[10px] text-muted-foreground">{t.stat4}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="absolute -bottom-3 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              ⚡ {t.ai}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }}
              className="absolute -bottom-3 right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
              {t.updates}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
