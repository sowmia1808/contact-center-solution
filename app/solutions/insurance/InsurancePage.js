"use client";

import Image from "next/image";

export default function InsurancePage() {
  const benefits = [
    {
      title: "Customer Support",
      description:
        "Tegsoft helps insurance companies provide timely and efficient support to policyholders, handling inquiries, claims, and renewals.",
      image: "/images/customer care.png",
    },
    {
      title: "Secure Communication",
      description:
        "Ensure safe communication between agents, clients, and internal departments, protecting sensitive policyholder data.",
      image: "/images/secure.jpg",
    },
    {
      title: "Claims Management",
      description:
        "Streamline claims processing and coordination between departments for faster resolution and higher customer satisfaction.",
      image: "/images/call.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine administrative tasks like policy updates, reminders, and documentation, freeing up staff for value-added tasks.",
      image: "/images/wf.jpg",
    },
    {
      title: "Integration",
      description:
        "Integrate Tegsoft with CRM and insurance management systems to centralize communication and data.",
      image: "/images/integ.jpg",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track call volume, agent performance, and customer inquiries with real-time dashboards and actionable insights.",
      image: "/images/analy.jpg",
    },
  ];

  return (
    <main className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative mt-30">
                          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                            {/* Left Column - Image */}
                            <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0 lg:ml-25 h-64 sm:h-80 lg:h-200 md:h-150">
                              <Image
                              src="/images/insurance.png"
                              alt="Insurance Communication"
                              fill
                              className="object-contain"
                              priority
                              />
                            </div>
                        
                            {/* Right Column - Text */}
                            <div className="md:w-1/2 text-center md:text-left lg:mr-25 -mt-15 lg:mt-5 md:mt-5 lg:mt-16">
                              <h1 className="text-pink-800 text-3xl md:text-4xl font-bold mb-4 text-center">
            Insurance Solutions with Tegsoft
          </h1>
                                <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify
                              ">
           Tegsoft Contact Center Solution helps insurance companies improve efficiency, strengthen customer relationships, and simplify internal communication across departments. By bringing all customer interactions  from policy inquiries to claims support into one unified platform, Tegsoft enables faster responses, higher accuracy, and better customer experiences.

With integrated voice, chat, email, and WhatsApp communication channels, insurance teams can easily manage new policy requests, renewals, and claim follow-ups without switching between systems. Tegsoft’s intelligent routing ensures customers connect to the right agent or department instantly, reducing wait times and improving satisfaction.

Tegsoft also enhances operational efficiency through workflow automation and real-time reporting tools that help supervisors track performance, analyze customer behavior, and make data-driven decisions. Seamless integration with CRM and policy management systems allows insurers to access complete customer histories, maintain compliance, and ensure transparency throughout the process.

In an era where digital transformation and AI-driven customer service define success, Tegsoft empowers insurance companies to deliver smarter, faster, and more personalized communication helping them build trust, loyalty, and long-term client relationships.
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
        <h2 className="text-3xl font-bold text-gray-900 text-pink-800 text-center mb-12">
          How Tegsoft Helps Insurance Companies
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
            Ready to Improve Your Insurance Communication?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8">
            Connect with Tegsoft to streamline your operations, enhance customer service, and increase productivity.
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
