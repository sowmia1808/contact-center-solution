// app/sitemap.xml/route.js
import { createClient } from '@sanity/client';

const BASE_URL = 'https://contact-center-solution.vercel.app';

// Initialize Sanity client (use only public dataset and read-only token if needed)
const client = createClient({
  projectId: 'a6zet4z9',
  dataset: 'production',
  useCdn: true, // `true` for public, cached data
});

export async function GET() {
  try {
    // Fetch blog pages or any dynamic pages from Sanity
    const blogs = await client.fetch(`*[_type == "blog"]{ "slug": slug.current }`);

    // Static pages
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/pricing',
      '/solutions',
      '/whytegsoft',
      '/whytegsoft/features',
      '/whytegsoft/voice-quality',
      '/whytegsoft/deployment-options',
      '/whytegsoft/benefits',
      '/whytegsoft/use-cases',
      '/solutions/healthcare',
      '/solutions/insurance',
      '/solutions/real-estate',
      '/solutions/travel-tourism',
      '/solutions/municipality',
      '/solutions/education',
      '/solutions/energy',
      '/solutions/finance',
    ];

    // Combine static + dynamic URLs
    const allUrls = [
      ...staticPages,
      ...blogs.map(blog => `/blog/${blog.slug}`)
    ];

    // Build XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `<url>
  <loc>${BASE_URL}${url}</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap generation failed', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
}
