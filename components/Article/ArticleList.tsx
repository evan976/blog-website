import * as React from 'react'
import Link from 'next/link'
import { ArticleContainer } from '../../styles/components'
import ArticleItem from './ArticleItem'

interface ArticleListProps {
  articles: IArticle[]
  categories: ICategory[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categories }) => {
  return (
    <ArticleContainer>
      <header className='list-header'>
        <li className='nav-item active'>
          <Link href='/' passHref>所有</Link>
        </li>
        {
          categories?.map(category => (
            <li key={category.id} className='nav-item'>
              <Link href='/' passHref>{category.name}</Link>
            </li>
          ))
        }
      </header>
      <div className='list-content'>
        {
          articles?.map(article => (
            <ArticleItem key={article.id} article={article} />
          ))
        }
      </div>
    </ArticleContainer>
  )
}

export default ArticleList
