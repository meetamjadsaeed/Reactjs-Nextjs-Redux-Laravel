/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: "build",
};

// module.exports = () => {
//   const rewrites = () => {
//     return [
//       {
//         source: "/post",
//         destination: "http://127.0.0.1:8000/api/posts",
//       },
//     ];
//   };
//   return {
//     rewrites,
//   };
// };

module.exports = nextConfig;
