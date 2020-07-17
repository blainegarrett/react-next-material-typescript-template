// Next Config
// Note: If you use custom environment variables here, please include in .env

module.exports = {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    greeting_emoji: process.env.NEXT_PUBLIC_THEME_GREETING_EMOJI,
  },
};
