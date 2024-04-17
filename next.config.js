/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/docs/:match*',
            destination: 'http://localhost:4321/:match*',
          },
        ];
      }
}

module.exports = nextConfig
