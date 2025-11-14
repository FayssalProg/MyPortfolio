/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: isProd ? "/MyPortfolio" : "",
  assetPrefix: isProd ? "/MyPortfolio/" : "",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
