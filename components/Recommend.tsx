import * as React from 'react'
import { GlobalContext } from '../context/globalContext'
import { RecommendContainer } from '../styles/components'
import LatestArticle from './Article/LatestArticle'
import Footer from './Footer'
import TagList from './Tag/TagList'

const Recommend: React.FC = () => {
  const global = React.useContext(GlobalContext)

  return (
    <RecommendContainer>
      <LatestArticle />
      {/* <LatestComment /> */}
      <TagList />
      <Footer setting={global.setting} />
    </RecommendContainer>
  )
}

export default Recommend
