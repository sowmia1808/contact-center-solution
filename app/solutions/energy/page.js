// app/energy/page.js (Server Component)
import EnergyPage from './EnergyPage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Energy Solutions with Tegsoft | UAE Utilities & Energy Providers",
  description:
    "Tegsoft streamlines communication, operations, and customer service for energy and utility companies across UAE through AI-driven multichannel solutions.",
    robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Tegsoft Energy UAE",
    "Utility Communication Solution",
    "Energy Customer Service Software",
    "Smart Energy Operations",
  ],
  alternates: {
    canonical: "https://yourdomain.com/energy",
  },
  openGraph: {
    title: "Energy Solutions with Tegsoft | UAE Utilities & Energy Providers",
    description:
      "Tegsoft helps energy companies improve operations and customer support with intelligent call routing, automated notifications, and analytics.",
    url: "https://yourdomain.com/energy",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/energy.png",
        width: 1200,
        height: 630,
        alt: "Energy Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy Solutions with Tegsoft | UAE Utilities & Energy Providers",
    description:
      "Enhance energy operations and customer service with Tegsoft’s multichannel communication platform in UAE.",
    images: ["https://yourdomain.com/images/energy.png"],
  },
};

const energySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/energy",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered solutions for communication, operations, and customer service for energy and utility companies across UAE.",
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
      <JsonLd data={energySchema} />
      <EnergyPage />
    </>
  );
}
