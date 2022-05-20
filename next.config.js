/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "default",
    domain: ["localhost", "portfolio-gatsby-api.herokuapp.com"]
  }
}

module.exports = nextConfig
