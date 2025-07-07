import type { NextConfig } from "next";

const nextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
} as NextConfig;

export default nextConfig;
