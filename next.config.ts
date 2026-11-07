import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  // Top-level property in Next.js 16 for pruning serverless function tracing
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-win32-x64-msvc',
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core',
      'node_modules/esbuild',
      'node_modules/webpack',
      'node_modules/typescript',
    ],
  },
};

export default nextConfig;