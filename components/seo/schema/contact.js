// components/SEO/schemas/contact.js
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "Organization",
    "name": "Tegsoft UAE",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-1234567",
      "contactType": "sales",
      "areaServed": "AE",
      "availableLanguage": "English, Arabic"
    }
  }
};

export default contactSchema;
