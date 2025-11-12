// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Needed for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of your site
const BASE_URL = 'https://contact-center-solution.vercel.app';

// Static pages
const staticPages = [
  '/',
  '/about',
  '/contact',
  '/pricing',
  '/blog',
  '/solutions',
  '/whytegsoft',
];

// Dynamic pages (manually list for now)
const dynamicPages = [
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
  '/blog/call-center-solutions-customer-satisfaction',
  '/blog/5-ways-call-center-solutions-improve-customer-satisfaction',
];

// Merge all pages
const allPages = [...staticPages, ...dynamicPages];

// Build sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

// Build robots.txt
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

// Write files to public folder
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

console.log('✅ sitemap.xml and robots.txt generated in /public');
