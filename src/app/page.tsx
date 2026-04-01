"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ChannelComparison from "@/components/ChannelComparison";
import ProcessSimulator from "@/components/ProcessSimulator";
import GrowthCalculator from "@/components/GrowthCalculator";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => setFormOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCtaClick={openForm} />
      <main>
        <HeroSection onCtaClick={openForm} />
        <ServicesSection onCtaClick={openForm} />
        <ChannelComparison onCtaClick={openForm} />
        <ProcessSimulator onCtaClick={openForm} />
        <GrowthCalculator onCtaClick={openForm} />
        <ResultsSection onCtaClick={openForm} />
        <FAQSection onCtaClick={openForm} />
      </main>
      <Footer onCtaClick={openForm} />
      <ContactForm open={formOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
}
