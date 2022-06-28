/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return []
  },
  experimental: { images: { layoutRaw: true } },
}

module.exports = nextConfig
