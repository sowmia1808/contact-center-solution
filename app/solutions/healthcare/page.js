// app/healthcare/page.js (Server Component)
import HealthcarePage from './HealthcarePage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Healthcare Solutions with Tegsoft | UAE Hospitals & Clinics",
  description:
    "Tegsoft empowers healthcare organizations in UAE with AI-driven communication solutions to improve patient support, reduce wait times, and streamline workflows.",
  keywords: [
    "Tegsoft Healthcare UAE",
    "Hospital Contact Center Solution",
    "Patient Communication Software",
    "Healthcare AI Solutions UAE",
  ],
  alternates: {
    canonical: "https://yourdomain.com/healthcare",
  },
  openGraph: {
    title: "Healthcare Solutions with Tegsoft | UAE Hospitals & Clinics",
    description:
      "Tegsoft improves healthcare communication with AI-powered solutions for hospitals, clinics, and telemedicine providers in UAE.",
    url: "https://yourdomain.com/healthcare",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/healthcare.png",
        width: 1200,
        height: 630,
        alt: "Healthcare Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Solutions with Tegsoft | UAE Hospitals & Clinics",
    description:
      "Enhance patient engagement, streamline workflows, and improve hospital communication with Tegsoft solutions in UAE.",
    images: ["https://yourdomain.com/images/healthcare.png"],
  },
};

const healthcareSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/healthcare",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered contact center solutions to enhance patient support, streamline hospital workflows, and improve communication for healthcare organizations in UAE.",
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
      <JsonLd data={healthcareSchema} />
      <HealthcarePage />
    </>
  );
}
