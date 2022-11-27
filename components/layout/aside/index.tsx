import * as React from 'react'
import { fetchHotArticleList, fetchTagList } from 'api'
import type { Article as IArticle, Tag as ITag } from 'types'
import Article from './article'
import Calendar from './calendar'
import Tag from './tag'

const Aside: React.FC = () => {
  const [loading, setLoading] = React.useState(false)
  const [articleList, setArticleList] = React.useState<Array<IArticle>>([])
  const [tagList, setTagList] = React.useState<Array<ITag>>([])

  const fetGlobalData = async () => {
    setLoading(true)
    Promise.all([fetchHotArticleList(), fetchTagList()])
      .then(([articles, tags]) => {
        setLoading(false)
        setArticleList(articles)
        setTagList(tags)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  React.useEffect(() => {
    fetGlobalData()
  }, [])

  return (
    <div className="order-3 flex-shrink-0 w-[256px] ml-3 hidden sm:block">
      <Article articles={articleList} loading={loading} />
      <Calendar />
      <Tag tags={tagList} loading={loading} />
    </div>
  )
}

export default Aside
