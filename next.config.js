const path = require('path')
const withPWA = require('next-pwa')
const { TRIPARTITE_LINK } = require('./config/app.config')

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_WEB_ACCESS_TOKEN

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['static.evanone.site', 'tvax2.sinaimg.cn'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  async rewrites() {
    return [
      {
        source: '/weibo',
        destination: `${TRIPARTITE_LINK.weibo}?access_token=${ACCESS_TOKEN}`,
      },
    ]
  },
}

module.exports = withPWA({
  dest: 'public',
  ...nextConfig,
})
