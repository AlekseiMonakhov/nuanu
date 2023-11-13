const rewriteStorage = process.env.NEXT_PUBLIC_STORAGE
  ? [
      {
        source: new URL(process.env.NEXT_PUBLIC_STORAGE).pathname,
        destination: process.env.NEXT_PUBLIC_STORAGE,
      },
    ]
  : [];

module.exports = [
  {
    source: '/api/mock/page/:path*',
    destination: '/api/mock/page/:path*',
  },
  process.env.NEXT_PUBLIC_API
    ? {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API}:path*`,
      }
    : {
        source: '/api/:path*',
        destination: '/api/mock/:path*',
      },
  ...rewriteStorage,
];
