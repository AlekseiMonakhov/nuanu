// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const addClassnameObfuscation = require('./config/addClassNameObfuscation');
const headers = require('./config/headers');
const rewrites = require('./config/rewrites');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    strictNextHead: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    minimumCacheTTL: 3600 * 24 * 365,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      {
        hostname: 'nuanu-backend.sborkademo.com',
        pathname: '/media/**',
      },
      {
        hostname: 'new-data.nuanu.com',
        pathname: '/media/**',
      },
    ],
    deviceSizes: [480, 560, 640, 750, 1024, 1440, 1920, 2560],
    imageSizes: [480, 560, 640, 750, 1024, 1440, 1920, 2560],
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
  rewrites: () => rewrites,
  webpack: (config, { isServer }) => {
    if (process.env.NODE_ENV === 'production') {
      addClassnameObfuscation(config);
    }
  
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|ogv)$/,
      type: 'asset/resource', 
      generator: {
        filename: 'static/media/[name].[hash][ext]', 
      },
    });
  
    return config;
  },
  // Отключаем ESLint во время сборки
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = withBundleAnalyzer(nextConfig);
