/** @type {import('next').NextConfig} */
const nextConfig = {
    "trailingSlash": false,

    async rewrites() {
        return [
            {
                source: '/_astro/:match*',
                destination: 'http://localhost:4321/_astro/:match*',
            },
            {
                source: '/docs/',
                destination: 'https://proxy-test-astro.hygraph.com/docs/'
            },
          {
            source: '/docs/:match*',
            destination: 'https://proxy-test-astro.hygraph.com/docs/:match*/',
            
          },
        ];
      }
}

module.exports = nextConfig
