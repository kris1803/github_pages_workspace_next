/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      loader: 'custom',
      unoptimized: true,
    }
  },
  images : {
    unoptimized: true,
  }
}

module.exports = nextConfig
