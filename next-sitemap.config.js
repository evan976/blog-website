const axios = require('axios')
const dateFormat = require('date-fns/format')

const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL
const apiUrl = process.env.NEXT_PUBLIC_API_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/about', '/404'],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? dateFormat(new Date(), 'yyyy/MM/dd') : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
  additionalPaths: (config) => {
    axios
      .all([
        axios.get(`${apiUrl}/categories`),
        axios.get(`${apiUrl}/articles`, { params: { page_size: 200 } }),
        axios.get(`${apiUrl}/tags`),
      ])
      .then(
        axios.spread((category, article, tag) => {
          let indexRoutes = [
            {
              loc: '/',
              changefreq: 'daily',
              priority: 1,
              lastmod: dateFormat(new Date(), 'yyyy/MM/dd'),
            },
          ]

          let categoryRoutes = category.data.result.data.map((data) => {
            return {
              loc: `/category/${data.slug}`,
              changefreq: 'monthly',
              priority: 0.8,
              lastmod: dateFormat(data.created_at, 'yyyy/MM/dd'),
            }
          })

          let articleRoutes = article.data.result.data.map((data) => {
            return {
              loc: `/article/${data.article_id}`,
              changefreq: 'daily',
              priority: 0.9,
              lastmod: dateFormat(data.created_at, 'yyyy/MM/dd'),
            }
          })

          let tagsRoutes = tag.data.result.map((data) => {
            return {
              loc: `/tag/${data.slug}`,
              changefreq: 'weekly',
              priority: 0.7,
              lastmod: dateFormat(data.created_at, 'yyyy/MM/dd'),
            }
          })

          return indexRoutes.concat(categoryRoutes, articleRoutes, tagsRoutes)
        }),
        (error) => {
          throw error
        },
      )
  },
}
