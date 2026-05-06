import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "danieldennis.com" },
      { protocol: "https", hostname: "www.danieldennis.com" },
    ],
  },
};

export default nextConfig;
