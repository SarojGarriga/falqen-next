import type { Metadata } from "next";
import EsPageClient from "./EsPageClient";

export const metadata: Metadata = {
  title: "Agencia de Prospección B2B | Email Frío y LinkedIn — Falqen",
  description:
    "Falqen llena tu calendario con reuniones de ventas calificadas. Gestionamos tu prospección outbound completa — email frío y LinkedIn — para que tú solo te dediques a cerrar deals.",
  keywords: [
    "agencia prospección B2B",
    "email frío B2B",
    "generación de leads B2B",
    "outreach LinkedIn B2B",
    "agencia leads ventas",
    "reuniones de ventas calificadas",
    "prospección outbound España",
    "conseguir clientes B2B",
  ],
  openGraph: {
    title: "Agencia de Prospección B2B — Falqen",
    description: "Llenamos tu calendario con reuniones de ventas calificadas. Tú solo cierras los deals.",
    url: "https://falqen.com/es",
    locale: "es_ES",
  },
  alternates: {
    canonical: "https://falqen.com/es",
    languages: { "en": "https://falqen.com", "es": "https://falqen.com/es" },
  },
};

export default function SpanishPage() {
  return <EsPageClient />;
}
