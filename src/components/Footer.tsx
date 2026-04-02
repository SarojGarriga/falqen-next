"use client";

import { Button } from "@/components/ui/button";
import { Rocket, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { useLang } from "@/components/LangProvider";

interface FooterProps {
  onCtaClick: () => void;
}

const T = {
  en: {
    h2: "Ready to Fill Your Calendar?",
    p: "Join hundreds of B2B companies already generating qualified leads on autopilot.",
    btn1: "Start Getting Leads Now",
    btn2: "Schedule Strategy Call",
    copy: "All rights reserved.",
  },
  es: {
    h2: "¿Listo para llenar tu calendario?",
    p: "Únete a cientos de empresas B2B que ya generan leads calificados en piloto automático.",
    btn1: "Empezar a Conseguir Leads",
    btn2: "Reservar Llamada Estratégica",
    copy: "Todos los derechos reservados.",
  },
};

const Footer = ({ onCtaClick }: FooterProps) => {
  const lang = useLang();
  const t = T[lang];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">{t.h2}</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">{t.p}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold bg-background text-foreground hover:bg-background/90 shadow-lg">
              <Rocket className="mr-2 h-5 w-5" /> {t.btn1}
            </Button>
            <Button onClick={onCtaClick} size="lg" variant="outline" className="rounded-2xl px-8 py-6 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <CalendarCheck className="mr-2 h-5 w-5" /> {t.btn2}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <Image src="/falqen-logo.png" alt="Falqen" width={80} height={24} className="h-6 w-auto" />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Falqen. {t.copy}</p>
      </div>
    </footer>
  );
};

export default Footer;
