import * as React from 'react'
import Link from 'next/link'
import { ArticleContainer } from '../../styles/components'
import ArticleItem from './ArticleItem'

const ArticleList: React.FC = () => {
  return (
    <ArticleContainer>
      <header className='list-header'>
        <li className='nav-item active'>
          <Link href='/' passHref>前端</Link>
        </li>
        <li className='nav-item'>
          <Link href='/' passHref>前端</Link>
        </li>
        <li className='nav-item'>
          <Link href='/' passHref>前端</Link>
        </li>
      </header>
      <div className='list-content'>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </ArticleContainer>
  )
}

export default ArticleList
