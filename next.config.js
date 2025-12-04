/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For GitHub Pages, set basePath if deploying to a subdirectory
  // basePath: '/website',
  // assetPrefix: '/website',
}

module.exports = nextConfig

