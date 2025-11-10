// app/why-tegsoft/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiSettings, FiPhoneCall, FiServer, FiCheckCircle, FiBriefcase } from "react-icons/fi";
import voice from "../../../public/images/voice.png"
import AnimatedImage from "./AnimatedImage";




const pagesContent = {
  features: {
    title: "Tegsoft Features",
    description:
      "Discover advanced call center functionalities like IVR, AI workflows, omnichannel support, and real-time analytics.",
    image: "/images/features.png",
    icon: <FiSettings className="w-6 h-6 text-pink-500" />,
    details: [
      "Interactive Voice Response (IVR) to automate call routing and reduce wait times.",
      "AI-assisted workflows for faster customer issue resolution.",
      "Omnichannel support: calls, email, chat, and WhatsApp integration.",
      "Real-time analytics for monitoring performance and improving service quality.",
      "Seamless CRM integration to unify customer data."
    ],
    seoKeywords: [
      "Tegsoft UAE",
      "call center software UAE",
      "IVR solutions",
      "omnichannel contact center",
      "cloud-based contact center"
    ]
  },
  "voice-quality": {
    title: "Tegsoft Voice Quality",
    description:
      "Experience crystal-clear HD voice, noise reduction, and seamless call connectivity for exceptional customer interactions.",
    image: voice,
    icon: <FiPhoneCall className="w-6 h-6 text-pink-500" />,
    details: [
      "HD voice ensures every conversation is crisp and clear.",
      "Advanced noise reduction for better call clarity in noisy environments.",
      "Seamless connectivity to prevent call drops and interruptions.",
      "Enhanced call recording for quality assurance and training.",
    ],
    seoKeywords: [
      "HD voice call",
      "call quality improvement",
      "Tegsoft voice",
      "contact center communication",
      "UAE call center solutions"
    ]
  },
  "deployment-options": {
    title: "Deployment Options",
    description:
      "Flexible cloud or on-premise deployment options to scale your contact center as your business grows.",
    image: "/images/deployment.png",
    icon: <FiServer className="w-6 h-6 text-pink-500" />,
    details: [
      "Cloud deployment: easy setup, minimal infrastructure, accessible from anywhere.",
      "On-premise deployment: full control over hardware and data security.",
      "Hybrid deployment: best of both worlds for enterprise flexibility.",
      "Scalable architecture for small to large call centers."
    ],
    seoKeywords: [
      "cloud contact center",
      "on-premise Tegsoft",
      "call center deployment UAE",
      "hybrid contact center solution"
    ]
  },
  benefits: {
    title: "Tegsoft Benefits",
    description:
      "Increase agent productivity, improve customer satisfaction, and streamline operations with Tegsoft’s powerful tools.",
    image: "/images/benefits.png",
    icon: <FiCheckCircle className="w-6 h-6 text-pink-500" />,
    details: [
      "Boost agent efficiency with AI-assisted tools.",
      "Enhance customer experience with fast, accurate service.",
      "Streamline call center processes and reduce operational costs.",
      "Track performance metrics in real-time for data-driven decisions."
    ],
    seoKeywords: [
      "Tegsoft benefits",
      "increase agent productivity",
      "customer satisfaction UAE",
      "call center efficiency"
    ]
  },
  "use-cases": {
    title: "Tegsoft Use Cases",
    description:
      "Explore real-world applications of Tegsoft for sales, support, marketing, and enterprise-level contact centers.",
    image: "/images/casestudy.png",
    icon: <FiBriefcase className="w-6 h-6 text-pink-500" />,
    details: [
      "Sales: increase conversions with intelligent outbound campaigns.",
      "Customer support: resolve issues faster with omnichannel support.",
      "Marketing: run campaigns with integrated customer insights.",
      "Enterprise: manage high-volume interactions efficiently."
    ],
    seoKeywords: [
      "Tegsoft use cases",
      "call center examples UAE",
      "enterprise contact center solutions",
      "sales and support software"
    ]
  }
};

// Add this function for static export
export async function generateStaticParams() {
  return Object.keys(pagesContent).map((slug) => ({ slug }));
}


export default function WhyTegsoftSlugPage({ params }) {
  const { slug } = params;
  const pageData = pagesContent[slug];

  if (!pageData) {
    notFound();
  }
  

  return (
   <div className="max-w-7xl lg:mx-auto lg:px-6 lg:py-16 lg:mt-15 mt-50 mr-5 ml-5 lg:mt-30 md:mt-54">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
    {/* Text Content */}
    <div className="lg:w-1/2 relative">
      {/* Decorative Icon */}
      <div className="absolute -top-6 -right-6 bg-pink-100 p-4 rounded-full shadow-lg animate-pulse mr-5">
        {pageData.icon}
      </div>

      {/* Title */}
      <h1 className="text-4xl lg:text-5xl font-bold text-pink-600 mb-2">{pageData.title}</h1>

      {/* Description */}
      <p className="text-gray-700 mb-6 leading-relaxed text-lg">{pageData.description}</p>

      {/* Details / Bullet Points */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
  {pageData.details.map((item, index) => (
    <li
      key={index}
      className="flex items-start gap-4 p-5 bg-pink-50 border-l-4 border-pink-500 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
    >
      {/* Icon */}
      <div className="flex-shrink-0 mt-1">
        <FiCheckCircle className="w-6 h-6 text-pink-500" />
      </div>

      {/* Text */}
      <p className="text-gray-700 leading-relaxed">{item}</p>
    </li>
  ))}
</ul>

      {/* Internal Links for SEO */}
      <p className="text-gray-700 mb-4">
        Learn more about other{" "}
        <Link href="/why-tegsoft" className="text-pink-500 hover:underline font-semibold">
          Tegsoft solutions
        </Link>{" "}
        to improve your contact center operations.
      </p>

      <Link
        href="/whytegsoft"
        className="inline-block mt-4 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow hover:bg-pink-600 transition mb-10"
      >
        ← Back to Why Tegsoft
      </Link>
    </div>

    {/* Image */}
<AnimatedImage src={pageData.image} alt={pageData.title} />  


  </div>
</div>

  );
}
