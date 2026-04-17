"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContactForm } from "./ContactFormProvider";
import { ChatWidget } from "./ChatWidget";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const { openForm } = useContactForm();
  return (
    <>
      <Navbar onCtaClick={openForm} />
      {children}
      <Footer onCtaClick={openForm} />
      <ChatWidget />
    </>
  );
}
