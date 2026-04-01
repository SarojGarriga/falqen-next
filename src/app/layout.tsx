import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Falqen | B2B Appointment Setting & Qualified Meeting Generation",
  description:
    "We fill your calendar with qualified sales meetings. Done-for-you cold email and LinkedIn outreach for B2B companies. Start getting meetings in 7–14 days.",
  keywords: [
    "B2B appointment setting",
    "qualified sales meetings",
    "cold email outreach",
    "LinkedIn outreach",
    "lead generation",
    "B2B lead gen",
    "sales meetings",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
