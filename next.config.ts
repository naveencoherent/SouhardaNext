import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["192.168.0.10:3000", "192.168.0.10", "localhost:3000"],
  output: "export",
  ...(isProd && {
    basePath: "/v2",
    assetPrefix: "/v2",
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;