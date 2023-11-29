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
  webpack: (config, { webpack, buildId }) => {
    if (process.env.NODE_ENV === 'production') {
      addClassnameObfuscation(config);
    }

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.CONFIG_BUILD_ID': JSON.stringify(buildId),
      }),
    );

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
