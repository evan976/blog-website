import type { GetStaticProps, NextPage } from 'next'
import fetch from '@/service/fetch'

const Home: NextPage = () => {

  return (
    <div className='bg-background-primary rounded'>
      home page
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {

  // const articles = await fetch.get('posts')

  // console.log(articles)

  return {
    props: {}
  }
}

export default Home
