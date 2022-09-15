const axios = require('axios')
const dateFormat = require('date-fns/format')

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
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
  additionalPaths: async (config) => {
    const articles = await axios.get(`${apiUrl}/articles`, { params: { page_size: 200 } })
    const categories = await axios.get(`${apiUrl}/categories`)
    const tags = await axios.get(`${apiUrl}/tags`)

    const articleRoutes = articles.data.result.data.map((data) => ({
      loc: `/article/${data.article_id}`,
      changefreq: 'daily',
      priority: 0.9,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))
    const categoryRoutes = categories.data.result.data.map((data) => ({
      loc: `/category/${data.slug}`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))
    const tagRoutes = tags.data.result.map((data) => ({
      loc: `/tag/${data.slug}`,
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: dateFormat(data.created_at * 1000, 'yyyy-MM-dd'),
    }))

    return [...articleRoutes, ...categoryRoutes, ...tagRoutes]
  },
}
