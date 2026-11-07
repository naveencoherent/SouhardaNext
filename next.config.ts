import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
  // Exclude non-essential server packages from being traced into the bundle
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-win32-x64-msvc',
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/esbuild',
        'node_modules/webpack',
        'node_modules/terser',
      ],
    },
  },
};

export default nextConfig;