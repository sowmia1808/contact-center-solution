
import TravelTourismPage from './TravelTourismPage';
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Travel & Tourism Solutions with Tegsoft | UAE Travel Agencies",
  description:
    "Tegsoft helps travel agencies and tour operators in UAE improve customer support, automate bookings, and streamline operations.",
    robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Tegsoft Travel UAE",
    "Tour Operator CRM",
    "Travel Contact Center",
    "Booking Automation",
  ],
  alternates: {
    canonical: "https://yourdomain.com/travel-tourism",
  },
  openGraph: {
    title: "Travel & Tourism Solutions with Tegsoft | UAE Travel Agencies",
    description:
      "Enhance customer support, automate workflows, and manage bookings efficiently with Tegsoft for travel and tourism businesses.",
    url: "https://yourdomain.com/travel-tourism",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/travel-and-tourism.png",
        width: 1200,
        height: 630,
        alt: "Travel & Tourism Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel & Tourism Solutions with Tegsoft | UAE Travel Agencies",
    description:
      "Tegsoft provides unified communication and workflow automation solutions for travel agencies and tour operators in UAE.",
    images: ["https://yourdomain.com/images/travel-and-tourism.png"],
  },
};

const travelTourismSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/travel-tourism",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft offers AI-powered contact center solutions for travel and tourism businesses in UAE to manage customer communication, automate bookings, and enhance operational efficiency.",
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
      <JsonLd data={travelTourismSchema} />
      <TravelTourismPage />
    </>
  );
}
