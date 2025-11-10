/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },
};

export default nextConfig; 
