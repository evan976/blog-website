import * as React from 'react'
import { NextPage } from 'next'
import { Helmet } from 'react-helmet-async'
import InfiniteScroll from 'react-infinite-scroller'
import * as mainApi from '../../api'
import ArticleList from '../../components/Article/ArticleList'
import { Main } from '../../styles/components'
import { useRouter } from 'next/router'
import Recommend from '../../components/Recommend'
import { SearchPageWrap } from '../../styles/search'

interface Props {
  keyword: string
  total: number
  articles: IArticle[]
}

const pageSize = 12

const SearchPage: NextPage<Props> = ({ articles: defaultArticles = [], total, keyword }) => {

  const router = useRouter()
  const [page, setPage] = React.useState<number>(1)
  const [articles, setArticles] = React.useState<IArticle[]>(defaultArticles)

  const getArticles = React.useCallback((page: number) => {
    mainApi.articleService.findAll({
      page,
      pageSize,
      keyword: router.query.keyword as string,
    }).then(result => {
      setPage(page)
      setArticles((articles) => [...articles, ...result.data.data as IArticle[]])
    }
    )
  }, [router.query.keyword])

  return (
    <Main>
      <Helmet>
        <title>{'搜索结果' + ' - ' + keyword}</title>
      </Helmet>
      <SearchPageWrap>
        <div className='article-list'>
          <InfiniteScroll
            pageStart={1}
            loadMore={getArticles}
            hasMore={page * pageSize < total}
            loader={
              <div className={'loading'} key={0}>
                loading ...
              </div>
            }
          >
            <ArticleList articles={articles} isSearch />
          </InfiniteScroll>
        </div>
        <Recommend />
      </SearchPageWrap>
    </Main>
  )
}

SearchPage.getInitialProps = async ({ query }) => {
  const { keyword } = query
  const result = await mainApi.articleService.findAll({
    keyword,
  })
  return {
    keyword: keyword as string,
    total: result.data.total as number,
    articles: result.data.data as IArticle[],
  }
}

export default SearchPage
