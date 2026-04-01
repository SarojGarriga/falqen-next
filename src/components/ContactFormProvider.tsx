"use client";

import { createContext, useContext, useState } from "react";
import ContactForm from "./ContactForm";

const ContactFormContext = createContext<{ openForm: () => void }>({ openForm: () => {} });

export const useContactForm = () => useContext(ContactFormContext);

export function ContactFormProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <ContactFormContext.Provider value={{ openForm: () => setOpen(true) }}>
      {children}
      <ContactForm open={open} onClose={() => setOpen(false)} />
    </ContactFormContext.Provider>
  );
}
