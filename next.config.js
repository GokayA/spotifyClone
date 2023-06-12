const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 't.scdn.co' }] },
};

module.exports = nextConfig;
