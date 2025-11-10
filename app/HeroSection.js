"use client";
import Image from "next/image";
import heroimage from "../public/images/heroimage.png"
import abouthome from "../public/images/about.png"
import ProductCard from "../components/ProductCard";
import { motion } from "framer-motion";
import { FaCommentDots, FaPhoneAlt, FaHeadset, FaRandom, FaProjectDiagram } from "react-icons/fa";
import Link from "next/link";
import {useRef, useEffect, useState } from "react";
import Faq from "../components/Faq"



export default function HeroSection() {
  const imageRef = useRef(null);
  const [radius, setRadius] = useState(0);
   const [formData, setFormData] = useState({
      name: "",
      companyname:"",
      email: "",
      phone: "",
      message: "",
    });

    // Update radius based on image size
  useEffect(() => {
    function updateRadius() {
      if (imageRef.current) {
        const imgWidth = imageRef.current.offsetWidth;
        setRadius(imgWidth / 2 + 40); // 40px gap outside image
      }
    }

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);
   const icons = [
    <FaCommentDots size={36} key={0} />,
    <FaPhoneAlt size={36} key={1} />,
    <FaHeadset size={36} key={2} />,
    <FaRandom size={36} key={3} />,
    <FaProjectDiagram size={36} key={4} />,
  ];
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus("");
  
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        if (res.ok) {
          setStatus("✅ Your inquiry has been sent successfully.");
          setFormData({ name: "", companyname:"", email: "", phone: "", message: "" });
        } else {
          setStatus("❌ Something went wrong. Please try again.");
        }
      } catch (err) {
        console.error(err);
        setStatus("⚠️ Error sending message.");
      }
      setLoading(false);
    };
  return (
   <>
   <section
      className="max-w-8xl relative top-20 px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center lg:mt-10 mt-20"
      role="banner"
    >
      {/* Left Side - Hero Image with Orbiting Icons */}
      <div className="relative flex justify-center items-center">
      {/* Center Image */}
      <div ref={imageRef}>
        <Image
          src={heroimage}
          alt="Contact Center Solution"
          className="object-fill bg-pink-900 rounded-full
                     w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]"
          width={400}
          height={400}
          priority
        />
      </div>

      {/* Orbiting Icons */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {icons.map((icon, index, arr) => {
          const angle = (index / arr.length) * 2 * Math.PI;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <div
              key={index}
              className="absolute text-pink-500"
              style={{
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${y}px - 16px)`,
              }}
            >
              {icon}
            </div>
          );
        })}
      </motion.div>
    </div>

      {/* Right Side - Content */}
      <div className="text-center lg:text-left space-y-6">
        {/* Punchy Headline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-pink-900">
        Effortlessly Communicate with Your Clients
        </h2>

        {/* Subheadline / Description */}
        <p className="text-white text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-justify">
          The Leading Cloud Contact Center Software for Enhanced Customer Engagement in the UAE. 
          Tegsoft is the leading Cloud Contact Center Solution in the UAE. We empower businesses to reach 
          their customers from anywhere with a single interface that drives smarter, more valuable conversations.
        </p>

        {/* Main Heading */}
        <h1 className="text-xl sm:text-xl md:text-xl font-bold text-pink-900 leading-snug ">
              Discover Tegsoft Contact Center Solution in Dubai </h1>

        {/* CTA Button */}
        <button className="relative group overflow-hidden rounded-full bg-gradient-to-r from-pink-500 via-pink-900 to-pink-700 px-10 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-400/50">
          <span className="relative z-10"> <Link href="/contact">Book a Demo</Link></span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>
        </button>
      </div>
    </section>
    
{/* Features Section */}
    <ProductCard/>
    {/* About Section */}

<section className="max-w-8xl mx-auto lg:px-8 py-20 lg:ml-25 lg:mr-25 ml-5 mr-5 -mt-20 text-center">
  <div className="lg:flex lg:items-center lg:gap-5">
    {/* Left Side - Text Content */}
    <div className="lg:w-1/2 mb-8 lg:mb-0 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-pink-900">
        About Our Call Center Solution
      </h2>
      <p className="text-white text-lg leading-relaxed text-justify">
        We provide reliable, cloud-based call center solutions for businesses in Dubai. 
        Enhance customer experience, improve efficiency, and scale your support effortlessly.
      </p>
      <p className="text-white text-lg leading-relaxed text-justify">
        Our platform is designed to integrate seamlessly with multiple communication channels, 
        enabling your team to handle inquiries faster and smarter.
      </p>

      {/* Feature List */}
      <ul className="list-disc list-inside text-white space-y-2 text-left">
        <li>24/7 support with intelligent routing</li>
        <li>AI-powered assistance for faster query resolution</li>
        <li>Detailed analytics and reporting for performance tracking</li>
        <li>Scalable cloud infrastructure to match your growth</li>
      </ul>

      {/* Link to About Page */}
      <Link
  href="/about"
  className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-500 via-pink-900 to-pink-700 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
>
  Learn More
</Link>
    </div>

    {/* Right Side - Image */}
    <div className="lg:w-1/2 relative h-64 sm:h-80 lg:h-150">
      <Image
        src={abouthome}
        alt="About Call Center"
        className="object-contain"
        fill
      />
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="max-w-8xl mx-auto px-6 lg:px-8 py-20 lg:mr-25 lg:ml-25 -mt-25 ">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-900 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-xl shadow-md text-center bg-white/20 backdrop-blur-lg border-2 border-pink-200 
                     rounded-xl shadow-lg hover:shadow-xl 
                     transition p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2  text-pink-900">24/7 Support</h3>
            <p>Always available to assist your customers anytime.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white/20 backdrop-blur-lg border-2 border-pink-200 
                     rounded-xl shadow-lg hover:shadow-xl 
                     transition p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-pink-900">Cloud Hosting</h3>
            <p>Reliable, scalable, and secure cloud-hosted call center.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white/20 backdrop-blur-lg border-2 border-pink-200 
                     rounded-xl shadow-lg hover:shadow-xl 
                     transition p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-pink-900">Analytics & Reporting</h3>
            <p>Track KPIs, calls, and agent performance with dashboards.</p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-white/20 backdrop-blur-lg border-2 border-pink-200 
                     rounded-xl shadow-lg hover:shadow-xl 
                     transition p-6 text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-pink-900">AI Assistance</h3>
            <p>Automate responses and enhance call center efficiency.</p>
          </div>
        </div>
      </section>
      <Faq/>

      {/* Contact Section */}
       <section className="relative mb-16 -mt-35">
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-stretch mt-30 p-5">
     
         {/* Left Side Image - hidden on small screens */}
         <div className="relative w-full lg:w-1/2 h-80 sm:h-[400px] md:h-[500px] lg:h-auto hidden lg:block">
           <Image
             src="/images/contact.png"
             alt="Contact Center Solutions"
             fill
             className="object-contain rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
           />
         </div>
     
         {/* Right Side Form */}
         <div className="bg-white dark:bg-gray-900 p-8 shadow-lg border border-pink-100 lg:w-1/2 flex flex-col justify-center rounded-b-xl lg:rounded-r-xl lg:rounded-bl-none">
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



   </>
  );
}