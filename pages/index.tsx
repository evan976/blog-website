import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ArticleList from 'components/article/list'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import fetch from 'service/fetch'

type Props = {
  swipers: Swiper[]
  total: number
  articles: Article[]
}

const Home: NextPage<Props> = ({ swipers, total, articles }) => {

  if (!swipers) return <div>loading...</div>

  return (
    <div className="w-full h-full">
      <Swiper
        className="w-[610px] h-[200px] rounded bg-bg-100"
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

export const getStaticProps: GetStaticProps = async (context) => {
  // const articles = await fetch.get('posts')

  const swipers = await fetch.get<PaginateResponse<Swiper>>('/wallpapers')
  const articles = await fetch.get<PaginateResponse<Article>>('/posts')

  // console.log(articles)

  return {
    props: {
      swipers: swipers.data,
      total: articles.total,
      articles: articles.data
    },
  }
}

export default Home
