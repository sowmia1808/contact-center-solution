
export const metadata = {
  title: "Contact Center Solution in UAE | Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Fujairah & RAK",
  description: "Leading AI-powered contact center solution provider in UAE. Cloud-based and on-premise call center solutions for Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah & Fujairah. Enhance customer support with inbound, outbound, blended, text-based, and omnichannel contact center solutions.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Contact Center Solution UAE",
    "AI Contact Center UAE",
    "Call Center Dubai",
    "Cloud Call Center Abu Dhabi",
    "Omnichannel Contact Center Sharjah",
    "Blended Contact Center Ajman",
    "Text-Based Contact Center Al Ain",
    "Outbound Call Center Fujairah",
    "Inbound Call Center RAK",
    "Customer Support Solutions UAE",
    "Call Center Software UAE",
    "Enterprise Call Center UAE",
    "AI Customer Support UAE",
    "AI Call Center UAE"
  ],
  alternates: {
    canonical: "https://yourdomain.com/contact-center-solution-uae",
  },
};

import HeroSection from "./HeroSection";
import JsonLd from "../components/seo/JsonLd";
import { organizationSchema } from "../components/seo/schema/organization";
import faqSchema from "../components/seo/schema/faqSchema";


export default function Home() {
  return (
    <>      
<HeroSection/>
<JsonLd data={organizationSchema}/>
<JsonLd data={faqSchema}/>

</>

  );
}

  