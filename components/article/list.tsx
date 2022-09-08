import React from 'react'
import ArticleItem from './item'
import ArticleSkeleton from './skeleton'

const ArticleList: React.FC<{ articles: Array<Article> }> = ({ articles }) => {
  return (
    <div className="my-3">
      {!articles.length ? (
        Array.from({ length: 6 }).map((_, index) => (
          <ArticleSkeleton key={index} />
        ))
      ) : (
        articles?.map(article => (
          <ArticleItem key={article.id} article={article} />
        ))
      )}
    </div>
  )
}

export default ArticleList
