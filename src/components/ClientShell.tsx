"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContactForm } from "./ContactFormProvider";

export function ClientShell({ children }: { children: React.ReactNode }) {
  const { openForm } = useContactForm();
  return (
    <>
      <Navbar onCtaClick={openForm} />
      {children}
      <Footer onCtaClick={openForm} />
    </>
  );
}
