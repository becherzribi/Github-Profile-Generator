/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone", // This is important for Docker
  images: {
    domains: ["github.com"],
  },
}

module.exports = nextConfig

