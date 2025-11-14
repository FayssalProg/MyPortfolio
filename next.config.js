/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  // when deployed to https://fayssalprog.github.io/MyPortfolio
  basePath: '/MyPortfolio',
  assetPrefix: '/MyPortfolio/',
  trailingSlash: true, // recommended for GitHub Pages to produce directory/index.html structure
  images: {
    unoptimized: true // avoid next/image optimizations that break static export
  }
};