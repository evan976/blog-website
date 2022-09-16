import type { GetStaticPaths, GetStaticProps } from 'next'
import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { fetchArticleListBySlug, fetchTagBySlug, fetchTagList } from 'api'
import ArticleList from 'components/article/list'
import Ad from 'components/common/ad'
import Layout from 'components/layout'
import { META } from 'config/app.config'
import type { NextPageWithLayout } from 'pages/_app'
import { Article, Tag } from 'types'

type Props = {
  articles: Array<Article>
  tag: Tag
  total: number
  totalPage: number
}

const TagPage: NextPageWithLayout<Props> = ({ articles, tag, total, totalPage }) => {
  return (
    <>
      <Helmet>
        <title>{tag.name + ' | ' + tag.slug + ' | ' + META.title}</title>
      </Helmet>
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={tag?.background}
          alt={tag?.name}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]">
          <h1 className="text-center text-white text-lg">{tag?.name}</h1>
        </div>
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

TagPage.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const tags = await fetchTagList()
    const paths = tags.map(tag => {
      return {
        params: { slug: tag.slug }
      }
    })

    return { paths: paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { data, total, total_page } = await fetchArticleListBySlug(params?.slug as string, 'tag')
  const tag = await fetchTagBySlug(params?.slug as string)

  return {
    props: {
      tag,
      articles: data,
      total: total,
      totalPage: total_page,
    }
  }
}

export default TagPage
