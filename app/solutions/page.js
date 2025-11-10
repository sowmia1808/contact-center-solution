
export const metadata = {
  title: "Tegsoft Contact Center Solutions in UAE | Cloud-Based & Omnichannel",
  description:
    "Explore Tegsoft’s cloud-based contact center solutions in UAE. Features include IVR, CRM integration, AI workflows, omnichannel communication, and real-time monitoring.",
  keywords: [
    "Tegsoft UAE",
    "Contact Center Solutions UAE",
    "Cloud Contact Center Dubai",
    "Omnichannel Contact Center",
    "IVR System UAE",
    "CRM Integration",
    "AI Call Automation",
    "Tegsoft Pricing",
  ],
  openGraph: {
    title: "Tegsoft Contact Center Solutions in UAE",
    description:
      "Explore Tegsoft’s cloud-based contact center solutions in UAE with IVR, AI workflows, omnichannel messaging, CRM integration, and real-time monitoring.",
    url: "https://yourdomain.com/solutions",
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "https://yourdomain.com/images/solutions-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft Contact Center Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tegsoft Contact Center Solutions in UAE",
    description:
      "Explore Tegsoft’s cloud-based contact center solutions in UAE with IVR, AI workflows, omnichannel messaging, CRM integration, and real-time monitoring.",
    images: ["https://yourdomain.com/images/solutions-og.jpg"],
    creator: "@TegsoftUAE",
  },
};

import JsonLd from "../../components/seo/JsonLd";
import { solutionsSchema } from "../../components/seo/schema/solutions";
import Solutionclient from "./SolutionClient";
export default function SolutionsPage() {
  
  return (
    <>
    <JsonLd data={solutionsSchema}/>
    <solutionsSchema/>
    <Solutionclient/>
    
    </>
  );
}
