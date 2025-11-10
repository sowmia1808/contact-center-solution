"use client";

import Image from "next/image";

export default function EnergyPage() {
  const benefits = [
    {
      title: "Customer Service",
      description:
        "Tegsoft enables energy providers to handle customer inquiries, complaints, and service requests efficiently.",
      image: "/images/energy1.png",
    },
    {
      title: "Operations Coordination",
      description:
        "Improve coordination between field teams, dispatch centers, and management for timely maintenance and service delivery.",
      image: "/images/energy2.png",
    },
    {
      title: "Billing & Notifications",
      description:
        "Automate billing notifications, reminders, and alerts to customers for better engagement and timely payments.",
      image: "/images/energy3.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine processes like service requests, meter readings, and maintenance schedules to save time and reduce errors.",
      image: "/images/energy4.png",
    },
    {
      title: "Integration",
      description:
        "Integrate Tegsoft with ERP, CRM, and field management systems for centralized communication and operations.",
      image: "/images/energy5.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor operations, service quality, and customer satisfaction with actionable insights for informed decision-making.",
      image: "/images/energy6.png",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
       <section className="relative mt-20">
                    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-30">
                      {/* Left Column - Image */}
                      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0  h-64 sm:h-80 md:h-[400px] lg:h-[600px] md:-mt-60 xl:mt-5">
                        <Image
                          src="/images/energy.png"
                          alt="Healthcare Communication"
                           fill
                              className="object-contain"
                              priority
                        />
                      </div>
                  
                      {/* Right Column - Text */}
                      <div className="md:w-1/2 text-center  md:text-left lg:mr-25 mt-2 lg:mt-5 md:mt-5">
                        <h1 className="text-pink-800 text-2xl md:text-2xl font-bold mb-4 text-center lg:text-4xl">
                              Energy Solutions with Tegsoft
                        </h1>
                         <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
Tegsoft streamlines communication, operations, and customer service for energy and utility companies by providing a centralized platform to manage customer inquiries, outage reports, and service requests efficiently. With its intelligent call routing, automated alerts, and real-time monitoring tools, Tegsoft helps ensure quick issue resolution and uninterrupted customer support.

Utility providers can use Tegsoft’s multichannel communication — including voice, chat, email, and SMS — to proactively inform customers about maintenance schedules, billing updates, and emergency notifications. The system’s built-in analytics and reporting tools empower organizations to track performance, measure service quality, and identify recurring issues for continuous improvement.

By integrating Tegsoft with CRM, billing, and field service management systems, energy and utility providers can improve operational visibility, reduce downtime, and enhance customer satisfaction — all while ensuring secure, reliable, and scalable communication across their infrastructure.          </p>
                  
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
        <h2 className="text-3xl text-pink-800 font-bold text-gray-900 dark:text-white text-center mb-12">
          How Tegsoft Helps Energy Companies
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
            Ready to Enhance Your Energy Operations?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8">
            Connect with Tegsoft to improve communication, automate workflows, and deliver better service to your customers.
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
