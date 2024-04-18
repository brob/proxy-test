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
            source: '/docs/:match*',
            destination: 'https://starlight-proxy-test.vercel.app/docs/:match*/',
            
          },
        ];
      }
}

module.exports = nextConfig
