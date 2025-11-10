"use client";

import Image from "next/image";

export default function EducationPage() {
  const benefits = [
    {
      title: "Student Communication",
      description:
        "Tegsoft helps schools and universities maintain seamless communication with students, parents, and staff.",
      image: "/images/education1.png",
    },
    {
      title: "Administration Efficiency",
      description:
        "Streamline administrative tasks such as attendance, notifications, and scheduling with automated workflows.",
      image: "/images/education2.png",
    },
    {
      title: "Parent Engagement",
      description:
        "Keep parents informed with real-time updates about student progress, events, and important announcements.",
      image: "/images/education3.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate routine processes like exam notifications, fee reminders, and report generation to save time.",
      image: "/images/education4.png",
    },
    {
      title: "Integration",
      description:
        "Integrate Tegsoft with existing school management systems, CRMs, and online learning platforms.",
      image: "/images/education5.png",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track student engagement, teacher performance, and institutional metrics for data-driven decisions.",
      image: "/images/education6.png",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
              <div className="container mx-auto px-6 flex flex-col md:flex-row items-center mt-30">
                {/* Left Column - Image */}
                <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0  h-64 sm:h-80 md:h-[400px] lg:h-[600px] md:-mt-60 xl:mt-5">
                  <Image
                    src="/images/education.png"
                    alt="Healthcare Communication"
                    fill
                              className="object-contain"
                              priority
                  />
                </div>
            
                {/* Right Column - Text */}
                <div className="md:w-1/2 text-center  md:text-left lg:mr-25 mt-2 lg:mt-5 md:mt-5 lg:ml-20">
                  <h1 className="text-pink-800 text-2xl md:text-2xl font-bold mb-4 text-center lg:text-4xl">
                       Education Solutions with Tegsoft
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto text-justify">
Tegsoft enhances communication, administration, and engagement for educational institutions by connecting students, parents, and staff through a unified communication platform. Schools, colleges, and universities can use Tegsoft’s intelligent contact center solution to manage inquiries, admissions, attendance, and support requests more efficiently.

With features like call routing, chatbots, and automated notifications, Tegsoft ensures seamless coordination between academic departments, improving both student satisfaction and operational productivity. Educational administrators can track performance with real-time analytics and manage communication history for better transparency.

By integrating Tegsoft with learning management systems (LMS) and student information systems (SIS), institutions can deliver personalized communication, strengthen parent engagement, and streamline administrative workflows — creating a more connected and responsive learning environment.          </p>
            
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
        <h2 className="text-2xl text-pink-800 font-bold text-gray-900 dark:text-white text-center mb-12 lg:text-4xl">
          How Tegsoft Helps Educational Institutions
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
            Ready to Enhance Education Communication & Management?
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-8 text-justify">
            Connect with Tegsoft to improve communication, automate administrative workflows, and engage students and parents effectively.
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
