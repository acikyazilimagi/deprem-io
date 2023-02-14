const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withNextTranslate = require('next-translate');
const i18nConfigs = require('./i18n');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: i18nConfigs.locales,
    defaultLocale: i18nConfigs.defaultLocale,
    localeDetection: false,
  },
};

module.exports = withBundleAnalyzer(withNextTranslate(nextConfig));
