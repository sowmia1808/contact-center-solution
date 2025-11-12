// app/municipality/page.js (Server Component)
import MunicipalityPage from './MunicipalityPage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Municipality Solutions with Tegsoft | UAE Local Governments",
  description:
    "Tegsoft helps municipal offices and local governments in UAE streamline citizen services, improve communication, and automate internal workflows.",
    robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Tegsoft Municipality UAE",
    "Municipal Contact Center Solution",
    "Citizen Service Software",
    "Workflow Automation UAE",
  ],
  alternates: {
    canonical: "https://yourdomain.com/municipality",
  },
  openGraph: {
    title: "Municipality Solutions with Tegsoft | UAE Local Governments",
    description:
      "Enhance municipal services, automate workflows, and improve citizen communication with Tegsoft solutions.",
    url: "https://yourdomain.com/municipality",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/municipality.png",
        width: 1200,
        height: 630,
        alt: "Municipality Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Municipality Solutions with Tegsoft | UAE Local Governments",
    description:
      "Tegsoft provides unified communication and workflow automation solutions for municipalities in UAE to improve citizen services.",
    images: ["https://yourdomain.com/images/municipality.png"],
  },
};

const municipalitySchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/municipality",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered contact center solutions for municipalities to streamline citizen services, improve communication, and automate internal workflows in UAE.",
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
      <JsonLd data={municipalitySchema} />
      <MunicipalityPage />
    </>
  );
}
