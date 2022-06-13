import * as React from 'react'
import { GlobalContext } from '../context/globalContext'
import { RecommendContainer } from '../styles/components'
import LatestArticle from './Article/LatestArticle'
import LatestComment from './Comment/LatestComment'
import Footer from './Footer'

const Recommend: React.FC = () => {
  const global = React.useContext(GlobalContext)

  return (
    <RecommendContainer>
      <LatestArticle />
      <LatestComment />
      <Footer setting={global.setting} />
    </RecommendContainer>
  )
}

export default Recommend
