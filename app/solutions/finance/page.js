"use client";

import Image from "next/image";

export default function FinancePage() {
  const benefits = [
    {
      title: "Customer Support",
      description:
        "Tegsoft helps banks and financial institutions provide fast, secure, and efficient support to clients.",
      image: "/images/finance1.png",
    },
    {
      title: "Internal Collaboration",
      description:
        "Streamline communication between departments to improve decision-making and reduce response times.",
      image: "/images/finance2.png",
    },
    {
      title: "Compliance & Security",
      description:
        "Ensure all communications adhere to financial regulations and maintain data security with Tegsoft solutions.",
      image: "/images/finance3.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate processes like loan approvals, account notifications, and transaction alerts to increase efficiency.",
      image: "/images/finance4.png",
    },
    {
      title: "Integration",
      description:
        "Integrate Tegsoft with core banking systems, CRMs, and fintech platforms for seamless operations.",
      image: "/images/finance5.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track customer interactions, service efficiency, and operational performance with actionable insights.",
      image: "/images/finance6.png",
    },
  ];

  return (
    <main className=" min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-30">
          {/* Left Column - Image */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0  h-64 sm:h-80 md:h-[400px] lg:h-[600px] md:-mt-60 xl:mt-5 lg:ml-30">
            <Image
              src="/images/finance.png"
              alt="Healthcare Communication"
               fill
              className="object-contain"
              priority
            />
          </div>
      
          {/* Right Column - Text */}
          <div className="md:w-1/2 text-center  md:text-left lg:mr-25 mt-2 lg:mt-5 md:mt-5 lg:mr-30">
            <h1 className="text-pink-800 text-2xl md:text-2xl font-bold mb-4 text-center lg:text-4xl">
               Finance Solutions with Tegsoft
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
              Tegsoft enhances communication, customer service, and operations for financial institutions by providing a secure, unified contact center platform designed for banks, insurance firms, and fintech organizations. It enables seamless interaction across multiple channels — including voice, email, chat, and social media — ensuring customers receive quick, reliable, and personalized service at every touchpoint.

With features like intelligent call routing, automated reminders, and real-time customer analytics, Tegsoft helps financial teams manage loan inquiries, account services, and transaction support more efficiently. The system also supports compliance with financial regulations by maintaining detailed communication logs and ensuring data privacy through encrypted channels.
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
        <h2 className="text-4xl font-bold text-pink-900 text-center mb-12">
          How Tegsoft Helps Financial Institutions
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
            Ready to Enhance Your Financial Operations?
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
