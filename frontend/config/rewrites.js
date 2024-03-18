const rewriteStorage = process.env.STORAGE
  ? [
      {
        source: new URL(process.env.STORAGE).pathname,
        destination: process.env.STORAGE,
      },
    ]
  : [];

module.exports = [
  {
    source: '/api/mock/page/:path*',
    destination: '/api/mock/page/:path*',
  },
  process.env.API_URL
    ? {
        source: '/api/:path*',
        destination: `${process.env.API_URL}:path*`,
      }
    : {
        source: '/api/:path*',
        destination: '/api/mock/:path*',
      },
  ...rewriteStorage,
];
