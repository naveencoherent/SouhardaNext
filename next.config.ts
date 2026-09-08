import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.13', '192.168.0.9', 'localhost:3000'],
  output: 'export',
  ...(isProd && {
    basePath: '/v2',
    assetPrefix: '/v2',
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;