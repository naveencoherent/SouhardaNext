import type { NextConfig } from 'next';

const nextconfig: NextConfig = {
  output: 'standalone',
  typescript: {
    // Netlify runs its own type-checking step. Setting this prevents duplicate type checks during turbopack build
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    unoptimized: true, // Optional: useful if running without Netlify Image CDN transformations
  },
};

export default nextconfig;