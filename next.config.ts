import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Only apply PWA in production to avoid Turbopack conflicts
if (process.env.NODE_ENV === 'production') {
  const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true
  });
  module.exports = withPWA(nextConfig);
} else {
  module.exports = nextConfig;
}
