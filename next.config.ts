import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'standalone', // <-- Added for self-contained cPanel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false, // Hides the "Rendering..." indicator pill in dev mode
  allowedDevOrigins: ['192.168.0.14', '192.168.0.13', '192.168.0.9', 'localhost:3000'],
  
  // Disabled static HTML export to allow server-side API routes (/api/gallery, /api/chat) to function:
  // output: 'export',
  // trailingSlash: true,
  
  // Commented out basePath so the app runs directly at root or reverse-proxied port:
  // ...(isProd && {
  //   basePath: '/v2',
  //   assetPrefix: '/v2',
  // }),
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;