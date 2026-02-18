// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Next.js 16/15 mein ye zaroori hai agar aap local network IP use kar rahe ho
    serverActions: {
      allowedOrigins: ["192.168.147.1", "localhost:3000"],
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
};

export default nextConfig;