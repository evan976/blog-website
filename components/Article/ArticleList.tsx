import * as React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { ArticleContainer } from '../../styles/components'
import ArticleItem from './ArticleItem'
import * as mainApi from '../../api'
import ArticleSkeleton from './ArticleSkeleton'
import Empty from '../Empty'

interface ArticleListProps {
  articles: IArticle[]
  categories?: ICategory[]
  isSearch?: boolean
  hideHeader?: boolean
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categories, isSearch, hideHeader }) => {
  const [articleList, setArticleList] = React.useState<IArticle[]>(articles)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [active, setActive] = React.useState<number>(0)
  const router = useRouter()

  React.useEffect(() => {
    mainApi.articleService.findAll({
      keyword: router.query.keyword as string,
      tagSlug: router.query.slug as string,
    }).then(result => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
      setArticleList(result.data?.data)
    }
    ).catch(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    })
  }, [router.query.keyword, router.query.slug])

  const getArticleList = React.useCallback((id: string) => {
    setLoading(true)
    mainApi.articleService.findByCategoryId(id)
      .then((res) => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        setArticleList(res.data?.data)
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <ArticleContainer>
      {!hideHeader && (
        <header className={classNames('list-header', {
          'is-search': isSearch,
        })}>
          {
            isSearch ? (
              <div className='search-title'>
                和 <span>{router.query.keyword}</span> 有关的所有文章
              </div>
            ) : (
              <>
                <li className={classNames('nav-item', {
                  active: active === 0
                })}>
                  <span onClick={() => {
                    setArticleList(articles)
                    setActive(0)
                  }}>所有</span>
                </li>
                {
                  categories?.map(category => (
                    <li key={category.id} className={classNames('nav-item', {
                      active: active === category.id
                    })}>
                      <span onClick={() => {
                        getArticleList(String(category.id))
                        setActive(category.id!)
                      }}>
                        {category.name}
                      </span>
                    </li>
                  ))
                }
              </>
            )
          }
        </header>
      )}
      <div className='list-content'>
        {
          loading ? (
            <>
              {
                Array.from({ length: 3 }).map((_, index) => (
                  <ArticleSkeleton key={index} />
                ))
              }
            </>
          ) : (
            articleList?.length ? (
              articleList?.map(article => (
                <ArticleItem key={article.id} article={article} />
              ))
            ) : (
              <Empty description='暂无文章' />
            )
          )
        }
      </div>
    </ArticleContainer>
  )
}

export default ArticleList
