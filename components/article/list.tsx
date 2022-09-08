import React from 'react'
import ArticleItem from './item'
import BaseSkeleton from 'components/common/skeleton/base'

const ArticleList: React.FC<{ articles: Array<Article> }> = ({ articles }) => {
  return (
    <div className="my-3">
      {articles?.map(article => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
