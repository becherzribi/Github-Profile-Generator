/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static export of your app
  reactStrictMode: true,
  basePath: '/Github-Profile-Generator',
  images: {
    unoptimized: true,  // Disables image optimization, necessary for static export
  },
  trailingSlash: true, // Ensure trailing slashes are added to URLs, important for static hosting
};

module.exports = nextConfig;
