import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
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