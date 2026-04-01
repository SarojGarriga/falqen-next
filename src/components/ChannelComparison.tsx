"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Link2, Globe, Megaphone, Phone, Shield, ArrowRight, CheckCircle2, XCircle } from "lucide-react";

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

interface Channel {
  name: string;
  icon: React.ElementType;
  secondIcon?: React.ElementType;
  highlight: boolean;
  rows: { label: string; value: string; rating: Rating }[];
  verdict: string;
}

const channels: Channel[] = [
  {
    name: "Email & LinkedIn",
    icon: Mail,
    secondIcon: Link2,
    highlight: true,
    rows: [
      { label: "Who owns it?", value: "You do!", rating: "excellent" },
      { label: "Cost per lead", value: "$3–$15", rating: "excellent" },
      { label: "Can you scale it?", value: "As much as you want", rating: "excellent" },
      { label: "Finding the right people", value: "We pick exactly who", rating: "excellent" },
      { label: "Can they shut you down?", value: "No — it's your list", rating: "excellent" },
      { label: "How fast?", value: "7–14 days", rating: "good" },
      { label: "Long-term value", value: "Builds forever", rating: "excellent" },
    ],
    verdict: "You keep every contact forever. No one can take your list away. It only gets better with time.",
  },
  {
    name: "Google Ads",
    icon: Globe,
    highlight: false,
    rows: [
      { label: "Who owns it?", value: "Google does", rating: "terrible" },
      { label: "Cost per lead", value: "$50–$300", rating: "terrible" },
      { label: "Can you scale it?", value: "Only if you pay more", rating: "average" },
      { label: "Finding the right people", value: "Based on keywords", rating: "average" },
      { label: "Can they shut you down?", value: "Yes — AI killing ads", rating: "terrible" },
      { label: "How fast?", value: "Right away", rating: "good" },
      { label: "Long-term value", value: "Stop paying = no leads", rating: "terrible" },
    ],
    verdict: "Very expensive. Google's AI is making ads harder to see. When you stop paying, leads stop.",
  },
  {
    name: "Meta / Facebook Ads",
    icon: Megaphone,
    highlight: false,
    rows: [
      { label: "Who owns it?", value: "Meta does", rating: "terrible" },
      { label: "Cost per lead", value: "$30–$200", rating: "poor" },
      { label: "Can you scale it?", value: "Only if you pay more", rating: "average" },
      { label: "Finding the right people", value: "Guesses by interest", rating: "poor" },
      { label: "Can they shut you down?", value: "Yes — any day", rating: "terrible" },
      { label: "How fast?", value: "Right away", rating: "good" },
      { label: "Long-term value", value: "Stop paying = no leads", rating: "terrible" },
    ],
    verdict: "Bad for B2B. You can't pick job titles or company sizes. One change and your ads stop working.",
  },
  {
    name: "Cold Calling",
    icon: Phone,
    highlight: false,
    rows: [
      { label: "Who owns it?", value: "You do", rating: "good" },
      { label: "Cost per lead", value: "$25–$100", rating: "poor" },
      { label: "Can you scale it?", value: "Need more people", rating: "poor" },
      { label: "Finding the right people", value: "Manual work", rating: "average" },
      { label: "Can they shut you down?", value: "No", rating: "good" },
      { label: "How fast?", value: "Same day", rating: "good" },
      { label: "Long-term value", value: "None — people burn out", rating: "poor" },
    ],
    verdict: "It works, but you need to hire people. They burn out fast. Most calls go to voicemail.",
  },
];

const ChannelComparison = ({ onCtaClick }: ChannelComparisonProps) => {
  return (
    <section id="comparison" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Email Beats <span className="text-primary">Everything Else</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See for yourself. We put email next to every other option. Green = good. Red = bad.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto mb-14">
          <Card className="rounded-2xl border-primary/20 bg-gradient-to-r from-primary/5 to-success/5">
            <CardContent className="p-6 md:p-8 flex gap-4 items-start">
              <Shield className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">🔑 With Email, YOU Own Everything</h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  Google, Facebook, Instagram — they can change the rules any time. Google is already using AI to answer questions, so fewer people click on ads.
                  One update and your money is gone. But <strong className="text-success">your email list is YOURS</strong>. Nobody can take it away.
                  No algorithm. No policy change. It&apos;s like owning a house vs. renting one.
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  Plus, your email list can become a <strong className="text-foreground">newsletter</strong> — a way to stay in touch with thousands of people and sell to them again and again, for free.
                </p>
                <Button onClick={onCtaClick} className="rounded-2xl font-semibold">
                  Show Me How It Works <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {channels.map((ch, idx) => (
            <motion.div key={ch.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
              <Card className={`rounded-2xl h-full transition-shadow duration-300 ${ch.highlight ? "border-success shadow-lg shadow-success/10 ring-2 ring-success/30" : "border-border/50 hover:shadow-md"}`}>
                {ch.highlight && (
                  <div className="bg-success text-success-foreground text-center text-xs font-bold py-2 rounded-t-2xl">
                    ✦ BEST CHOICE
                  </div>
                )}
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${ch.highlight ? "bg-success/10" : "bg-secondary"}`}>
                      <ch.icon className={`h-5 w-5 ${ch.highlight ? "text-success" : "text-muted-foreground"}`} />
                    </div>
                    {ch.secondIcon && (
                      <div className="h-10 w-10 rounded-lg bg-success/10 flex items-center justify-center">
                        <ch.secondIcon className="h-5 w-5 text-success" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-4">{ch.name}</h3>
                  <div className="space-y-2.5">
                    {ch.rows.map((row) => (
                      <div key={row.label} className={`flex items-center justify-between p-2 rounded-lg ${ratingBg(row.rating)}`}>
                        <span className="text-xs text-muted-foreground">{row.label}</span>
                        <span className={`text-xs font-semibold flex items-center gap-1 ${ratingColor(row.rating)}`}>
                          {(row.rating === "excellent" || row.rating === "good") ? <CheckCircle2 className="h-3 w-3" /> :
                           (row.rating === "poor" || row.rating === "terrible") ? <XCircle className="h-3 w-3" /> : null}
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed border-t border-border pt-3">{ch.verdict}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-primary/80">
            I Want Email Outreach <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChannelComparison;
