/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProduction ? '/MyPortfolio' : '',
  assetPrefix: isProduction ? '/MyPortfolio/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};