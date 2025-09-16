/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  webpack(config, options) {
    return config;
  },
};

export default nextConfig;
