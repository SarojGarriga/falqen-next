"use client";

import { useContactForm } from "@/components/ContactFormProvider";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ChannelComparison from "@/components/ChannelComparison";
import ProcessSimulator from "@/components/ProcessSimulator";
import GrowthCalculator from "@/components/GrowthCalculator";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const { openForm } = useContactForm();

  return (
    <main className="min-h-screen bg-background">
      <HeroSection onCtaClick={openForm} />
      <ServicesSection onCtaClick={openForm} />
      <ChannelComparison onCtaClick={openForm} />
      <ProcessSimulator onCtaClick={openForm} />
      <GrowthCalculator onCtaClick={openForm} />
      <ResultsSection onCtaClick={openForm} />
      <FAQSection onCtaClick={openForm} />
    </main>
  );
}
