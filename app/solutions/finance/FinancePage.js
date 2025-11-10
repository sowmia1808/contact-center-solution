// app/finance/page.js (Server Component)
import FinancePage from './FinancePage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Finance Solutions with Tegsoft | UAE Banks & Financial Institutions",
  description:
    "Tegsoft enhances communication, customer service, and operations for banks and financial institutions in UAE through AI-powered omnichannel solutions.",
  keywords: [
    "Tegsoft Finance UAE",
    "Bank Communication Solution",
    "Financial Customer Service Software",
    "AI Banking Solutions UAE",
  ],
  alternates: {
    canonical: "https://yourdomain.com/finance",
  },
  openGraph: {
    title: "Finance Solutions with Tegsoft | UAE Banks & Financial Institutions",
    description:
      "Tegsoft helps financial institutions improve customer service and internal operations with multichannel communication and automation.",
    url: "https://yourdomain.com/finance",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/finance.png",
        width: 1200,
        height: 630,
        alt: "Finance Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Solutions with Tegsoft | UAE Banks & Financial Institutions",
    description:
      "Enhance customer support, streamline operations, and improve compliance with Tegsoft's finance solutions in UAE.",
    images: ["https://yourdomain.com/images/finance.png"],
  },
};

const financeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/finance",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered contact center solutions to improve communication, customer service, and operational efficiency for banks and financial institutions in UAE.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "UAE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-xxxx-xxxx",
    contactType: "customer support",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={financeSchema} />
      <FinancePage />
    </>
  );
}
