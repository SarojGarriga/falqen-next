"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ArrowRight, MapPin } from "lucide-react";
import { useLang } from "@/components/LangProvider";

interface ResultsSectionProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    h2: "What Our Clients Say",
    p: "Real people. Real businesses. Real results.",
    btn: "I Want Results Like These",
  },
  es: {
    h2: "Lo Que Dicen Nuestros Clientes",
    p: "Personas reales. Negocios reales. Resultados reales.",
    btn: "Quiero Resultados Como Estos",
  },
};

const testimonials = [
  { quote: "We used to rely entirely on referrals, which is great until it dries up. Falqen built an outbound engine that actually works. We closed two major contracts in the first month purely from their email campaigns. The best part is I don't have to touch it—I just show up to the calls.", name: "Elias Thorne", title: "CEO", company: "Verta Logistics", location: "Austin, TX" },
  { quote: "I was skeptical because we've been burned by lead gen agencies before who just sent spam. Falqen is different. The emails were hyper-personalized and the LinkedIn outreach felt genuine. My calendar is now consistently booked with qualified directors, not just random people.", name: "Sarah Jenkins", title: "Founder", company: "Optima Health Solutions", location: "London, UK" },
  { quote: "The technical setup alone was worth the investment. We had terrible deliverability issues before working with Falqen—our emails were going straight to spam. They fixed our domain reputation and now our open rates are sitting at 60%+. Highly recommend.", name: "Marcus Frey", title: "VP of Sales", company: "Apex Financial", location: "New York, NY" },
  { quote: "Falqen's approach to combining LinkedIn with Email is the secret sauce. We noticed that prospects who ignored our emails were responding on LinkedIn because Falqen's system hit them on both fronts. It's an omnipresent strategy that doubled our demo booking rate.", name: "Liam O'Connor", title: "Head of Growth", company: "BuildScale SaaS", location: "Dublin, Ireland" },
  { quote: "Honestly, I didn't think cold email worked anymore until I met this team. They proved me wrong. It's not about 'spamming' people; it's about the data they use. The leads they found were exactly our Ideal Customer Profile. We're averaging 12 qualified meetings a month now.", name: "Jessica Wu", title: "Managing Partner", company: "Elevate Consulting Group", location: "Toronto, Canada" },
  { quote: "I appreciate the transparency. Most agencies hide their numbers, but Falqen shows you exactly what's happening live. We signed a $45k project last week from a lead that came through their LinkedIn automation sequence. The ROI is undeniable.", name: "David Rossi", title: "Principal Architect", company: "Cobalt Architecture", location: "Milan, Italy" },
  { quote: "Outsourcing this was the best decision we made this year. Setting up the inboxes, warming them up, writing the copy... it's a full-time job. Falqen took all of that off my plate. Now my sales team just focuses on closing, not prospecting.", name: "Thomas Wright", title: "Director of Business Development", company: "Nexus Security", location: "Chicago, IL" },
  { quote: "The copy they wrote was surprisingly good. Usually, agency copy sounds robotic, but Falqen's emails sounded like they came directly from me. It resonated with our prospects immediately. We've had to hire another SDR just to handle the reply volume.", name: "Priya Patel", title: "CEO", company: "SoftWave Tech", location: "San Francisco, CA" },
  { quote: "Effective and professional. We needed to break into the US market and didn't know where to start. Falqen built a targeted list of distributors and started the outreach. Within 3 weeks we had our first serious conversations with US buyers.", name: "Anders Holm", title: "Export Manager", company: "Nord Manufacturing", location: "Copenhagen, Denmark" },
  { quote: "We tried doing this in-house and got our domain blacklisted. Falqen came in, set up the 'air-gapped' domains they talk about, and got us back on track safely. If you value your company's reputation but need leads, hire them.", name: "Rachel Green", title: "COO", company: "Luminosity Media", location: "Los Angeles, CA" },
  { quote: "Simple process, massive results. I just filled out their onboarding form, told them who I wanted to target, and they handled the rest. The first booked call came in on day 4 of the campaign running live. Efficient execution.", name: "Carlos Mendez", title: "Founder", company: "SolarFlow Energy", location: "Madrid, Spain" },
  { quote: "The weekly reporting is great, but the results are better. We are currently seeing a 15x ROI on our monthly spend with Falqen. It's essentially a money-printing machine if you have a high-ticket offer like ours.", name: "Emily Clarke", title: "Chief Revenue Officer", company: "HrTech Solutions", location: "Sydney, Australia" },
  { quote: "I've worked with three different lead gen agencies over the last 5 years. Falqen is the only one that didn't just send me a list of 'leads' to cold call myself. They actually started the conversations and got the prospects interested before handing them off.", name: "Kevin Bakker", title: "Owner", company: "Streamline Logistics", location: "Amsterdam, Netherlands" },
];

const scrollTestimonials = [...testimonials, ...testimonials];

const ResultsSection = ({ onCtaClick }: ResultsSectionProps) => {
  const lang = useLang();
  const t = T[lang];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId: number;
    let scrollPos = 0;
    const speed = 0.4;
    const scroll = () => {
      if (!isPaused) {
        scrollPos += speed;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <section id="results" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{t.h2}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.p}</p>
        </motion.div>

        <div className="relative mb-10">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-secondary/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-secondary/80 to-transparent z-10 pointer-events-none" />
          <div ref={scrollRef} className="flex gap-5 overflow-hidden cursor-grab" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            {scrollTestimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-[340px] md:w-[400px]">
                <Card className="rounded-2xl border-border/50 h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    <p className="text-foreground mb-5 italic text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="font-bold text-sm text-foreground">{t.name}</div>
                        <div className="text-xs text-primary font-medium">{t.title}</div>
                        <div className="text-xs text-muted-foreground">{t.company}</div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {t.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25 bg-gradient-to-r from-success to-success/80 text-success-foreground">
            {t.btn} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
