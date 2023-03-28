/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['www.datocms-assets.com'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
