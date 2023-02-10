const withNextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withNextTranslate(nextConfig);
