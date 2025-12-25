/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker (optional - comment out for Vercel)
  // output: 'standalone',
  // Allow Docker to access the server
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;
