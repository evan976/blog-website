import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import ArticleList from 'components/article/list'
import fetch from 'service/fetch'

type Props = {
  articles: Array<Article>
  category: Category
}

const CategoryPage: NextPage<Props> = ({ articles, category }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={category?.background}
          alt={category?.name}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[50%]">
          <h1 className="text-center text-white text-lg">{category?.name}</h1>
          <p className="text-center text-white text-sm mt-2">{category?.description}</p>
        </div>
      </div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  const categories = await fetch.get<CategoryResponse>('/categories')

  console.log(categories)

  const paths = categories.data?.map(category => ({
    params: { slug: category.slug }
  }))

  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const articles = await fetch.get<ArticleResponse>('/posts', {
    params: { categorySlug: params?.slug }
  })

  const category = await fetch.get<Category>(`/categories/slug/${params?.slug}`)

  return {
    props: {
      articles: articles.data,
      category
    }
  }
}

export default CategoryPage
