import * as React from 'react'
import { RecommendContainer } from '../styles/components'
import ArticleRecommend from './Article/ArticleRecommend'
import NewComment from './Comment/NewComment'
import Footer from './Footer'

const Recommend = () => {
  return (
    <RecommendContainer>
      <ArticleRecommend />
      <NewComment />
      <Footer />
    </RecommendContainer>
  )
}

export default Recommend
