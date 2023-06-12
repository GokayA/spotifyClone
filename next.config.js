const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['t.scdn.co', 'api.spotify.com', 'i.scdn.co'],
  },
};

module.exports = nextConfig;
