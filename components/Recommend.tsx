import * as React from 'react'
import { GlobalContext } from '../context/globalContext'
import { RecommendContainer } from '../styles/components'
import ArticleRecommend from './Article/ArticleRecommend'
import NewComment from './Comment/NewComment'
import Footer from './Footer'

const Recommend = () => {

  const {
    recommendArticles,
    comments,
    setting,
  } = React.useContext(GlobalContext)

  return (
    <RecommendContainer>
      <ArticleRecommend articles={recommendArticles} />
      <NewComment comments={comments} />
      <Footer setting={setting} />
    </RecommendContainer>
  )
}

export default Recommend
