export const metadata = {
  title: "Why Tegsoft is the Best Contact Center Solution in UAE | Cloud & On-Premise",
  description: "Discover why Tegsoft is the leading contact center solution in the UAE. Cloud-based, on-premise, inbound, outbound, blended & omnichannel call center software.",
  keywords: [
    "Tegsoft Contact Center UAE",
    "Best Call Center Solution UAE",
    "Cloud Contact Center UAE",
    "On-Premise Call Center UAE",
    "Omnichannel Call Center UAE",
    "Inbound Outbound Call Center UAE",
    "Customer Experience Solution UAE",
    "AI Based Contact Center Solution in UAE"
  ],
  openGraph: {
    title: "Why Tegsoft is the Best Contact Center Solution in UAE",
    description: "Tegsoft provides cloud-based and on-premise contact center solutions for inbound, outbound, blended, and omnichannel support across the UAE.",
    url: "https://techbee.ae/why-tegsoft",
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "https://techbee.ae/images/why-tegsoft-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft Best Contact Center UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Tegsoft is the Best Contact Center Solution in UAE",
    description: "Tegsoft provides cloud-based and on-premise contact center solutions for inbound, outbound, blended, and omnichannel support across the UAE.",
    images: ["https://techbee.ae/images/why-tegsoft-og.jpg"],
    site: "@TegsoftUAE",
  },
};


import TegsoftFeaturesGrid from "../../components/TegsoftFeaturesGrid";
import FeaturesSection from "../../components/FeaturesSection";
import Image from "next/image";
import JsonLd from "../../components/seo/JsonLd";
import productSchema from "../../components/seo/schema/product";
import { organizationSchema } from "../../components/seo/schema/organization";
import { serviceSchema } from "../../components/seo/schema/service";

export default function WhyTegsoftPage() {
    
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mt-15 lg:mt-15">

      <div className="max-w-8xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* Left Side: Text */}
  <div className="md:w-1/2 lg:mt-16">
    <h1 className="text-4xl font-bold text-pink-900 mb-6">
      Why Choose Tegsoft for Your Contact Center in UAE
    </h1>

    <p className="text-gray-700 mb-6 text-justify">
      Tegsoft is the leading cloud-based contact center solution in the UAE,
      designed to optimize customer interactions across inbound, outbound,
      blended, and omnichannel communications. Businesses leverage Tegsoft to
      enhance customer experience, improve agent productivity, and increase
      sales conversions. With advanced features like IVR, call recording, HD
      voice, AI-assisted workflows, and real-time analytics, Tegsoft ensures
      your contact center operates at peak efficiency.
    </p>
    <h2 className="text-2xl font-semibold text-pink-900 mb-4">
  Optimize Customer Experience with Advanced Features
  </h2>

    <p className="text-gray-700 mb-6 text-justify">
      Whether you are a small business or a large enterprise, Tegsoft offers
      scalable deployment options, seamless integrations with existing CRM and
      business tools, and a user-friendly interface. Experience unmatched
      call quality, customizable service levels, and intelligent automation
      with Tegsoft.
    </p>
  </div>

  {/* Right Side: Image */}
  <div className="md:w-1/2">
    <Image
  src="/images/cloud contact center software.png"
  alt="Tegsoft Cloud Contact Center Software in UAE"
  width={400}
  height={400}
  className="w-full "
/>
  </div>
</div>


 
      <TegsoftFeaturesGrid/>
    <FeaturesSection/>
    <JsonLd data={productSchema}/>
    <JsonLd data={organizationSchema}/>
    <JsonLd data = {serviceSchema}/>
      
    </div>
  );
}
