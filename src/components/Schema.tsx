// Server component — renders JSON-LD script tags for structured data

interface ArticleSchemaProps {
  type: "article";
  title: string;
  description: string;
  url: string;
  datePublished: string;
  lang?: string;
}

interface FAQSchemaProps {
  type: "faq";
  items: { question: string; answer: string }[];
}

interface OrgSchemaProps {
  type: "org";
}

type SchemaProps = ArticleSchemaProps | FAQSchemaProps | OrgSchemaProps;

export default function Schema(props: SchemaProps) {
  let data: object;

  if (props.type === "article") {
    data = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: props.title,
      description: props.description,
      url: props.url,
      datePublished: props.datePublished,
      dateModified: props.datePublished,
      inLanguage: props.lang ?? "en",
      author: {
        "@type": "Organization",
        name: "Falqen",
        url: "https://falqen.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Falqen",
        url: "https://falqen.com",
        logo: {
          "@type": "ImageObject",
          url: "https://falqen.com/falqen-logo.png",
        },
      },
    };
  } else if (props.type === "faq") {
    data = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
  } else {
    data = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Falqen",
      url: "https://falqen.com",
      logo: "https://falqen.com/falqen-logo.png",
      description:
        "B2B appointment setting agency. We fill your calendar with qualified sales meetings via cold email and LinkedIn outreach.",
      sameAs: ["https://www.linkedin.com/company/falqen"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: "https://falqen.com",
      },
      areaServed: ["US", "ES", "GB", "MX", "AR", "CO"],
      knowsAbout: [
        "B2B appointment setting",
        "cold email outreach",
        "LinkedIn prospecting",
        "lead generation",
        "sales pipeline",
      ],
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
