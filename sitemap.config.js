const axios = require('axios')
const dateFormat = require('date-fns/format')

const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL
const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: BASE_URL,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? dateFormat(new Date(), 'yyyy-MM-dd') : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: async () => {
    const articles = await axios.get(`${BASE_API_URL}/articles`, { params: { page_size: 200 } })
    const categories = await axios.get(`${BASE_API_URL}/categories`)
    const tags = await axios.get(`${BASE_API_URL}/tags`)

    const articleRoutes = articles.data.result.data.map(data => ({
      loc: `/article/${data.article_id}`,
      changefreq: 'daily',
      priority: 0.9,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))
    const categoryRoutes = categories.data.result.data.map(data => ({
      loc: `/category/${data.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))
    const tagRoutes = tags.data.result.map(data => ({
      loc: `/tag/${data.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))

    return [...articleRoutes, ...categoryRoutes, ...tagRoutes]
  },
}
