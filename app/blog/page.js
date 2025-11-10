export const metadata = {
  title: "Why Tegsoft is the Best Contact Center Solution in UAE",
  description:
    "Discover how Tegsoft leads the UAE contact center market with AI-driven, cloud-based omnichannel solutions that enhance customer satisfaction.",
  keywords: [
    "Tegsoft UAE",
    "Contact Center Solution UAE",
    "Call Center Software Dubai",
    "AI Contact Center Solution",
  ],
  alternates: {
    canonical: "https://yourdomain.com/blog/why-tegsoft-best-contact-center-uae",
  },
  openGraph: {
    title: "Why Tegsoft is the Best Contact Center Solution in UAE",
    description:
      "Tegsoft delivers AI-powered contact center solutions for seamless customer communication across the UAE.",
    url: "https://yourdomain.com/blog/why-tegsoft-best-contact-center-uae",
    siteName: "TechBee IT & Designs LLC",
    images: [
      {
        url: "https://yourdomain.com/images/blog/tegsoft-uae.jpg",
        width: 1200,
        height: 630,
        alt: "Tegsoft Contact Center UAE",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Tegsoft is the Best Contact Center Solution in UAE",
    description:
      "Learn why Tegsoft stands out as the best contact center solution in the UAE.",
    images: ["https://yourdomain.com/images/blog/tegsoft-uae.jpg"],
  },
};


import { client } from "../../lib/sanity";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "../../components/seo/JsonLd";
// 1️⃣ Define the function here, before using it
const getBlogSchema = (post) => {
  const textPreview = post.body
    ?.find((block) => block._type === "block")
    ?.children.map((c) => c.text)
    .join(" ");

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: textPreview || "",
    image: post.mainImage?.asset?.url || "",
    author: {
      "@type": "Organization",
      name: "TechBee IT & Designs LLC",
    },
    publisher: {
      "@type": "Organization",
      name: "TechBee IT & Designs LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://techbee.ae/images/logo.png",
      },
    },
    datePublished: post._createdAt || "2025-10-30",
    dateModified: post._updatedAt || post._createdAt || "2025-10-30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://techbee.ae/blog/${post.slug.current}`,
    },
  };
};



export default async function BlogPage() {
  const posts = await client.fetch(`*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage{
    asset->{
      _id,
      url
    },
    alt
  },
  body
}`);
 const getPreview = (body) => {
    if (!body || !Array.isArray(body)) return "";
    const textBlock = body.find((block) => block._type === "block");
    if (!textBlock?.children) return "";
    const text = textBlock.children.map((c) => c.text).join(" ");
    return text.slice(0, 150) + (text.length > 150 ? "..." : "");
  };


  return (
    <div className="ml-5 mr-5 md:mr-5 md:ml-5 sm:ml-0 max-w-6xl lg:mx-auto py-10 mt-15 lg:mt-30">
      <h1 className="text-4xl text-pink-800 font-bold mb-8">Blogs</h1>
      {posts.map((post) => (
        <div key={post._id} className="mb-10 border-b pb-6">
          <h2 className="text-2xl text-pink-800 font-semibold mb-2">{post.title}</h2>
          {post.mainImage?.asset?.url && (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              width={400}
              height={500}
              className="rounded-lg mb-4 object-cover"
            />
          )}
                <p className="mb-2 text-gray-700">{getPreview(post.body)}</p>         
          <Link
            href={`/blog/${post.slug.current}`}
            className="text-pink-600 hover:underline"
          >
            Read More →
          </Link>
          <JsonLd data={getBlogSchema(post)} />
        </div>
      ))}
    </div>
  );
}
