"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Link2, Shield, Sparkles, Users, RefreshCw, MessageSquare, Target, ArrowRight, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServicesSectionProps {
  onCtaClick: () => void;
}

const services = [
  {
    title: "Cold Email",
    icon: Mail,
    description: "We write and send thousands of personal emails to people who need what you sell. They land in the inbox — not spam.",
    features: [
      { icon: Shield, text: "Your main website stays 100% safe" },
      { icon: Sparkles, text: "Each email is written just for them" },
      { icon: RefreshCw, text: "We test and improve every week" },
      { icon: Target, text: "Only people who fit your business" },
    ],
    cta: "Start Getting Emails Out",
  },
  {
    title: "LinkedIn Messages",
    icon: Link2,
    description: "We connect with your ideal clients on LinkedIn and start real conversations that turn into sales calls.",
    features: [
      { icon: Users, text: "We make your profile look amazing" },
      { icon: MessageSquare, text: "Friendly messages that get replies" },
      { icon: RefreshCw, text: "Follow-up messages that work" },
      { icon: Target, text: "We find the right people for you" },
    ],
    cta: "Start LinkedIn Outreach",
  },
];

const ServicesSection = ({ onCtaClick }: ServicesSectionProps) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">How We Get You Clients</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We do all the hard work. You just show up and close the deal.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((service, idx) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15 }}>
              <Card className="rounded-2xl border-border/50 h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((f) => (
                      <li key={f.text} className="flex items-center gap-3">
                        <f.icon className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{f.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button onClick={onCtaClick} variant="outline" className="rounded-xl w-full font-semibold border-primary/20 hover:bg-primary/5">
                    {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25">
            <Rocket className="mr-2 h-5 w-5" /> Tell Us About Your Business — It&apos;s Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
