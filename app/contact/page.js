// app/contact/page.js
import ContactSection from "./ContactSection";

export const metadata = {
  title: "Contact Us - Call Center Solutions Dubai",
  description: "Get in touch with our team for inquiries about Call Center Solutions, pricing, and services. We're here to help your business optimize customer experience.",
  keywords: "Call Center Solutions Dubai, Contact, Customer Support, Call Center Services, Inquiry",
  authors: [{ name: "Techbee Solutions" }],
  creator: "Techbee Solutions",
  publisher: "Techbee Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us - Call Center Solutions Dubai",
    description: "Reach out to our expert team for inquiries about call center solutions and customer support services in Dubai.",
    url: "https://callcentersolutiondubai.com/contact",
    siteName: "Call Center Solutions Dubai",
    images: [
      {
        url: "https://callcentersolutiondubai.com/images/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact Call Center Solutions Dubai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Call Center Solutions Dubai",
    description: "Reach out to our expert team for inquiries about call center solutions and customer support services in Dubai.",
    images: ["https://callcentersolutiondubai.com/images/contact-og.png"],
    creator: "@TechbeeSolutions",
  },
};


// For static generation
export async function generateStaticParams() {
  return [];
}

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
