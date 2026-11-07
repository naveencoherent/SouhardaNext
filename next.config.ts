import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // DO NOT use output: 'export' or output: 'standalone' here.
  // Netlify's Next.js runtime automatically handles deployment output.
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;