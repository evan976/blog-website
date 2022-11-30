import { fetchArticleList } from 'api'
import { fetchWeiboList } from 'api/tripartite'
import ArticleList from 'components/article/list'
import BlurImage from 'components/common/blur-image'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import Layout from 'components/layout'
import Weibo from 'components/weibo'
import React from 'react'
import type { Article } from 'types'
import type { NextPageWithLayout } from './_app'

interface Props {
  total: number
  totalPage: number
  articles: Article[]
  weibo: any[]
}

const HomePage: NextPageWithLayout<Props> = ({ total, totalPage, articles, weibo }) => {
  const banners = React.useMemo(() => articles.slice(0, 6), [articles])

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
          disableOnInteraction: false,
        }}
      >
        {banners?.map(item => (
          <SwiperSlide key={item.id}>
            <BlurImage
              src={item.thumb}
              alt={item.title}
              href={`/article/${item.article_id}`}
              className="duration-200 scale-100 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Weibo weibo={weibo} />
      <ArticleList
        articles={articles}
        total={total}
        totalPage={totalPage}
      />
    </div>
  )
}

HomePage.getLayout = page => <Layout>{page}</Layout>

HomePage.getInitialProps = async () => {
  const result = await fetchArticleList({ status: 1 })
  const weibo = await fetchWeiboList()

  return {
    total: result.total,
    totalPage: result.total_page,
    articles: result.data,
    weibo,
  }
}

export default HomePage
