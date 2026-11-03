import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Keeps heavy native node modules out of serverless bundle limits
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