import type { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NextPageWithLayout } from './_app'
import ArticleList from 'components/article/list'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import Layout from 'components/layout'
import fetch from 'service/fetch'

type Props = {
  swipers: Swiper[]
  total: number
  articles: Article[]
}

const HomePage: NextPageWithLayout<Props> = ({ swipers, total, articles }) => {

  return (
    <div className="w-full h-full">
      <Swiper
        className="w-[610px] h-[200px] hidden sm:block rounded bg-bg-100"
        setWrapperSize={true}
        observeParents={true}
        grabCursor={false}
        simulateTouch={false}
        preloadImages={true}
        lazy={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        }}
      >
        {swipers?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={item.link}>
              <a>
                <Image
                  className="duration-200 scale-100 hover:scale-105"
                  src={item.url}
                  layout="fill" alt={item.name}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArticleList articles={articles} />
    </div>
  )
}

HomePage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const swipers = await fetch.get<SwiperResponse>('/wallpapers')
  const articles = await fetch.get<ArticleResponse>('/posts')

  return {
    props: {
      swipers: swipers.data,
      total: articles.total,
      articles: articles.data
    },
  }
}

export default HomePage
