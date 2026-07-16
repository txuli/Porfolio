import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
   images: {
    remotePatterns: [new URL('https://opengraph.githubassets.com/0/txuli/**')],
  }
};

export default nextConfig;
