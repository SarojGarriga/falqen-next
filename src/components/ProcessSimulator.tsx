"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Globe, Mail, Rocket, BarChart3, Phone, Target, FileCheck, ShieldCheck, ArrowRight, Flame } from "lucide-react";

const processSteps = [
  { icon: Target, title: "Define Offer, Goals & ICP", description: "We define your ideal customer profile, your offer angle, and the goals for the campaign.", color: "from-primary/20 to-primary/5" },
  { icon: Search, title: "Scrape Leads by Title, Industry & Tech", description: "Using premium B2B databases and live scrapers, we find thousands of decision-makers matching your ICP.", color: "from-blue-500/20 to-blue-500/5" },
  { icon: FileCheck, title: "Clean & Verify Lead List", description: "Every email is verified. Bad addresses are removed. Only real, deliverable contacts make the cut.", color: "from-emerald-500/20 to-emerald-500/5" },
  { icon: Globe, title: "Buy Domains & Create Inboxes", description: "We purchase similar domains and set up dedicated sending inboxes.", color: "from-violet-500/20 to-violet-500/5" },
  { icon: ShieldCheck, title: "Set Up SPF, DKIM, DMARC", description: "Technical authentication protocols are configured to maximize deliverability.", color: "from-amber-500/20 to-amber-500/5" },
  { icon: Flame, title: "Warm Inboxes to 100% Health", description: "New inboxes are warmed over 7-14 days until they reach full sending capacity.", color: "from-orange-500/20 to-orange-500/5" },
  { icon: Mail, title: "Write Copy & 3-5 Follow-ups", description: "AI-personalized email sequences with A/B tested subject lines and multiple follow-up angles.", color: "from-cyan-500/20 to-cyan-500/5" },
  { icon: Rocket, title: "Launch & Scale Campaign", description: "Campaign goes live. We monitor inbox health and scale volume progressively.", color: "from-pink-500/20 to-pink-500/5" },
  { icon: BarChart3, title: "Monitor Reply Rates & Iterate", description: "We track reply rates. If below threshold, we refine copy, targeting, or offer angle.", color: "from-indigo-500/20 to-indigo-500/5" },
  { icon: Phone, title: "Book Calls & Push Leads to You", description: "Positive replies are tagged, nurtured, and pushed directly to your calendar. You just close.", color: "from-success/20 to-success/5" },
];

interface ProcessSimulatorProps {
  onCtaClick: () => void;
}

const ProcessSimulator = ({ onCtaClick }: ProcessSimulatorProps) => {
  return (
    <section id="simulator" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            See How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our complete 10-step process. Every step is visible. Nothing is hidden.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 mb-12">
          {processSteps.map((step, i) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${step.color} border border-border/50 p-6 group cursor-default transition-shadow hover:shadow-lg`}
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
                      <span className="text-xs font-bold text-primary/70">STEP {i + 1}</span>
                    </div>
                    <h4 className="font-bold text-foreground text-base leading-tight mb-1.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {i < processSteps.length - 1 && i % 2 === 0 && (
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
            Start This Process For Me <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSimulator;
