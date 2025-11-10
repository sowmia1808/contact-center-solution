"use client";

import { motion } from "framer-motion";
import { FiPhoneCall, FiSettings, FiCheckCircle, FiServer, FiBriefcase } from "react-icons/fi";

export default function FeaturesAutoScroll() {
  const features = [
    { title: "HD Calling", icon: <FiPhoneCall className="w-6 h-6 text-pink-500" />, text: "HD Inbound & Outbound Calling for crystal clear conversations" },
    { title: "IVR", icon: <FiSettings className="w-6 h-6 text-pink-500" />, text: "Interactive Voice Response (IVR) to streamline call flows" },
    { title: "Analytics Dashboard", icon: <FiCheckCircle className="w-6 h-6 text-pink-500" />, text: "Real-time Call Monitoring and Analytics Dashboard" },
    { title: "Call Recording", icon: <FiServer className="w-6 h-6 text-pink-500" />, text: "Call Recording & Click-to-Call for better agent efficiency" },
    { title: "Custom SLAs", icon: <FiBriefcase className="w-6 h-6 text-pink-500" />, text: "Customizable Service Level Agreements (SLA) & Queues" },
    { title: "AI Workflows", icon: <FiPhoneCall className="w-6 h-6 text-pink-500" />, text: "AI-powered Workflows and Chatbot Automation" },
    { title: "Omnichannel Messaging", icon: <FiSettings className="w-6 h-6 text-pink-500" />, text: "Omnichannel Messaging: Voice, WhatsApp, Email, Chat" },
    { title: "CRM Integration", icon: <FiCheckCircle className="w-6 h-6 text-pink-500" />, text: "Seamless CRM and Business Application Integrations" },
    { title: "Cloud Deployment", icon: <FiServer className="w-6 h-6 text-pink-500" />, text: "Flexible Cloud Deployment for any business size" },
    { title: "Secure Communication", icon: <FiBriefcase className="w-6 h-6 text-pink-500" />, text: "Secure & Compliant Communications" },
  ];

  return (
   <section className="max-w-7xl mt-10 mb-20 mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Key Features of Tegsoft
  </h2>

  {/* Auto-scrolling container */}
  <div className="overflow-hidden relative w-full">
  <motion.div
    className="flex gap-3 sm:gap-5 md:gap-6"
    animate={{ x: ["0%", -1500] }} // 👈 scroll full width instead of -50%
    transition={{ repeat: Infinity, repeatType: "loop", duration: 25, ease: "linear" }}
  >
    {/* Duplicate 3 times for smoother infinite effect */}
    {[...features, ...features, ...features].map((feature, index) => (
      <div
        key={index}
        className="flex-shrink-0 
                   w-[160px] xs:w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] 
                   p-3 sm:p-4 md:p-5 
                   bg-white rounded-xl shadow-md hover:shadow-xl 
                   transition-transform duration-300 hover:-translate-y-1"
      >
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="bg-pink-100 p-2 rounded-full flex items-center justify-center">
            {feature.icon}
          </div>
          <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-800 break-words leading-tight">
            {feature.title}
          </h3>
        </div>
        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-snug break-words">
          {feature.text}
        </p>
      </div>
    ))}
  </motion.div>
</div>


</section>



  );
}
