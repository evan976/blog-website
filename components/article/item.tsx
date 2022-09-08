import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

const ArticleItem: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-bg-100 rounded p-3 flex justify-start items-center mt-3">
      <div className="rounded-sm w-[180px] h-[102px] border">
        <Link href={`/article/${article.articleId}`}>
          <a className="inline-block">
            <Image
              className="rounded-sm duration-200 hover:scale-105"
              src={article.thumb}
              alt={article.title}
              width={180}
              height={101}
            />
          </a>
        </Link>
      </div>
      <div className="ml-3 h-full flex-1 flex flex-col justify-between items-start">
        <Link href={`/article/${article.articleId}`}>
          <a className="inline-block">
            <h1 className="text-lg text-font-100 mb-3 hover:underline hover:text-blue duration-200 hover:underline-offset-4">{article.title}</h1>
          </a>
        </Link>
        <p className="mb-4 text-font-200">{article.summary}</p>
        <div className="flex w-full justify-between items-center text-font-200 text-[12px]">
          <span className="flex items-center">
            <i className="iconfont">&#xe680;</i>
            <span className="ml-[2px]">{article.createdAt}</span>
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
