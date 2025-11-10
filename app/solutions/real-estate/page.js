// app/real-estate/page.js
import RealEstatePage from './RealEstatePage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Real Estate Solutions with Tegsoft | UAE Property Agencies",
  description:
    "Tegsoft helps real estate agencies in UAE streamline client communication, automate workflows, and improve lead management.",
  keywords: [
    "Tegsoft Real Estate UAE",
    "Property CRM",
    "Real Estate Contact Center",
    "Workflow Automation Real Estate",
  ],
  alternates: {
    canonical: "https://yourdomain.com/real-estate",
  },
  openGraph: {
    title: "Real Estate Solutions with Tegsoft | UAE Property Agencies",
    description:
      "Enhance client management, automate processes, and improve property sales with Tegsoft for real estate companies.",
    url: "https://yourdomain.com/real-estate",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/realestate1.png",
        width: 1200,
        height: 630,
        alt: "Real Estate Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Solutions with Tegsoft | UAE Property Agencies",
    description:
      "Tegsoft provides unified communication and workflow automation solutions for real estate agencies in UAE.",
    images: ["https://yourdomain.com/images/realestate1.png"],
  },
};

const realEstateSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/real-estate",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft offers AI-powered contact center solutions for real estate agencies in UAE to manage client communication, automate workflows, and boost property sales.",
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
      <JsonLd data={realEstateSchema} />
      <RealEstatePage />
    </>
  );
}
