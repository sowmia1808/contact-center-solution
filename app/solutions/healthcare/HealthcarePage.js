"use client";

import Image from "next/image";

export default function HealthcarePage() {
  const benefits = [
    {
      title: "Patient Support",
      description:
        "Handle patient inquiries efficiently, reduce wait times, and improve satisfaction.",
      image: "/images/patientsupport.png",
    },
    {
      title: "Secure Communication",
      description:
        "Ensure secure internal and external communication between staff, doctors, and patients.",
      image: "/images/communication.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine administrative tasks to focus on patient care and operational efficiency.",
      image: "/images/workflow.png",
    },
    {
      title: "Call Management",
      description:
        "Centralized call handling ensures no patient call goes unanswered.",
      image: "/images/call.png",
    },
    {
      title: "Integration",
      description:
        "Integrates with hospital management systems, EMRs, and patient databases seamlessly.",
      image: "/images/integration.png",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Monitor call volume, patient inquiries, and staff performance with real-time analytics.",
      image: "/images/reporting.png",
    },
  ];

  return (
    <main className="min-h-screen ">
  {/* Hero Banner Section */}
 <section className="relative mt-30">
  <div className="container mx-auto  flex flex-col md:flex-row items-center">
    {/* Left Column - Image */}
    <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
      <Image
        src="/images/healthcare.png"
        alt="Healthcare Communication"
        width={800}
        height={800}
        className="object-contain"
      />
    </div>

    {/* Right Column - Text */}
    <div className="md:w-1/2 text-center md:text-left lg:mt-16">
      <h1 className="text-xl md:text-4xl font-extrabold text-pink-800 mb-6 text-gray-900 drop-shadow-lg">
        Healthcare Solutions with Tegsoft
      </h1>
      <p className="text md:text-xl md:-ml-2 lg:-ml-1 mb-8 ml-5 mr-5 text-gray-700 leading-relaxed text-justify">
        Tegsoft Contact Center Solution empowers healthcare organizations with smarter communication and seamless patient engagement. In today’s digital era — where AI-driven tools and intelligent automation are reshaping patient experience — Tegsoft helps hospitals, clinics, and telemedicine providers deliver faster, more personalized, and reliable support.

With advanced call management, chat, email, and WhatsApp integration, Tegsoft centralizes all patient interactions in one secure platform. Healthcare teams can easily manage appointments, handle inquiries, and coordinate across departments — reducing wait times and improving service quality.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center md:justify-start">
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto ml-5 mr-5 lg:ml-20 lg:mr-20">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Key Benefits for Healthcare
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
            Ready to Transform Your Healthcare Communication?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8 text-justify">
            Get in touch with Tegsoft to improve efficiency, patient satisfaction, and internal workflows.
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
