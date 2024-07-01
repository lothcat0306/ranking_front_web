/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_API_URL: "desk-items-api.internal"
  },
  async rewrites() {
    return [
      {
        source: '/example',
        destination: 'https://example.com',
      },
    ]
  }
}
