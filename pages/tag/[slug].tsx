import { fetchArticleListBySlug, fetchTagBySlug } from 'api'
import ArticleList from 'components/article/list'
import BlurImage from 'components/common/blur-image'
import Ad from 'components/common/ad'
import Layout from 'components/layout'
import { META } from 'config/app.config'
import type { NextPageWithLayout } from 'pages/_app'
import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import type { Article, Tag } from 'types'

interface Props {
  articles: Array<Article>
  tag: Tag
  total: number
  totalPage: number
}

const TagPage: NextPageWithLayout<Props> = ({ articles, tag, total, totalPage }) => {
  return (
    <>
      <Helmet>
        <title>{`${tag.name} - ${META.title}`}</title>
      </Helmet>
      <div className="w-full h-[168px] sm:h-[210px] mt-3 sm:mt-0 rounded overflow-hidden relative">
        <BlurImage
          src={tag?.background}
          alt={tag?.name}
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100 rounded"
        >
          <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]">
            <h1 className="text-center text-white text-lg">{tag?.name}</h1>
          </div>
        </BlurImage>
      </div>
      <Ad />
      <ArticleList
        articles={articles}
        total={total}
        totalPage={totalPage}
      />
    </>
  )
}

TagPage.getLayout = page => <Layout>{page}</Layout>

TagPage.getInitialProps = async ({ query }) => {
  const { slug } = query
  const { data, total, total_page } = await fetchArticleListBySlug(slug as string, 'tag')
  const tag = await fetchTagBySlug(slug as string)

  return {
    tag,
    articles: data,
    total,
    totalPage: total_page,
  }
}

export default TagPage
