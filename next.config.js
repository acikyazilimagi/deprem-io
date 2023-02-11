const withNextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['types.ts', 'validation.schema.ts'],
}

module.exports = withNextTranslate(nextConfig)
