/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      loader: 'custom',
      layoutRaw : true,
      unoptimized: true,
    }
  },
  images : {
    loader: 'custom',
    unoptimized: true,
  }
}

module.exports = nextConfig
