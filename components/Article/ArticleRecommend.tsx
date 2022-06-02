import Link from 'next/link'
import * as React from 'react'
import Card from '../Card'
import { CarbonRecommend } from '../Icons/RecommendOutlined'

interface ArticleRecommendProps {}

const ArticleRecommend: React.FC<ArticleRecommendProps> = () => {
  return (
    <Card
      className='article-recommend'
      title='推荐文章'
      icon={<CarbonRecommend />}
    >
      <li className='item'>
        <span className='index'>1</span>
        <Link href='/article/[id]' as='/article/1' passHref>
          作为一名前端工程师，我浪费了时间学习了这些技术,作为一名前端工程师，我浪费了时间学习了这些技术
        </Link>
      </li>
      <li className='item'>
        <span className='index'>1</span>
        <Link href='/article/[id]' as='/article/1' passHref>
          作为一名前端工程师，我浪费了时间学习了这些技术,作为一名前端工程师，我浪费了时间学习了这些技术
        </Link>
      </li>
      <li className='item'>
        <span className='index'>1</span>
        <Link href='/article/[id]' as='/article/1'>
          作为一名前端工程师，我浪费了时间学习了这些技术,作为一名前端工程师，我浪费了时间学习了这些技术
        </Link>
      </li>
    </Card>
  )
}

export default ArticleRecommend