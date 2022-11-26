import { fetchArticleList } from 'api'
import { fetchWeiboList } from 'api/tripartite'
import ArticleList from 'components/article/list'
import { Swiper, SwiperSlide } from 'components/common/swiper'
import Layout from 'components/layout'
import Weibo from 'components/weibo'
import Image from 'next/image'
import Link from 'next/link'
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
            <Link href={`/article/${item.article_id}`}>
              <a className="w-full h-full block">
                <Image
                  className="duration-200 scale-100 hover:scale-105"
                  src={item.thumb}
                  alt={item.title}
                  layout="fill"
                />
              </a>
            </Link>
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
