import { META } from 'config/app.config'
import dateFormat from 'date-fns/format'
import * as React from 'react'
import type { Article } from 'types'

const ArticleMeta: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <>
      <meta itemProp="url" content={`${META.url}/article/${article.article_id}`} />
      <meta itemProp="headline" content={article.title} />
      <meta itemProp="keywords" content={article.tags?.map(tag => tag.name).join(' ')} />
      <meta itemProp="datePublished" content={dateFormat(article.created_at * 1000, 'yyyy-MM-dd')} />
      <meta itemProp="dateModified" content={dateFormat(article.updated_at * 1000, 'yyyy-MM-dd')} />
      <meta itemProp="description" content={article.summary} />
      <meta itemProp="image" content={article.thumb} />
    </>
  )
}

export default ArticleMeta
