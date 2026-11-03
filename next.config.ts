import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [
    "@sparticuz/chromium",
    "puppeteer-core",
    "sharp",
    "@prisma/client",
    "prisma",
    "pdfkit",
    "canvas",
  ],
};

export default nextConfig;