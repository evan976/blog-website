import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import { articleService } from '../../api'
import useAsyncLoading from '../../hooks/useAsyncLoading'
import { CarbonRecommend } from '../Icons/RecommendOutlined'
import LatestArticleSkeleton from './LatestArticleSkeleton'
import Card from '../Card'
import Empty from '../Empty'

const LatestArticle: React.FC = () => {
  const [articleList, setArticleList] = React.useState<IArticle[]>([])
  const [fetchLatestComment, loading] = useAsyncLoading(articleService.findAll, 150, true)

  React.useEffect(() => {
    fetchLatestComment({ page: 1, pageSize: 10, weight: 3 })
      .then(res => {
        setArticleList(res.data.data)
      })
  }
  , [fetchLatestComment])

  return (
    <Card
      className='article-recommend'
      title='推荐文章'
      icon={<CarbonRecommend />}
    >
      {
        loading ? (
          <>
            {
              Array.from({ length: 6 }).map((_, index) => (
                <LatestArticleSkeleton key={index} />
              ))
            }
          </>
        ) : (
          <>
            {
              articleList?.length > 0 ? (
                articleList?.map((article, index) => (
                  <li key={article.id} className='item'>
                    <span className={classNames('index', {
                      'first': index === 0,
                      'second': index === 1,
                      'third': index === 2
                    })}>{index + 1}</span>
                    <Link
                      href='/article/[id]'
                      as={`/article/${article.articleId}`}
                      passHref
                    >
                      {article.title}
                    </Link>
                  </li>
                ))
              ) : (<Empty />)
            }
          </>
        )
      }
    </Card>
  )
}

export default LatestArticle