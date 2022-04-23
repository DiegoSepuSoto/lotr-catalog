/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/character-catalog',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  images: {
    domains: ['static.wikia.nocookie.net'],
  },
}

module.exports = nextConfig
