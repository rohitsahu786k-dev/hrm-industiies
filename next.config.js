/** @type {import('next').NextScript} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hrmindustries.in',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'hrmindustries.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      }
    ],
  },
};

module.exports = nextConfig;
