"use client";

import Image from "next/image";

export default function TravelTourismPage() {
  const benefits = [
    {
      title: "Customer Support",
      description:
        "Provide quick and efficient support to travelers for bookings, inquiries, and assistance.",
      image: "/images/travel1.png",
    },
    {
      title: "Booking Coordination",
      description:
        "Streamline communication between travel agents, hotels, and transport services to avoid errors and delays.",
      image: "/images/travel2.png",
    },
    {
      title: "Tour Management",
      description:
        "Efficiently manage group tours, itineraries, and travel schedules while keeping all stakeholders informed.",
      image: "/images/travel3.png"
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine administrative tasks like confirmations, reminders, and follow-ups to save time and reduce errors.",
      image: "/images/travel4.png",
    },
    {
      title: "Integration",
      description:
        "Integrates seamlessly with booking systems, CRM, and travel management software for centralized communication.",
      image: "/images/travel5.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Monitor bookings, customer interactions, and agent performance to make data-driven decisions.",
      image: "/images/travel6.png",
    },
  ];

  return (
    <main className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-30">
                                            <div className="container  flex flex-col md:flex-row items-center text-justify mt-22">
                                              {/* Left Column - Image */}
                                              <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0  h-64 sm:h-80 md:h-[400px] lg:h-[600px] md:-mt-60 xl:mt-5 lg:ml-86">
                                                <Image
                                                  src="/images/travel and tourism.png"
                                                  alt="Travel and Tourism Communication"
                                                  fill
                                                  className="object-cover"
                                                  priority
                                                />
                                              </div>

                                              {/* Right Column - Text */}
                                              <div className="md:w-1/2 text-center md:text-left   lg:mt-10 ">
                                                <h1 className="text-pink-800 text-3xl text-xl md:text-3xl font-bold mb-4 text-center ml-2 mr-2">
            Travel & Tourism Solutions with Tegsoft
          </h1>
                                                  <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify ml-5 mr-5">
           Tegsoft improves customer support, booking coordination, and operational efficiency for travel and tourism businesses. By unifying all communication channels — including calls, emails, live chat, and WhatsApp — Tegsoft enables travel agents and tour operators to deliver faster, more personalized service to customers.

With automated workflows and intelligent call routing, teams can manage bookings, handle cancellations, and provide real-time travel assistance with ease. Tegsoft’s CRM integration allows agents to track customer preferences, manage itineraries, and offer personalized recommendations that enhance the overall travel experience.
Designed for scalability, Tegsoft helps travel companies streamline internal collaboration between sales, operations, and support teams, ensuring seamless service delivery from inquiry to post-trip feedback. Whether managing group tours, hotel reservations, or travel packages, Tegsoft empowers tourism businesses to improve efficiency, enhance customer satisfaction, and boost repeat bookings.</p>
                                          
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
        <h2 className="text-xl font-bold text-gray-900 text-pink-800 text-center mb-12">
          How Tegsoft Helps Travel & Tourism Businesses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white  p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center text-center"
            >
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="rounded-lg object-contain  "
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
            Ready to Enhance Your Travel & Tourism Operations?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8">
            Connect with Tegsoft to streamline bookings, improve customer support, and optimize your travel business workflows.
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
