
// app/pricing/page.js

export const metadata = {
  title: "Tegsoft Pricing Plans – Cloud Contact Center UAE",
  description:
    "Compare Tegsoft cloud contact center pricing plans in UAE: Text Based, Inbound, Outbound, Blended & Omnichannel.",
    robots: {
    index: true,
    follow: true,
  },
  keywords:
    "Tegsoft, Contact Center, Pricing, UAE, Inbound, Outbound, Omnichannel, Blended, Cloud Call Center",
  canonical: "https://yourdomain.com/pricing",
  openGraph: {
    title: "Tegsoft Pricing Plans – Cloud Contact Center UAE",
    description:
      "Compare Tegsoft's contact center plans: Text Based, Inbound, Outbound, Blended & Omnichannel. Choose the right plan for your business.",
    url: "https://yourdomain.com/pricing",
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "https://yourdomain.com/images/pricing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft Pricing Plans",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tegsoft Pricing Plans – Cloud Contact Center UAE",
    description:
      "Compare Tegsoft's contact center plans: Text Based, Inbound, Outbound, Blended & Omnichannel.",
    images: ["https://yourdomain.com/images/pricing-og.jpg"],
    site: "@TegsoftUAE",
  },
};


import PricingPlans from "./PricingPlans"
import PricingHero from "./PricingHero";
import PricingComparison from "./PricingComparison";
import JsonLd from "../../components/seo/JsonLd";
import pricing from "../../components/seo/schema/pricing"

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <PricingPlans />
      <PricingComparison />
      <JsonLd data={pricing}/>
    </div>
  );
}