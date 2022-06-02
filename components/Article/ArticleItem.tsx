import Link from 'next/link'
import * as React from 'react'
import { CommentOutlined } from '../Icons/CommentOutlined'
import { EyeOutlined } from '../Icons/EyeOutlined'
import { LikeOutlined } from '../Icons/LikeOutlined'
import LoadingImage from '../LoadingImage'

interface ArticleItemProps {}

const ArticleItem: React.FC<ArticleItemProps> = () => {
  return (
    <div className='article-item'>
      <div className='main'>
        <div className='meta-container'>
          <div className='date'>一天前</div>
          <div className='tag-list'>
            <Link href='/' className='tag'>前端</Link>
            <Link href='/' className='tag'>架构</Link>
          </div>
        </div>
        <div className='content-wrapper'>
          <div className='content-main'>
            <div className='title'>
              <Link href='/' className='title-link'>
                作为一名前端工程师，我浪费了时间学习了这些技术
              </Link>
            </div>
            <div className='summary'>
              在这里，我们将会把一些常用的技术，以及一些不常用的技术，分享给大家。在这里，我们将会把一些常用的技术，以及一些不常用的技术，分享给大家。在这里，我们将会把一些常用的技术，以及一些不常用的技术，分享给大家。在这里，我们将会把一些常用的技术，以及一些不常用的技术，分享给大家。
            </div>
            <ul className='action-list'>
              <li className='item'>
                <EyeOutlined />
                <span>100</span>
              </li>
              <li className='item'>
                <LikeOutlined />
                <span>100</span>
              </li>
              <li className='item'>
                <CommentOutlined />
                <span>100</span>
              </li>
            </ul>
          </div>
          <div className='content-image'>
            <LoadingImage src='https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8cb23c1cca34424c99ab8260bd88d482~tplv-k3u1fbpfcp-no-mark:240:240:240:160.awebp?' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem