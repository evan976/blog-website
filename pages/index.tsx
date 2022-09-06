import type { GetStaticProps, NextPage } from 'next'
import fetch from 'service/fetch'
import { Swiper, SwiperSlide } from 'components/common/swiper'

const Home: NextPage = () => {

  return (
    <div className='w-full h-full'>
      <Swiper
        className='w-[610px] h-[200px] rounded bg-bg-100'
        setWrapperSize={true}
        observeParents={true}
        grabCursor={false}
        simulateTouch={false}
        preloadImages={true}
        lazy={true}
        pagination={{
          clickable: true
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
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
