import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Do NOT set output: 'standalone' here when deploying on Netlify plugin
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;