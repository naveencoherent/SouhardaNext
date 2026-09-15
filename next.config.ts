import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['192.168.0.14', '192.168.0.13', '192.168.0.9', 'localhost:3000'],
  output: 'export',
  trailingSlash: true,
  
  // Only apply basePath/assetPrefix during production static builds
  ...(isProd && {
    basePath: '/v2',
    assetPrefix: '/v2',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;