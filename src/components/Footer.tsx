"use client";

import { Button } from "@/components/ui/button";
import { Rocket, CalendarCheck } from "lucide-react";
import Image from "next/image";

interface FooterProps {
  onCtaClick: () => void;
}

const Footer = ({ onCtaClick }: FooterProps) => {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-3">Ready to Fill Your Calendar?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
            Join hundreds of B2B companies already generating qualified leads on autopilot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-8 py-6 text-base font-semibold bg-background text-foreground hover:bg-background/90 shadow-lg">
              <Rocket className="mr-2 h-5 w-5" /> Start Getting Leads Now
            </Button>
            <Button onClick={onCtaClick} size="lg" variant="outline" className="rounded-2xl px-8 py-6 text-base font-semibold border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <CalendarCheck className="mr-2 h-5 w-5" /> Schedule Strategy Call
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4">
        <Image src="/falqen-logo.png" alt="Falqen" width={80} height={24} className="h-6 w-auto" />
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Falqen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
