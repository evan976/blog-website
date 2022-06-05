/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.evanone.site'],
  },
  // fix warning: prop classname did not match
  compiler: {
    styledComponents: true
  },
  env: {
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
