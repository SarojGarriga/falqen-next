"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, CalendarCheck, DollarSign, Rocket } from "lucide-react";
import { useLang } from "@/components/LangProvider";

interface GrowthCalculatorProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    h2: "How Much Money Could You Make?",
    p: "Move the sliders or click the numbers to type. See how many clients and how much money you could get every month.",
    label1: "How many emails we send for you per month",
    label2: "How much is one sale worth to you?",
    stat1: "People Who Reply", stat2: "Calls Booked", stat3: "Money You Could Make",
    btn1: "I Want These Results", btn2: "Let's Talk — Free Call",
    clickHint: "Click to type a number",
  },
  es: {
    h2: "¿Cuánto Dinero Podrías Ganar?",
    p: "Mueve los sliders o haz clic en los números para escribir. Ve cuántos clientes y cuánto dinero podrías conseguir al mes.",
    label1: "Cuántos emails enviamos por ti al mes",
    label2: "¿Cuánto vale para ti una venta?",
    stat1: "Personas que Responden", stat2: "Llamadas Reservadas", stat3: "Dinero que Podrías Ganar",
    btn1: "Quiero Estos Resultados", btn2: "Hablemos — Llamada Gratis",
    clickHint: "Haz clic para escribir un número",
  },
};

const EditableValue = ({ value, onChange, min, max, prefix = "", hint = "" }: {
  value: number; onChange: (v: number) => void; min: number; max: number; prefix?: string; hint?: string;
}) => {
  const [editing, setEditing] = useState(false);
  const [temp, setTemp] = useState(String(value));

  const commit = () => {
    const parsed = parseInt(temp.replace(/[^0-9]/g, ""), 10);
    if (!isNaN(parsed)) onChange(Math.max(min, Math.min(max, parsed)));
    setEditing(false);
  };

  if (editing) {
    return (
      <input
        autoFocus
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => e.key === "Enter" && commit()}
        className="text-2xl font-bold text-primary bg-transparent border-b-2 border-primary outline-none w-32 text-right"
      />
    );
  }

  return (
    <span
      onClick={() => { setTemp(String(value)); setEditing(true); }}
      className="text-2xl font-bold text-primary cursor-pointer hover:underline decoration-dotted underline-offset-4"
      title={hint}
    >
      {prefix}{value.toLocaleString()}
    </span>
  );
};

const GrowthCalculator = ({ onCtaClick }: GrowthCalculatorProps) => {
  const lang = useLang();
  const t = T[lang];
  const [volume, setVolume] = useState(10000);
  const [dealValue, setDealValue] = useState(5000);

  const replies = Math.round(volume * 0.04);
  const bookings = Math.round(replies * 0.1);
  const revenue = Math.round(bookings * dealValue * 0.2);

  const results = [
    { label: t.stat1, value: replies.toLocaleString(), icon: MessageSquare, color: "text-primary" },
    { label: t.stat2, value: bookings.toLocaleString(), icon: CalendarCheck, color: "text-primary" },
    { label: t.stat3, value: `$${revenue.toLocaleString()}`, icon: DollarSign, color: "text-success", highlight: true },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{t.h2}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.p}</p>
        </motion.div>

        <Card className="rounded-2xl border-border/50 shadow-lg">
          <CardContent className="p-8 md:p-10 space-y-10">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium text-foreground">{t.label1}</label>
                <EditableValue value={volume} onChange={setVolume} min={500} max={500000} hint={t.clickHint} />
              </div>
              <Slider value={[volume]} onValueChange={(v) => setVolume(v[0])} min={500} max={500000} step={500} className="cursor-pointer" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>500</span><span>500,000</span></div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium text-foreground">{t.label2}</label>
                <EditableValue value={dealValue} onChange={setDealValue} min={1000} max={50000} prefix="$" hint={t.clickHint} />
              </div>
              <Slider value={[dealValue]} onValueChange={(v) => setDealValue(v[0])} min={1000} max={50000} step={500} className="cursor-pointer" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>$1,000</span><span>$50,000</span></div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {results.map((r) => (
                <motion.div key={r.label} layout className={`rounded-xl p-5 text-center ${r.highlight ? "bg-success/10 border border-success/20" : "bg-secondary"}`}>
                  <r.icon className={`h-6 w-6 mx-auto mb-2 ${r.color}`} />
                  <div className={`text-3xl font-bold ${r.color}`}>{r.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary/80">
                {t.btn1} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={onCtaClick} size="lg" variant="outline" className="rounded-2xl px-8 py-6 text-base font-semibold border-primary/20">
                <Rocket className="mr-2 h-5 w-5" /> {t.btn2}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GrowthCalculator;
