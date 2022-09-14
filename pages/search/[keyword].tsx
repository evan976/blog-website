import * as React from 'react'
import { fetchArticleList } from 'api'
import ArticleList from 'components/article/list'
import Layout from 'components/layout'
import type { NextPageWithLayout } from 'pages/_app'
import { Article } from 'types'

type Props = {
  articles: Array<Article>
  keyword: string
  total: number
  totalPage: number
}

const SearchPage: NextPageWithLayout<Props> = ({ articles, total, totalPage, keyword }) => {
  return (
    <div className="w-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src="/google-search.jpeg"
          alt="search"
        />
        <div className="absolute top-[10%] left-1/2 translate-x-[-50%] flex flex-col">
          <i className="iconfont mx-auto text-white !text-7xl">&#xe741;</i>
          <p className="text-center text-white text-sm">
            和<span> “{keyword}” </span>有关的所有文章
          </p>
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

SearchPage.getLayout = (page) => <Layout>{page}</Layout>

SearchPage.getInitialProps = async ({ query }) => {
  const { keyword } = query
  const { data, total, total_page } = await fetchArticleList({ keyword: keyword as string })

  return {
    articles: data,
    total: total,
    totalPage: total_page,
    keyword: keyword as string
  }
}

export default SearchPage
