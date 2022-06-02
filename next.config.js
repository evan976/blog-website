/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.evanone.site'],
  },
  // fix warning: prop classname did not match
  compiler: {
    styledComponents: true
  }
}

module.exports = nextConfig
