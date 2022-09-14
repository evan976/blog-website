import type { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NextPageWithLayout } from './_app'
import { fetchArticleList } from 'api'
import ArticleList from 'components/article/list'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import Layout from 'components/layout'
import { Article } from 'types'

type Props = {
  total: number
  totalPage: number
  articles: Article[]
}

const HomePage: NextPageWithLayout<Props> = ({ total, totalPage, articles }) => {

  const banners = React.useMemo(() => {
    return articles.slice(0, 6)
  }, [articles])

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
        {banners?.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={`/article/${item.article_id}`}>
              <a>
                <Image
                  className="duration-200 scale-100 hover:scale-105"
                  src={item.thumb}
                  layout="fill"
                  alt={item.title}
                />
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <ArticleList
        articles={articles}
        total={total}
        totalPage={totalPage}
      />
    </div>
  )
}

HomePage.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetchArticleList()
  return {
    props: {
      total: result.total,
      totalPage: result.total_page,
      articles: result.data
    },
  }
}

export default HomePage
