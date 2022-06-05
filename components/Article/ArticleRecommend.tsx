import classNames from 'classnames'
import Link from 'next/link'
import * as React from 'react'
import Card from '../Card'
import { CarbonRecommend } from '../Icons/RecommendOutlined'

const ArticleRecommend: React.FC<{articles: IArticle[]}> = ({ articles }) => {
  return (
    <Card
      className='article-recommend'
      title='推荐文章'
      icon={<CarbonRecommend />}
    >
      {
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
      }
    </Card>
  )
}

export default ArticleRecommend