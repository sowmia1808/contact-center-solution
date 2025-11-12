export async function GET() {
  const BASE_URL = 'https://contact-center-solution.vercel.app';

  const pages = [
    '/', '/about', '/contact', '/pricing', '/blog', '/solutions', '/whytegsoft',
    '/whytegsoft/features', '/whytegsoft/voice-quality', '/whytegsoft/deployment-options',
    '/whytegsoft/benefits', '/whytegsoft/use-cases',
    '/solutions/healthcare', '/solutions/insurance', '/solutions/real-estate',
    '/solutions/travel-tourism', '/solutions/municipality', '/solutions/education',
    '/solutions/energy', '/solutions/finance',
    '/blog/call-center-solutions-customer-satisfaction',
    '/blog/5-ways-call-center-solutions-improve-customer-satisfaction',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `<url>
  <loc>${BASE_URL}${page}</loc>
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
}
