import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve("buffer/"), //buffer pour plotly.js
    };

    return config;
  },
};

export default nextConfig;
