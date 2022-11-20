/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   async redirects() {
//     return [
//       {
//         source: '/product',
//         destination: '/',
//         permanent: true,
//       },
//     ]
//   },
// }

// module.exports = nextConfig
