import type { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import ArticleList from 'components/article/list'
import Layout from 'components/layout'
import type { NextPageWithLayout } from 'pages/_app'
import fetch from 'service/fetch'
import { API_PATHS, Article, ArticleResponse, Tag } from 'types'

type Props = {
  articles: Array<Article>
  tag: Tag
}

const TagPage: NextPageWithLayout<Props> = ({ articles, tag }) => {
  return (
    <div className="w-full">
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
      <ArticleList articles={articles} />
    </div>
  )
}

TagPage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await fetch.get<Array<Tag>>(API_PATHS.TAGS)
  const paths = tags?.map(tag => ({
    params: { slug: tag.slug }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const articles = await fetch.get<ArticleResponse>(API_PATHS.ARTICLES, {
    params: { tagSlug: params?.slug }
  })
  const tag = await fetch.get<Tag>(`${API_PATHS.TAGS}/slug/${params?.slug}`)

  return {
    props: {
      articles: articles.data,
      tag
    }
  }
}

export default TagPage
