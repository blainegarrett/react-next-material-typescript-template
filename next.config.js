/* eslint-disable @typescript-eslint/no-var-requires */
// Next Config
// Note: If you use custom environment variables here, please include in .env
const withOffline = require('next-offline');

const nextConfig = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    greeting_emoji: process.env.NEXT_PUBLIC_THEME_GREETING_EMOJI,
  },
  async rewrites() {
    return [
      { source: '/favicon.ico', destination: '/static/favicon.ico' },
      { source: '/robots.txt', destination: '/static/robots.txt' },
      { source: '/service-worker.js', destination: '/_next/static/service-worker.js' },
    ];
  },
  workboxOpts: {
    swDest: './static/service-worker.js',
  },
};

// Comment out this conditional if you need to debug service worker during dev
// Note: You will also need to unregister the worker to not see the logs
if (process.env.NODE_ENV === 'production') {
  module.exports = withOffline(nextConfig);
} else {
  module.exports = nextConfig;
}
