"use client";

import Image from "next/image";

export default function RealEstatePage() {
  const benefits = [
    {
      title: "Client Management",
      description:
        "Tegsoft helps real estate agencies manage client inquiries efficiently, ensuring no lead is missed.",
      image: "/images/realestate2.jpg",
    },
    {
      title: "Property Communication",
      description:
        "Centralize communication between agents, buyers, and sellers for faster property transactions.",
      image: "/images/realestate3.png",
    },
    {
      title: "Lead Tracking",
      description:
        "Track potential leads, schedule follow-ups, and ensure timely responses for higher conversion rates.",
      image: "/images/realestate4.jpg",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine tasks like appointment reminders, document handling, and reporting, saving time for agents.",
      image: "/images/realestate5.jpg",
    },
    {
      title: "Integration",
      description:
        "Integrates seamlessly with CRM, property management systems, and internal databases.",
      image: "/images/realestate6.webp",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor agent performance, property inquiries, and sales trends with actionable analytics.",
      image: "/images/realestate analytics.png",
    },
  ];

  return (
    <main className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-30">
                                      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                                        {/* Left Column - Image */}
                                        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 lg:ml-25 h-64 sm:h-80 lg:h-125 md:h-125">
                                          <Image
                                            src="/images/realestate1.png"
                                            alt="Healthcare Communication"
                                            fill
                                            className="object-contain"
                                            priority
                                          />
                                        </div>
                                    
                                        {/* Right Column - Text */}
                                        <div className="md:w-1/2 text-center md:text-left lg:mr-25 mt-5 lg:mt-16 md:mt-10">
                                          <h1 className="text-pink-800 text-3xl md:text-4xl font-bold mb-4 text-center">
            Real Estate Solutions with Tegsoft
          </h1>
                                            <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
            Tegsoft streamlines communication, client management, and sales operations for real estate companies, helping agents and brokers deliver faster, more personalized service. By centralizing all client interactions — including phone calls, emails, and messaging apps like WhatsApp — Tegsoft ensures that inquiries are tracked, leads are nurtured efficiently, and follow-ups never get missed.

With integrated CRM tools, real estate teams can manage property listings, schedule viewings, and maintain complete client histories in one platform. Automated notifications and reminders improve response times, while real-time dashboards provide insights into agent performance, lead conversion, and sales trends.
Tegsoft also supports workflow automation, enabling real estate companies to reduce administrative tasks, coordinate between sales, marketing, and operations teams, and focus on closing deals. By enhancing collaboration, communication, and data-driven decision-making, Tegsoft empowers real estate businesses to improve client satisfaction, boost sales efficiency, and stay competitive in the digital age.
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
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12 text-pink-800">
          How Tegsoft Helps Real Estate Companies
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
            Ready to Improve Your Real Estate Communication?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8">
            Connect with Tegsoft to streamline your operations, enhance customer service, and increase property sales.
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
