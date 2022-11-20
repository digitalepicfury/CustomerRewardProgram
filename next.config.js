/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
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
