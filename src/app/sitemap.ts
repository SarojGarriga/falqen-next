import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://falqen.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/es`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/blog/how-to-get-more-b2b-sales-meetings`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/cold-email-agency-vs-in-house`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/b2b-appointment-setting-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/como-conseguir-reuniones-de-ventas-b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/email-frio-vs-publicidad-google`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/agencia-prospección-b2b-guia`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cold-email-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/linkedin-outreach-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/b2b-lead-generation-agency`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/vs/belkins`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/vs/cience`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/best-b2b-appointment-setting-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/best-cold-email-agency-for-b2b-saas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/is-cold-email-still-effective-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/how-to-get-meetings-with-ceos-and-vps`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/blog/why-cold-email-not-getting-replies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
}
