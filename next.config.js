/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/raks4_portfolio',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
