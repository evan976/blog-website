import React from 'react'
import ArticleItem from './item'
import ArticleSkeleton from './skeleton'
import Empty from 'components/common/empty'
import fetch from 'service/fetch'
import { API_PATHS, Article, ArticleResponse } from 'types'

type Props = {
  articles: Array<Article>
  total: number
  totalPage: number
}

const ArticleList: React.FC<Props> = ({ articles, total, totalPage }) => {

  const [page, setPage] = React.useState(1)
  const [articleList, setArticleList] = React.useState<Array<Article>>(articles)

  const hasMore = React.useMemo(() => {
    return totalPage > 1 && page !== totalPage
  }, [page, totalPage])

  const currentPage = React.useMemo(() => {
    return total > 12 ? 12 : total
  }, [total])

  const loadMoreArticle = React.useCallback(() => {
    if (!hasMore) return

    fetch.get<ArticleResponse>(API_PATHS.ARTICLES, {
      params: { page: page + 1 }
    })
      .then(result => {
        setPage(page => page + 1)
        setArticleList((articles) => [...articles, ...result.data])
      })
  }, [hasMore, page])

  React.useEffect(() => {
    setArticleList(articles)
  }, [articles])

  return (
    <div className="my-3">
      {!articleList.length ? (<Empty />) : (
        <>
          {articleList?.map(article => (
            <ArticleItem key={article.id} article={article} />
          ))}
          <div className="bg-bg-100 h-8 leading-[32px] my-3 rounded flex justify-between items-center">
            <span className="ml-3 text-font-300">{currentPage} / {total}</span>
            <button
              className={`text-font-200 text-sm bg-bg-100 w-32 h-full flex justify-end pr-4 items-center text-center relative cursor-pointer rounded-r-[4px] duration-150 before:content-[''] before:absolute before:block before:w-4 before:h-[125%] before:top-[-12%] before:left-[-5px] before:bg-bg-200 before:rotate-[18deg] ${hasMore ? 'cursor-pointer hover:bg-lime hover:text-white' : 'cursor-not-allowed'}`}
              disabled={!hasMore}
              onClick={loadMoreArticle}
            >
              {hasMore ? '拨云见日 👇' : '水尽山穷 👋'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default ArticleList
