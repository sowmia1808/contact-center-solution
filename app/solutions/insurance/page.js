// app/insurance/page.js (Server Component)
import InsurancePage from './InsurancePage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Insurance Solutions with Tegsoft | UAE Insurers",
  description:
    "Tegsoft empowers insurance companies in UAE with AI-powered contact center solutions to improve customer support, claims management, and workflow efficiency.",
    robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Tegsoft Insurance UAE",
    "Insurance Contact Center Solution",
    "Customer Service Software",
    "Insurance Workflow Automation UAE",
  ],
  alternates: {
    canonical: "https://yourdomain.com/insurance",
  },
  openGraph: {
    title: "Insurance Solutions with Tegsoft | UAE Insurers",
    description:
      "Enhance insurance communication, automate workflows, and improve client satisfaction with Tegsoft solutions for UAE insurers.",
    url: "https://yourdomain.com/insurance",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/insurance.png",
        width: 1200,
        height: 630,
        alt: "Insurance Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insurance Solutions with Tegsoft | UAE Insurers",
    description:
      "Tegsoft provides unified communication and workflow automation solutions for insurance companies in UAE to enhance customer service.",
    images: ["https://yourdomain.com/images/insurance.png"],
  },
};

const insuranceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/insurance",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered contact center solutions for insurance companies to improve customer support, claims processing, and operational efficiency in UAE.",
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
      <JsonLd data={insuranceSchema} />
      <InsurancePage />
    </>
  );
}
