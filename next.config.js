/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/docs/:match*',
            destination: 'https://studio-docs.hygraph.com/:match*',
          },
        ];
      }
}

module.exports = nextConfig
