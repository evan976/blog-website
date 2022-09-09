import React, { useEffect, useState } from 'react'
import Card from 'components/common/card'
import LineSkeleton from 'components/common/skeleton/line'
import useRequest from 'hooks/useRequest'
import fetch from 'service/fetch'

const fetchArticles = () => fetch.get<ArticleResponse>('/posts', {
  params: { weight: 3 }
})

const Article: React.FC = () => {

  const [hotList, setHotList] = useState<Array<Article>>([])

  const [fetchHotList, loading] = useRequest(fetchArticles, 150, true)

  useEffect(() => {
    fetchHotList()
      .then(res => {
        setHotList(res.data)
      })
  }, [fetchHotList])

  return (
    <Card title="热门文章" icon="&#xe753;" className="mt-3">
      <ul className="w-full h-full">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <li className="h-5 w-full mb-3 last:mb-0" key={index}>
              <LineSkeleton />
            </li>
          ))
        ) : (
          hotList.map((article, index) => (
            <li key={article.id} className="h-6 flex justify-start items-center">
              <span
                className={`leading-4 h-4 w-4 mr-2 text-[12px] rounded-[1px] flex justify-center items-center bg-bg-400 shrink-0 ${index + 1 === 1 ? 'text-white !bg-blue' : undefined
                  } ${index + 1 === 2 ? 'text-white !bg-green' : undefined} ${index + 1 === 3 ? 'text-white !bg-red' : undefined
                  }`}
              >
                {index + 1}
              </span>
              <a
                href="/"
                className="truncate text-sm text-font-200 text-ellipsis overflow-hidden transition-all duration-200 hover:text-blue"
              >
                {article.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </Card>
  )
}

export default Article
