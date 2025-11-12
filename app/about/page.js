// app/about/page.js
import { 
  FaComments, 
  FaChartLine, 
  FaRobot, 
  FaProjectDiagram, 
  FaExpandArrowsAlt, 
  FaCloud, 
  FaHeadset 
} from "react-icons/fa";
import JsonLd from "../../components/seo/JsonLd";
import { organizationSchema } from "../../components/seo/schema/organization";


export const metadata = {
  title: "About Us | Contact Center Solution in Dubai - Tegsoft UAE",
  description: "Learn about our contact center solutions in Dubai, UAE. Official Tegsoft partner providing cloud-based and on-premise call center software.",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "Contact Center Solution Dubai",
    "Call Center Software UAE",
    "Tegsoft Partner Dubai",
    "Omnichannel Call Center UAE",
  ],
  openGraph: {
    title: "About Us | Contact Center Solution in Dubai - Tegsoft UAE",
    description: "Learn about Tegsoft UAE contact center solutions: cloud-based, on-premise, inbound, outbound, blended & omnichannel.",
    url: "https://techbee.ae/about",
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "https://techbee.ae/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft Contact Center UAE",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Contact Center Solution in Dubai - Tegsoft UAE",
    description: "Learn about Tegsoft UAE contact center solutions: cloud-based, on-premise, inbound, outbound, blended & omnichannel.",
    images: ["https://techbee.ae/images/about-og.jpg"],
    site: "@TegsoftUAE",
  },
};


export default function About() {
  return (

<section className="relative w-full py-16 lg:py-28 lg:mt-20 mt-10 md:mt-20">
  <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:flex lg:items-start lg:gap-12">
    {/* Left Side - Video */}
     <div className="relative w-full h-55 sm:h-90 md:h-110 lg:h-[500px] rounded-xl overflow-hidden mt-10">
    <video
      className="object-cover w-full h-full rounded-xl"
      src="/videos/about.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
    <div className="absolute inset-0 bg-black/20"></div>
  </div>

    {/* Right Side - Content */}
    <div className="lg:w-1/2 mt-10 lg:mt-0 text-center lg:text-left space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4 lg:text-2xl lg:text-center">
        About Our Contact Center Solution in Dubai
      </h2>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        Tegsoft offers a state-of-the-art <span className="font-semibold">contact center solution in Dubai</span>, designed for businesses to deliver superior customer experiences. 
        Our platform is <span className="font-semibold">cloud-based, scalable, and flexible</span>, suitable for startups, SMEs, and large enterprises alike.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        With Tegsoft, you can manage <span className="font-semibold">inbound, outbound, blended, and omnichannel communications</span> seamlessly. 
        Our advanced features like <span className="font-semibold">intelligent call routing, CRM integration, real-time analytics, and automated reporting</span> help you optimize workflows and enhance agent productivity.
      </p>

      <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        Flexible demo options include a <span className="font-semibold">free on-premise demo</span> or a 
        <span className="font-semibold"> 30-day cloud trial with money-back guarantee</span>, allowing you to experience Tegsoft before investing.
      </p>

      {/* CTA Button */}
     

      {/* Additional SEO paragraph */}
      
    </div>
  </div>

  {/* Full-width Why Choose Tegsoft Section */}
  <div className="w-full mt-1 py-12 ">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <h3 className="text-3xl font-bold text-pink-600 mb-10 text-center">
      Why Choose Tegsoft?
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaComments className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Seamless <span className="font-semibold">multichannel communication</span> across voice, chat, email, and social media
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaChartLine className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Real-time <span className="font-semibold">analytics and performance monitoring</span> to track KPIs
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaRobot className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <span className="font-semibold">AI-assisted automation</span> to handle repetitive queries and improve response time
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaProjectDiagram className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Integration with <span className="font-semibold">CRM, ERP, and other third-party tools</span>
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaExpandArrowsAlt className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Highly <span className="font-semibold">scalable and customizable</span> for businesses of any size
        </p>
      </div>

      {/* Feature 6 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition">
        <FaCloud className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          <span className="font-semibold">Cloud or on-premise deployment</span> options based on your preference
        </p>
      </div>

      {/* Feature 7 */}
      <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition sm:col-span-2 lg:col-span-1">
        <FaHeadset className="text-pink-500 text-3xl flex-shrink-0" />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Dedicated <span className="font-semibold">UAE-based support team</span> for fast issue resolution
        </p>
      </div>
    </div>
  </div>
</div>

    
        <div className="max-w-7xl lg:ml-85 ml-5 mr-5 ">
        <p className="text-gray-700 text-sm sm:text-base mt-6 leading-relaxed text-justify">
        Serving businesses across <span className="font-semibold">Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and the UAE</span>, Tegsoft ensures reliable and modern contact center solutions that improve customer satisfaction and streamline operations. 
        Choose Tegsoft to elevate your customer service experience.
      </p>
       <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition duration-300">
        Book a Demo
      </button>
      </div>
     
<JsonLd data={organizationSchema}/>

</section>




  )
}
