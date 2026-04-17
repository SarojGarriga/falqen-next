import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ContactFormProvider } from "@/components/ContactFormProvider";
import { ClientShell } from "@/components/ClientShell";
import { LangProvider } from "@/components/LangProvider";
import Schema from "@/components/Schema";

export const metadata: Metadata = {
  title: "Cold Email Agency for B2B — Falqen",
  description:
    "Cold email and LinkedIn outreach agency for B2B companies. We book qualified sales meetings for you — live in 7–14 days, no long-term contracts.",
  keywords: [
    "cold email agency",
    "b2b appointment setting agency",
    "cold email service",
    "outsource cold email",
    "b2b lead generation agency",
    "appointment setting agency",
  ],
  authors: [{ name: "Falqen" }],
  openGraph: {
    title: "Falqen | We Fill Your Calendar With Qualified Meetings",
    description:
      "Done-for-you B2B outreach. We send emails and LinkedIn messages, you close deals.",
    url: "https://falqen.com",
    siteName: "Falqen",
    type: "website",
    images: [
      {
        url: "https://falqen.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Falqen — B2B Appointment Setting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Falqen | We Fill Your Calendar With Qualified Meetings",
    description:
      "Done-for-you B2B outreach. We send emails and LinkedIn messages, you close deals.",
  },
  metadataBase: new URL("https://falqen.com"),
  alternates: { canonical: "https://falqen.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Schema type="org" />
        <ThemeProvider>
          <LangProvider>
            <ContactFormProvider>
              <ClientShell>{children}</ClientShell>
            </ContactFormProvider>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
