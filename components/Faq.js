// components/Faq.js
"use client"; 
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqsData } from "../components/seo/schema/faqsData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-8xl mx-auto px-6 lg:px-8 py-20 -mt-25 lg:ml-25 lg:mr-25 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-900 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-white text-center mb-10 max-w-2xl mx-auto">
        Still have questions? Read this section below to get your mind clear.
      </p>

      <div className="space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-lg border-2 border-pink-200 rounded-xl p-4 sm:p-6 cursor-pointer transition shadow-lg hover:shadow-xl"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-pink-600">
                {faq.question}
              </h3>
              <span className="text-pink-600">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-100 mt-4 text-sm sm:text-base leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
