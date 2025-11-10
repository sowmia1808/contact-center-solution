"use client";

import Image from "next/image";

export default function MunicipalityPage() {
  const benefits = [
    {
      title: "Citizen Support",
      description:
        "Tegsoft helps municipal offices provide fast and efficient responses to citizen inquiries and service requests.",
      image: "/images/municipality1.png",
    },
    {
      title: "Internal Communication",
      description:
        "Centralize communication between departments to ensure smooth workflow and faster resolution of public services.",
      image: "/images/municipality2.png",
    },
    {
      title: "Service Coordination",
      description:
        "Coordinate services like permits, licensing, and public utilities efficiently with automated notifications and follow-ups.",
      image: "/images/municipality3.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine municipal tasks such as appointment scheduling, complaint tracking, and document management.",
      image: "/images/municipality4.png",
    },
    {
      title: "Integration",
      description:
        "Integrate Tegsoft with municipal management systems, CRM, and public service platforms for centralized operations.",
      image: "/images/municipality5.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor citizen requests, department efficiency, and public feedback with actionable insights for better governance.",
      image: "/images/municipality6.png",
    },
  ];

  return (
    <main className=" min-h-screen">
      {/* Hero Section */}
        <section className="relative mt-30">
                                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-20">
                                  {/* Left Column - Image */}
                                  <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0  h-64 sm:h-80 md:h-[400px] lg:h-[600px] md:-mt-60 xl:mt-5">
                                    <Image
                                      src="/images/municipality.png"
                                      alt="Healthcare Communication"
                                      fill
                              className="object-contain"
                              priority
                                    />
                                  </div>
                              
                                  {/* Right Column - Text */}
                                  <div className="md:w-1/2 text-center  md:text-left lg:mr-25 mt-2 lg:mt-5 md:mt-5">
                                    <h1 className="text-pink-800 text-2xl md:text-2xl font-bold mb-4 text-center lg:text-4xl">
                                    Municipality Solutions with Tegsoft
                                    </h1>
                                      <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
            Tegsoft streamlines communication, citizen services, and internal workflows for municipal organizations, helping local governments deliver faster, more transparent, and citizen-centric services. With Tegsoft’s unified contact center solution, municipalities can efficiently manage public inquiries, service requests, and complaint tracking through multiple channels — voice, email, chat, and social media.

The platform enhances coordination between departments, reduces response times, and ensures accountability through advanced reporting and real-time dashboards. By integrating Tegsoft with existing municipal systems, city officials can gain actionable insights, improve public satisfaction, and build trust through consistent, data-driven service delivery.
          </p>
                              
                                    {/* CTA Button */}
                                    <div className="flex justify-center md:justify-center mt-5">
                                      <a
                                        href="#contact"
                                        className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                                      >
                                        Get a Free Demo
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </section>
      

      {/* Key Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-pink-900 text-center mb-12 lg:text-4xl">
          How Tegsoft Helps Municipal Organizations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-100 dark:bg-pink-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Improve Your Municipal Services?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8">
            Connect with Tegsoft to enhance communication, optimize workflows, and deliver better services to citizens.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-900 dark:bg-pink-300 text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-pink-700 dark:hover:bg-pink-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
