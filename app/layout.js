import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialNavbar from "../components/SocialVerticalNavbar";
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tegsoft UAE | Cloud Contact Center Solutions in Dubai",
  description:
    "Leading cloud-based contact center solutions for UAE businesses. Enhance customer engagement and productivity with Tegsoft UAE.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
},
openGraph: {
    title: "Tegsoft UAE | Cloud Contact Center Solutions in Dubai",
    description:
      "Cloud and on-premise contact center software in Dubai. Boost customer satisfaction with advanced call center solutions.",
    url: "https://contact-center-solution.vercel.app/",
    siteName: "Tegsoft UAE",
    images: [
      {
        url: "https://contact-center-solution.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft UAE Contact Center",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar /> 
        {children}
        <Analytics />
        <SocialNavbar/>
        <Footer/>
      </body>
    </html>
  );
}
