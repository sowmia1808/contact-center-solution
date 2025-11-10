"use client";
import Link from "next/link";
import { HiMenu, HiX, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile main menu
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null); // mobile submenu
  const navRef = useRef(null); // container ref

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Why Tegsoft",
      path: "/whytegsoft",
      dropdown: [
        { name: "Features", path: "/whytegsoft/features" },
        { name: "Voice Quality", path: "/whytegsoft/voice-quality" },
        { name: "Deployment Options", path: "/whytegsoft/deployment-options" },
        { name: "Benefits", path: "/whytegsoft/benefits" },
        { name: "Use Cases", path: "/whytegsoft/use-cases" },
      ],
    },
    { name: "About", path: "/about" },
{
    name: "Solutions",
    path: "/solutions",
    dropdown: [
      { name: "Healthcare", path: "/solutions/healthcare" },
      { name: "Insurance", path: "/solutions/insurance" },
      { name: "Real Estate", path: "/solutions/real-estate" },
      { name: "Travel and Tourism", path: "/solutions/travel-tourism" },
      { name: "Municipality", path: "/solutions/municipality" },
      { name: "Education", path: "/solutions/education" },
      { name: "Energy", path: "/solutions/energy" },
      { name: "Finance", path: "/solutions/finance" },
    ],
  },    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Close dropdowns if click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsOpen(false);
        setMobileOpenIndex(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <div className="hidden md:flex justify-end items-center bg-pink-900 text-white text-sm md:text-base py-3  px-6 lg:px-15 z-[60] fixed top-0 left-0 right-0 lg:rounded-l-full lg:rounded-r-full ">
  <a
    href="tel:+971564116174"
    className="flex items-center hover:text-pink-300 mr-6 transition "
  >
    <HiOutlinePhone className="w-4 h-4 md:w-5 md:h-5 mr-1" /> +971 564116174
  </a>
  <a
    href="mailto:sales@techbee.ae"
    className="flex items-center hover:text-pink-300 transition"
  >
    <HiOutlineMail className="w-4 h-4 md:w-5 md:h-5 mr-1" /> info@techbee.ae
  </a>
</div>
    <nav ref={navRef} className=" bg-pink-900 fixed top-[16px] z-50 max-w-8xl mx-auto px-6 left-0 right-0 lg:rounded-l-full lg:rounded-r-full">
      <div className=" max-w-8xl lg:px-8 flex justify-between items-center h-20 text-white mb-5 sm:mt-5 ">
        {/* Logo */}
       <div className="flex items-center">
    <Link href="/" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="Techbee Logo"
        width={250}
        height={40}
        className="object-contain"
      />
    </Link>
  </div>



         {/* Desktop Menu (Right End) */}
  <div className="hidden md:flex items-center space-x-8 text-white">
    <div className="flex space-x-6 items-center">
      {navLinks.map((link, idx) => (
        <div key={link.name} className="relative">
          {link.dropdown ? (
            <div className="relative">
              <div className="flex items-center space-x-1">
                <Link
                  href={link.path}
                  className="text-white hover:text-pink-600 font-medium"
                >
                  {link.name}
                </Link>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === idx ? null : idx);
                  }}
                  className="text-sm text-white hover:text-pink-600"
                >
                  {openDropdown === idx ? "▲" : "▼"}
                </button>
              </div>

              {openDropdown === idx && (
                <div className="absolute left-0 mt-2 w-40 py-2 z-50 bg-pink-800 rounded-3xl">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      className="block px-4 py-2 text-white hover:bg-pink-500 transition"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              href={link.path}
              className="text-white hover:text-pink-600 font-medium"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>

        {/* Mobile Menu Button */}
         <div className="md:hidden flex items-center ml-4">
    <button onClick={() => setIsOpen((s) => !s)} aria-label="Toggle menu">
      {isOpen ? (
        <HiX className="w-6 h-6 text-pink-600" />
      ) : (
        <HiMenu className="w-6 h-6 text-pink-600" />
      )}
    </button>
  </div>
</div>
      

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white hover:text-pink-600 dark:hover:text-pink-400 font-medium"
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <button
                    onClick={() =>
                      setMobileOpenIndex(mobileOpenIndex === idx ? null : idx)
                    }
                    className="text-white dark:text-gray-300 px-2"
                    aria-label="Toggle submenu"
                  >
                    {mobileOpenIndex === idx ? "▲" : "▼"}
                  </button>
                )}
              </div>

              {link.dropdown && mobileOpenIndex === idx && (
                <div className="ml-4 flex flex-col">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Contact Info */}
          <div className="pt-4 border-t border-gray-200 flex flex-col space-y-2">
            <a
              href="tel:+971564116174"
              className="flex items-center text-white hover:text-pink-600 dark:hover:text-pink-400"
            >
              <HiOutlinePhone className="w-5 h-5 mr-2" /> +971 564116174
            </a>
            <a
              href="mailto:sales@techbee.ae"
              className="flex items-center text-white  hover:text-pink-600 "
            >
              <HiOutlineMail className="w-5 h-5 mr-2" /> sales@techbee.ae
            </a>
          </div>
        </div>
      )}
    </nav>

    </>
  );
}
