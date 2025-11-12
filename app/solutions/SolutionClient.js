"use client";
import Image from "next/image";
import solutionimg from "../../public/images/solutions.png"
import { motion } from "framer-motion";
import { FiPhoneCall, FiUpload, FiShuffle, FiMessageSquare, FiActivity, FiUsers, FiLayers, FiBarChart2, FiLink } from "react-icons/fi";
import Faq from "../../components/Faq"

export default function Solutionclient() {
  const solutions = [
    {
      icon: <FiPhoneCall className="w-8 h-8 text-pink-600" />,
      title: "Inbound Contact Center",
      desc: "Manage incoming calls efficiently with IVR, skill-based routing, and intelligent queue management. Reduce wait times and connect customers to the right agent faster.",
    },
    {
      icon: <FiUpload className="w-8 h-8 text-pink-600" />,
      title: "Outbound Campaigns",
      desc: "Launch sales and follow-up campaigns using predictive dialers, auto-dialing, and call scheduling. Improve lead conversions with personalized scripts and history insights.",
    },
    {
      icon: <FiShuffle className="w-8 h-8 text-pink-600" />,
      title: "Blended Contact Center",
      desc: "Give agents the flexibility to handle both inbound and outbound calls in one seamless interface, boosting productivity and reducing idle time.",
    },
    {
      icon: <FiMessageSquare className="w-8 h-8 text-pink-600" />,
      title: "Omnichannel Engagement",
      desc: "Engage customers across voice, email, live chat, WhatsApp, and social media — all managed in a unified dashboard for seamless experiences.",
    },
    {
      icon: <FiActivity className="w-8 h-8 text-pink-600" />,
      title: "Real-Time Monitoring",
      desc: "Supervisors can monitor live calls, whisper to agents, and intervene if needed. Dashboards display KPIs, active calls, and SLA compliance in real time.",
    },
    {
      icon: <FiUsers className="w-8 h-8 text-pink-600" />,
      title: "Agent & Supervisor Dashboards",
      desc: "Agents enjoy a clean interface with customer history, while supervisors access performance analytics, agent status, and workforce insights.",
    },
    {
      icon: <FiLayers className="w-8 h-8 text-pink-600" />,
      title: "Intelligent Queue Management",
      desc: "Organize and prioritize queues based on skills, departments, or SLAs. Automatically reroute calls during peak load or when agents are unavailable.",
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-pink-600" />,
      title: "Analytics & Reporting",
      desc: "Access detailed reports on call volumes, agent performance, and customer satisfaction. Combine real-time and historical data to optimize operations.",
    },
    {
      icon: <FiLink className="w-8 h-8 text-pink-600" />,
      title: "CRM & Business Integrations",
      desc: "Integrate Tegsoft with popular CRM, ERP, and ticketing systems. Ensure data consistency and streamlined workflows across business functions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Page Heading */}
     <div className="relative w-full md:h-[500px] lg:h-[700px] h-[200px]">
  <Image
    src={solutionimg}
    alt="Tegsoft Contact Center Solutions"
    className="object-fill"
    fill
    sizes="100vw"
    priority
  />
</div>

      {/* Right Side - Text */}
      <div className="text-center lg:text-left mt-15">
        <h1 className="text-xl md:text-5xl font-extrabold text-pink-700 mb-6 leading-tight text-center">
          Tegsoft Contact Center Solutions in UAE
        </h1>
        <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed max-w-7xl mx-auto lg:mx-0 text-justify">
          Tegsoft delivers scalable and intelligent contact center solutions designed to empower businesses 
          in the UAE. From inbound and outbound communication to omnichannel engagement and real-time 
          monitoring, our platform ensures customer satisfaction, agent productivity, and operational excellence.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-15">
      {solutions.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white/20 backdrop-blur-lg border-2 border-pink-200
                     rounded-xl shadow-lg hover:shadow-xl 
                     transition p-6 text-center flex flex-col items-center"
        >
          <div className="mb-4 p-4 bg-pink-100 rounded-full flex items-center justify-center">
            {item.icon}
          </div>
          <h2 className="text-xl font-semibold text-pink-700 mb-3">
            {item.title}
          </h2>
          <p className="text-gray-700 text-sm md:text-base text-justify">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
    <Faq/>


      {/* CTA */}
      <div className=" text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-800 mb-4">
          Ready to Upgrade Your Contact Center?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-justify">
          Experience the power of Tegsoft Contact Center solutions in Dubai and across the UAE. 
          Book a free demo today and see how you can transform customer interactions.
        </p>
        <button className="rounded-full bg-pink-600 text-white px-10 py-4 hover:bg-pink-700 transition font-semibold">
          Book a Demo
        </button>
      </div>
    </div>
  );
}
