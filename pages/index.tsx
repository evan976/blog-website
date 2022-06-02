import type { NextPage } from 'next'
import { useTheme } from 'styled-components'
import ArticleList from '../components/Article/ArticleList'
import Swiper from '../components/Swiper'
import { HomeContainer } from '../styles/home'

const Home: NextPage = () => {
  const theme = useTheme()

  const swiper = [
    {
      id: 1,
      url: 'https://static.evanone.site/photo1.jpeg',
      link: 'https://www.evanone.site/',
    },
    {
      id: 2,
      url: 'https://static.evanone.site/photo2.jpeg',
      link: 'https://www.evanone.site/',
    },
    {
      id: 3,
      url: 'https://static.evanone.site/photo3.jpeg',
      link: 'https://www.evanone.site/',
    }
  ]

  return (
    <HomeContainer>
      <div className='swiper-container'>
        <Swiper swipers={swiper} />
      </div>
      <ArticleList />
    </HomeContainer>
  )
}

export default Home
