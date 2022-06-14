import * as React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { CommentOutlined } from '../Icons/CommentOutlined'
import { EyeOutlined } from '../Icons/EyeOutlined'
import { LikeOutlined } from '../Icons/LikeOutlined'
import LoadingImage from '../LoadingImage'
import LocaleTime from '../LocaleTime'

interface ArticleItemProps {
  article: IArticle
}

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <div
      className='article-item'
      onClick={() => {
        Router.push(`/article/${article.articleId}`)
      }}
    >
      <div className='main'>
        <div className='meta-container'>
          <LocaleTime date={article.createdAt!} className='date' />
          <div className='tag-list'>
            {
              article.tags?.map(tag => (
                <Link
                  key={tag.id}
                  href='/'
                  className='tag'
                  passHref
                >{tag.name}</Link>
              ))
            }
          </div>
        </div>
        <div className='content-wrapper'>
          <div className='content-main'>
            <div className='title'>
              <Link
                href='/article/[id]'
                as={`/article/${article.articleId}`}
                className='title-link'
                passHref
              >
                {article.title}
              </Link>
            </div>
            <div className='summary'>
              {article.summary}
            </div>
            <ul className='action-list'>
              <li className='item'>
                <EyeOutlined />
                <span>{article.views}</span>
              </li>
              <li className='item'>
                <LikeOutlined />
                <span>{article.likes}</span>
              </li>
              <li className='item'>
                <CommentOutlined />
                <span>{article.comments}</span>
              </li>
            </ul>
          </div>
          <div className='content-image'>
            <LoadingImage src={article.thumb!} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem