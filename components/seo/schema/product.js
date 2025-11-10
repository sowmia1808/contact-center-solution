// components/SEO/schemas/product.js
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tegsoft Contact Center Solution",
  "image": "https://yourdomain.com/images/tegsoft-contact-center.png",
  "description": "Cloud-based contact center solution in UAE for inbound, outbound, blended, and omnichannel communications.",
  "brand": {
    "@type": "Brand",
    "name": "Tegsoft"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://yourdomain.com/why-tegsoft",
    "priceCurrency": "AED",
    "availability": "https://schema.org/InStock"
  }
};

export default productSchema;
