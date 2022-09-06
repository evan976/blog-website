import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import ArticleList from 'components/article/list'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import fetch from 'service/fetch'

type Props = {
  swipers: Swiper[]
}

const Home: NextPage<Props> = ({ swipers }) => {
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {swipers?.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.url} layout="fill" alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ArticleList />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const articles = await fetch.get('posts')

  const swipers = await fetch.get<PaginateResponse<Swiper>>('/wallpapers')

  // console.log(articles)

  return {
    props: {
      swipers: swipers.data,
    },
  }
}

export default Home
