import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import InfiniteScroll from 'react-infinite-scroller'
import * as mainApi from '../../api'
import ArticleList from '../../components/Article/ArticleList'
import Recommend from '../../components/Recommend'
import { Main } from '../../styles/components'
import { TagPageWrap } from '../../styles/tag'

type Props = {
  tag: ITag
  totalArticle: number
  articles: IArticle[]
}

const pageSize = 12

const TagPage: NextPage<Props> = ({ tag, totalArticle, articles: defaultArticles = [] }) => {
  const router = useRouter()
  const [page, setPage] = useState<number>(1)
  const [articles, setArticles] = useState<IArticle[]>(defaultArticles)

  const getArticles = useCallback((page: number) => {
    mainApi.articleService.findAll({
      page,
      pageSize,
      tagSlug: router.query.slug as string
    })
      .then(result => {
        setPage(page)
        setArticles((articles) => [...articles, ...result.data.data])
      }
    )
  }, [router.query.slug])

  return (
    <Main>
      <Helmet>
        <title>{tag.slug + ' | ' + 'Evanone.site'}</title>
      </Helmet>
      <TagPageWrap>
        <div className='tag-flow-page'>
          <div className='header'>
            <div
              className='background'
              style={{ backgroundImage: `url(${tag.background})` }}
            />
            <div className='content'>
              <div className='icon'>
              </div>
              <div className='title'>
                #{tag.name}
              </div>
            </div>
          </div>
          <div className='article-list'>
            <InfiniteScroll
              pageStart={1}
              loadMore={getArticles}
              hasMore={page * pageSize < totalArticle}
              loader={
                <div className={'loading'} key={0}>
                  loading ...
                </div>
              }
            >
              <ArticleList articles={articles} hideHeader />
            </InfiniteScroll>
          </div>
        </div>
        <Recommend />
      </TagPageWrap>
    </Main>
  )
}

TagPage.getInitialProps = async ({ query }) => {
  const { slug } = query
  const article = await mainApi.articleService.findAll({ tagSlug: slug as string })
  const tag = await mainApi.tagService.findBySlug(slug as string)

  return {
    tag: tag.data,
    totalArticle: article.data?.total,
    articles: article.data?.data,
  }
}

export default TagPage