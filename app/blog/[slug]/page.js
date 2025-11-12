import { client } from "../../../lib/sanity";
import Image from "next/image";
import JsonLd from "../../../components/seo/JsonLd"
export const dynamic = "force-dynamic";


export default async function BlogPost({ params }) {
  const { slug } = params;

  const post = await client.fetch(
  `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage{
      asset->{
        _id,
        url
      },
      alt
    },
    body
  }`,
  { slug }
);


  if (!post) {
    return <p className="text-center py-10">Post not found</p>;
  }
// Prepare metadata
  const metaTitle = post.title;
  const metaDescription = post.body
    .map((block) => block.children?.map((child) => child.text).join(" "))
    .join(" ")
    .slice(0, 150) + "...";
  
  // Blog JSON-LD schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metaTitle,
    description: metaDescription,
    image: post.mainImage?.asset?.url || "https://yourdomain.com/default-image.jpg",
    author: { "@type": "Person", name: "TechBee Team" },
    publisher: {
      "@type": "Organization",
      name: "TechBee IT & Designs LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/images/logo.png",
      },
    },
    datePublished: "2025-10-30",
    dateModified: "2025-10-30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${slug}`,
    },
  };
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-30 lg:mt-30">

      {/* Inject JSON-LD */}
      <JsonLd data={blogSchema} />
      <h1 className="text-xl md:text-3xl lg:text-3xl text-pink-800 font-bold mb-6">{post.title}</h1>
     {post.mainImage?.asset?.url && (
  <Image
    src={post.mainImage.asset.url}
    alt={post.mainImage.alt || post.title}
    width={800}
    height={400}
    className="object-cover rounded-lg"
  />
)}


     <div className="prose dark:prose-invert text-justify">
  {post.body.map((block) => (
    <p key={block._key} className="mb-4">
      {block.children?.map((child) => child.text).join(" ") || ""}
    </p>
  ))}
</div>

    </div>
  );
}

export const revalidate = 60;