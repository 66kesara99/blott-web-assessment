import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static2.finnhub.io",
      },
      {
        protocol: "https",
        hostname: "image.cnbcfm.com",
      },
      {
        protocol: "https",
        hostname: "data.bloomberglp.com",
      },
      {
        protocol: "https",
        hostname: "sc.cnbcfm.com",
      },
    ],
  },
};

export default nextConfig;
