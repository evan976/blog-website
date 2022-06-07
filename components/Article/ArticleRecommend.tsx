import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import Card from '../Card'
import Empty from '../Empty'
import { CarbonRecommend } from '../Icons/RecommendOutlined'

const ArticleRecommend: React.FC<{articles: IArticle[]}> = ({ articles }) => {
  return (
    <Card
      className='article-recommend'
      title='推荐文章'
      icon={<CarbonRecommend />}
    >
      {
        articles?.length ? (
          articles?.map((article, index) => (
            <li key={article.id} className='item'>
              <span className={classNames('index', {
                'first': index === 0,
                'second': index === 1,
                'third': index === 2
              })}>{index + 1}</span>
              <Link href='/article/[id]' as={`/article/${article.id}`} passHref>
                {article.title}
              </Link>
            </li>
          ))
        ) : (<Empty />)
      }
    </Card>
  )
}

export default ArticleRecommend