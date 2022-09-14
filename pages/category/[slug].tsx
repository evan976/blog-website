import type { GetStaticPaths, GetStaticProps } from 'next'
import * as React from 'react'
import { fetchArticleListBySlug, fetchCategoryBySlug, fetchCategoryList } from 'api'
import ArticleList from 'components/article/list'
import Layout from 'components/layout'
import { NextPageWithLayout } from 'pages/_app'
import { Article, Category, } from 'types'

type Props = {
  articles: Array<Article>
  category: Category
  total: number
  totalPage: number
}

const CategoryPage: NextPageWithLayout<Props> = ({ articles, category, total, totalPage }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={category?.background}
          alt={category?.name}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-center text-white text-lg">{category?.name}</h1>
          <p className="text-center text-white text-sm mt-2">{category?.description}</p>
        </div>
      </div>
      <ArticleList
        articles={articles}
        total={total}
        totalPage={totalPage}
      />
    </div>
  )
}

CategoryPage.getLayout = (page) => <Layout>{page}</Layout>

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const result = await fetchCategoryList()
    const paths = result.data.map(category => {
      return {
        params: { slug: category.slug }
      }
    })
    return { paths: paths, fallback: false }
  } catch (error) {
    return { paths: [], fallback: false }
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  const { data, total, total_page } = await fetchArticleListBySlug(params?.slug as string, 'category')
  const category = await fetchCategoryBySlug(params?.slug as string)

  return {
    props: {
      category,
      articles: data,
      total: total,
      totalPage: total_page,
    }
  }
}

export default CategoryPage
