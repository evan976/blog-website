import * as React from 'react'
import Card from '../Card'
import { CommentOutlined } from '../Icons/CommentOutlined'

const NewComment: React.FC = () => {
  return (
    <Card
      title='最新评论'
      icon={<CommentOutlined />}
    >
      <ul className='comment-list'>
        <li className='comment-item'>
          <div className='avatar'>
            <a href="/">
              <img src="https://avatars2.githubusercontent.com/u/204569?s=460&v=4" alt="avatar" />
            </a>
          </div>
          <div className='comment-content'>
            <div className='info'>
              <div className='author'>
                <a href="/">wujihua</a>
              </div>
              <div className='time'>一年前</div>
            </div>
            <p className='body'>真的好</p>
          </div>
        </li>
        <li className='comment-item'>
          <div className='avatar'>
            <a href="/">
              <img src="https://avatars2.githubusercontent.com/u/204569?s=460&v=4" alt="avatar" />
            </a>
          </div>
          <div className='comment-content'>
            <div className='info'>
              <div className='author'>
                <a href="/">wujihua</a>
              </div>
              <div className='time'>一年前</div>
            </div>
            <p className='body'>真的好</p>
          </div>
        </li>
        <li className='comment-item'>
          <div className='avatar'>
            <a href="/">
              <img src="https://avatars2.githubusercontent.com/u/204569?s=460&v=4" alt="avatar" />
            </a>
          </div>
          <div className='comment-content'>
            <div className='info'>
              <div className='author'>
                <a href="/">wujihua</a>
              </div>
              <div className='time'>一年前</div>
            </div>
            <p className='body'>真的好</p>
          </div>
        </li>
      </ul>
    </Card>
  )
}

export default NewComment
