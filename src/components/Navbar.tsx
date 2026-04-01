"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = usePathname();

  const isSpanish = pathname?.startsWith("/es");
  const langHref = isSpanish ? "/" : "/es";
  const langLabel = isSpanish ? "EN" : "ES";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href={isSpanish ? "/es" : "/"}>
          <Image src="/falqen-logo.png" alt="Falqen" width={120} height={32} className="h-8 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {isSpanish ? "Proceso" : "Process"}
          </button>
          <Link href={isSpanish ? "/es#services" : "/services"} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {isSpanish ? "Servicios" : "Services"}
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          <button onClick={() => scrollTo("results")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {isSpanish ? "Resultados" : "Results"}
          </button>
          <Link
            href={langHref}
            className="flex items-center gap-1.5 text-xs font-semibold bg-secondary border border-border px-2.5 py-1 rounded-full hover:bg-secondary/80 transition-colors"
          >
            <span className="text-muted-foreground">{isSpanish ? "🇺🇸" : "🇪🇸"}</span>
            {langLabel}
          </Link>
          <button onClick={toggle} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button onClick={onCtaClick} size="lg" className="rounded-2xl px-6 font-semibold">
            {isSpanish ? "Empezar" : "Get Started"}
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
          <button onClick={() => scrollTo("services")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">
            {isSpanish ? "Proceso" : "Process"}
          </button>
          <Link href={isSpanish ? "/es#services" : "/services"} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
            {isSpanish ? "Servicios" : "Services"}
          </Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">Blog</Link>
          <button onClick={() => scrollTo("results")} className="block w-full text-left text-sm text-muted-foreground hover:text-foreground">
            {isSpanish ? "Resultados" : "Results"}
          </button>
          <Link href={langHref} onClick={() => setMobileOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
            {isSpanish ? "🇺🇸 Switch to English" : "🇪🇸 Cambiar a Español"}
          </Link>
          <Button onClick={() => { onCtaClick(); setMobileOpen(false); }} className="w-full rounded-2xl font-semibold">
            {isSpanish ? "Empezar" : "Get Started"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
