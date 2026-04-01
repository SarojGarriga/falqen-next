"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import Image from "next/image";

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Image src="/falqen-logo.png" alt="Falqen" width={120} height={32} className="h-8 w-auto" />

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Process</button>
          <button onClick={() => scrollTo("comparison")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Why Email</button>
          <button onClick={() => scrollTo("results")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Results</button>
          <button onClick={() => scrollTo("faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</button>
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-6 font-semibold">
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <button onClick={() => scrollTo("services")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">Process</button>
          <button onClick={() => scrollTo("comparison")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">Why Email</button>
          <button onClick={() => scrollTo("results")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">Results</button>
          <button onClick={() => scrollTo("faq")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">FAQ</button>
          <Button onClick={() => { onCtaClick(); setMobileOpen(false); }} className="w-full rounded-2xl font-semibold">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
