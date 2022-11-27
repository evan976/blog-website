import DateTime from 'components/common/date'
import LazyImage from 'components/common/lazy-image'
import Link from 'next/link'
import * as React from 'react'
import type { Article } from 'types'

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-bg-100 rounded sm:p-3 flex sm:flex-row flex-col justify-start mt-3">
      <div className="rounded-t-[4px] sm:rounded sm:w-[180px] sm:h-[102px] w-full h-[120px] sm:border sm:border-border overflow-hidden">
        <Link href={`/article/${article.article_id}`}>
          <LazyImage
            src={article.thumb}
            alt={article.title}
            className="duration-200 scale-100 hover:scale-105 cursor-pointer rounded-t-[4px] sm:rounded"
          />
        </Link>
      </div>
      <div className="p-2 sm:ml-3 sm:p-0 flex-1 flex flex-col justify-between">
        <Link href={`/article/${article.article_id}`}>
          <a className="inline-block self-start">
            <h1 className="text-base text-font-100 mb-3 hover:underline hover:text-blue duration-200 hover:underline-offset-4">{article.title}</h1>
          </a>
        </Link>
        <p className="mb-4 text-font-200">{article.summary}</p>
        <div className="flex w-full justify-between items-center text-font-200 text-[12px]">
          <span className="flex items-center">
            <i className="iconfont">&#xe680;</i>
            <DateTime className="ml-[2px]" date={article.created_at * 1000} />
          </span>
          <span className="flex items-center">
            <i className="iconfont">&#xe63d;</i>
            <span className="ml-[2px]">{article.views}</span>
          </span>
          <span className="flex items-center">
            <i className="iconfont">&#xe7c8;</i>
            <span className="ml-[2px]">{article.likes}</span>
          </span>
          <span className="flex items-center">
            <i className="iconfont">&#xe6aa;</i>
            <span className="ml-[2px]">{article.comments}</span>
          </span>
          <span className="flex items-center">
            <i className="iconfont">&#xe748;</i>
            <span className="ml-[2px]">{article.category.name}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
