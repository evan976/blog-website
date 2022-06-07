import * as React from 'react'
import { ArticleContainer } from '../../styles/components'
import ArticleItem from './ArticleItem'
import * as mainApi from '../../api'
import classNames from 'classnames'
import ArticleSkeleton from './ArticleSkeleton'
import Empty from '../Empty'

interface ArticleListProps {
  articles: IArticle[]
  categories: ICategory[]
}

const ArticleList: React.FC<ArticleListProps> = ({ articles, categories }) => {

  const [articleList, setArticleList] = React.useState<IArticle[]>(articles)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [active, setActive] = React.useState<number>(0)

  const getArticleList = React.useCallback((id: string) => {
    setLoading(true)
    mainApi.articleService.findByCategoryId(id)
      .then((res) => {
        // 修复数据加载过快的 bug :)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        setArticleList(res.data.data as IArticle[])
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      })
  }, [])

  return (
    <ArticleContainer>
      <header className='list-header'>
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
      </header>
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
