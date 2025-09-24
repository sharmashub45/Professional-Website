/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? '/Professional-Website' : '',
  assetPrefix: isProd ? '/Professional-Website/' : '',
  distDir: 'out',
}

module.exports = nextConfig
