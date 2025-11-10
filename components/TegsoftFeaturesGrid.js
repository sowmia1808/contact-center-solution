import Link from "next/link";
import { FiSettings, FiPhoneCall, FiServer, FiCheckCircle, FiBriefcase } from "react-icons/fi";

export default function TegsoftFeaturesGrid() {
  const features = [
    {
      title: "Features",
      description:
        "Discover advanced call center functionalities like IVR, AI workflows, omnichannel support, and real-time analytics.",
      link: "/whytegsoft/features",
      icon: <FiSettings className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Voice Quality",
      description:
        "Experience crystal-clear HD voice, noise reduction, and seamless call connectivity for exceptional customer interactions.",
      link: "/whytegsoft/voice-quality",
      icon: <FiPhoneCall className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Deployment Options",
      description:
        "Flexible cloud or on-premise deployment options to scale your contact center as your business grows.",
      link: "/whytegsoft/deployment-options",
      icon: <FiServer className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Benefits",
      description:
        "Increase agent productivity, improve customer satisfaction, and streamline operations with Tegsoft’s powerful tools.",
      link: "/whytegsoft/benefits",
      icon: <FiCheckCircle className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Use Cases",
      description:
        "Explore real-world applications of Tegsoft for sales, support, marketing, and enterprise-level contact centers.",
      link: "/whytegsoft/use-cases",
      icon: <FiBriefcase className="w-6 h-6 text-pink-500" />
    }
  ];

  return (
    <div className="max-w-7xl -mt-10 mr-5 ml-5">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-8">Explore Tegsoft</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="relative p-6 border-2 border-pink-300 rounded-xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Top-right icon */}
            <div className="absolute top-4 right-4 bg-pink-100 rounded-full p-2">
              {feature.icon}
            </div>

            <h3 className="text-xl font-semibold text-pink-600 mb-2">{feature.title}</h3>
            <p className="text-gray-700 mb-4">{feature.description}</p>
            <Link href={feature.link} className="text-pink-500 font-semibold hover:underline">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
