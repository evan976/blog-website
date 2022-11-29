const path = require('path')

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_WEB_ACCESS_TOKEN

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
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
        destination: `https://api.weibo.com/2/statuses/user_timeline.json?access_token=${ACCESS_TOKEN}`,
      },
    ]
  },
}

module.exports = nextConfig
