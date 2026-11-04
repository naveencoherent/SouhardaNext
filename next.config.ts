import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Disable source maps in production to shrink bundle sizes drastically
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;