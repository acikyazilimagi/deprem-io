const withNextTranslate = require('next-translate')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// PWA Config
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withNextTranslate(withPWA(nextConfig))
