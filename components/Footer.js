import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-pink-500 to-purple-600 opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tegsoft</h3>
            <p className="text-gray-300">
              Leading cloud-based contact center solutions for UAE businesses. Enhance customer engagement and agent productivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-pink-500 transition">Home</Link></li>
              <li><Link href="/pricing" className="hover:text-pink-500 transition">Pricing</Link></li>
              <li><Link href="/whytegsoft" className="hover:text-pink-500 transition">Features</Link></li>
              <li><Link href="/solutions" className="hover:text-pink-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">R12-France Cluster,Dubai, UAE</p>
            <p className="text-gray-300">Email: info@techbee.ae</p>
            <p className="text-gray-300">Phone: +971564116174</p>
            <p className="text-gray-300">working Hours: Mon-Sat:8.30AM-6.00PM</p>

          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-pink-500 transition"><FaFacebookF /></Link>
              <Link href="#" className="hover:text-pink-500 transition"><FaTwitter /></Link>
              <Link href="#" className="hover:text-pink-500 transition"><FaLinkedinIn /></Link>
              <Link href="#" className="hover:text-pink-500 transition"><FaYoutube /></Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Techbee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
