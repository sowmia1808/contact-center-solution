"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser"; 

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    companyname:"",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  // 1️⃣ Send email to Admin
  emailjs.send(
    "service_z4sjz6g",          // Your EmailJS Service ID
    "template_8vwsybw",         // Admin template ID
    formData,                    // formData object
    "QhexQlB877HpD5wdO"         // Your Public Key
  ).then(
    () => {
      console.log("Admin email sent");
    },
    (error) => {
      console.error("Admin email failed:", error);
    }
  );

  // 2️⃣ Send Auto-Reply to User
  emailjs.send(
    "service_z4sjz6g",          // Your EmailJS Service ID
    "template_r7u55po",         // Auto-reply template ID
    formData,
    "QhexQlB877HpD5wdO"         // Your Public Key
  ).then(
    () => {
      setStatus("✅ Message sent successfully! Check your email for confirmation.");
      setFormData({ name: "", companyname: "", email: "", phone: "", message: "" });
    },
    (error) => {
      console.error("Auto-reply failed:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  ).finally(() => setLoading(false));
};
  return (
    <section className="relative mb-16 mt-5 lg:mt-35">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-stretch p-5">

    {/* Left Side Image - hidden on small screens */}
    <div className="relative w-full lg:w-1/2 h-80 sm:h-[400px] md:h-[500px] lg:h-auto hidden lg:block ">
      <Image
        src="/images/contact.png"
        alt="Contact Center Solutions"
        fill
        className="object-contain rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
      />
    </div>

    {/* Right Side Form */}
    <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border border-pink-100 lg:w-1/2 flex flex-col justify-center rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none ">
      <h2 className="text-3xl font-bold text-pink-700 mb-4">
        Get in Touch
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Have questions about our Contact Center Solutions? Fill out the form below and our team will reach out shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <label
            htmlFor="name"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm
                       peer-focus:text-pink-600 bg-white dark:bg-gray-900 px-1"
          >
            Full Name
          </label>
        </div>
        <div className="relative">
          <input
            type="text"
            id="companyname"
            name="companyname"
            placeholder=" "
            value={formData.companyname}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <label
            htmlFor="companyname"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm
                       peer-focus:text-pink-600 bg-white dark:bg-gray-900 px-1"
          >
            Company Name
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm
                       peer-focus:text-pink-600 bg-white dark:bg-gray-900 px-1"
          >
            Email Address
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder=" "
            pattern="[0-9]{8,15}"
            value={formData.phone}
            onChange={handleChange}
            required
            className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm
                       peer-focus:text-pink-600 bg-white dark:bg-gray-900 px-1"
          >
            Phone Number
          </label>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            className="peer w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-4 top-3 text-gray-500 dark:text-gray-400 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400
                       peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-sm
                       peer-focus:text-pink-600 bg-white dark:bg-gray-900 px-1"
          >
            Your Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg text-lg font-medium transition duration-300 shadow-md hover:shadow-lg"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {status && <p className="mt-4 text-center">{status}</p>}
      </form>
    </div>
  </div>
</section>

  );
}
