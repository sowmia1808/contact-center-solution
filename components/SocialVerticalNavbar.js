"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function SocialNavbar() {
  const socialLinks = [
    { icon: <FaYoutube size={30}/>, url: "https://youtube.com" },
    { icon: <FaTwitter size={30} />, url: "https://twitter.com" },
    { icon: <FaInstagram size={30}/>, url: "https://instagram.com" },
    { icon: <FaFacebookF size={30} />, url: "https://facebook.com" },
    { icon: <FaWhatsapp size={30}/>, url: "https://wa.me/1234567890" },
  ];

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="hidden md:flex fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <ul className="flex flex-col space-y-4 p-2 rounded-r-lg ">
          {socialLinks.map((link, idx) => (
            <motion.li
              key={idx}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-black hover:text-black hover:bg-white transition-all duration-300 shadow-md"
              >
                {link.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Mobile Horizontal Navbar */}
      <div className="flex md:hidden fixed bottom-0 left-0 w-full justify-around  p-2 shadow-lg z-50">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-18 h-18 rounded-full text-black hover:text-black hover:bg-white transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </>
  );
}
