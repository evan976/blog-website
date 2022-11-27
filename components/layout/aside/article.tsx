import Link from 'next/link'
import * as React from 'react'
import Card from 'components/common/card'
import DateTime from 'components/common/date'
import LineSkeleton from 'components/common/skeleton/line'
import type { Article as IArticle } from 'types'

const Article: React.FC<{ articles: Array<IArticle>; loading: boolean }> = ({ loading, articles }) => {
  return (
    <Card title="热门文章" icon="&#xe753;">
      <ul className="w-full h-full">
        {loading
          ? (
              Array.from({ length: 5 }).map((_, index) => (
            <li className="h-5 w-full mb-3 last:mb-0" key={index}>
              <LineSkeleton />
            </li>
              ))
            )
          : (
              articles?.map((article, index) => (
            <li key={article.id} className="flex w-full justify-start items-start mb-2 last:mb-0">
              <span
                className={`leading-5 h-4 w-4 mr-2 mt-[2px] text-[12px] rounded-[1px] flex justify-center items-center bg-bg-400 shrink-0 ${index + 1 === 1 ? 'text-white !bg-blue' : undefined} ${index + 1 === 2 ? 'text-white !bg-green' : undefined} ${index + 1 === 3 ? 'text-white !bg-red' : undefined}`}
              >
                {index + 1}
              </span>
              <div className="flex flex-col justify-between overflow-hidden">
                <Link href={`/article/${article.article_id}`}>
                  <a className="w-full max-w-full text-font-200 truncate underline-offset-4 text-sm text-font-200transition-all duration-200 hover:text-blue hover:underline">
                    {article.title}
                  </a>
                </Link>
                <div className="flex items-center text-xs mt-1 text-font-300">
                  <DateTime date={article.created_at * 1000} from={false} format="yyyy-MM-dd" />
                  <span className="flex items-center ml-5">
                    <i className="iconfont">&#xe63d;</i>
                    <span className="ml-[2px]">{article.views}</span>
                  </span>
                </div>
              </div>
            </li>
              ))
            )}
      </ul>
    </Card>
  )
}

export default Article
