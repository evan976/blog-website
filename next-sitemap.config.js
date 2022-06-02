/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: process.env.SITE_URL || 'https://evanone.site/',
  generateRobotsTxt: true
}

module.exports = config