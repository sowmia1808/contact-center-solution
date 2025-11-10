import EducationPage from "./EducationPage";
import JsonLd from '../../../components/seo/JsonLd';

export const metadata = {
  title: "Education Solutions with Tegsoft | UAE Schools & Universities",
  description:
    "Tegsoft enhances communication, administration, and engagement for educational institutions across UAE, connecting students, parents, and staff through a unified platform.",
  keywords: [
    "Tegsoft Education UAE",
    "School Communication UAE",
    "University Admin Solution",
    "Student Engagement Software",
  ],
  alternates: {
    canonical: "https://yourdomain.com/education",
  },
  openGraph: {
    title: "Education Solutions with Tegsoft | UAE Schools & Universities",
    description:
      "Tegsoft provides AI-driven solutions for seamless student, parent, and staff communication in educational institutions across UAE.",
    url: "https://yourdomain.com/education",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/education.png",
        width: 1200,
        height: 630,
        alt: "Education Solutions with Tegsoft",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Solutions with Tegsoft | UAE Schools & Universities",
    description:
      "Tegsoft improves student engagement and administrative efficiency in UAE educational institutions.",
    images: ["https://yourdomain.com/images/education.png"],
  },
};

const educationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "TechBee IT & Designs LLC",
  url: "https://yourdomain.com/education",
  logo: "https://yourdomain.com/images/logo.png",
  description:
    "Tegsoft provides AI-powered solutions for communication, administration, and engagement in schools and universities across UAE.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressRegion: "UAE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-xxxx-xxxx",
    contactType: "customer support",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={educationSchema} />
      <EducationPage />
    </>
  );
}