import * as React from 'react'
import Card from '../Card'
import { CommentOutlined } from '../Icons/CommentOutlined'
import LocaleTime from '../LocaleTime'

const NewComment: React.FC<{ comments: IComment[] }> = ({ comments }) => {

  return (
    <Card
      title='最新评论'
      icon={<CommentOutlined />}
    >
      <ul className='comment-list'>
        {
          comments?.map(comment => (
            <li key={comment.id} className='comment-item'>
              <div className='avatar'>
                <a href={comment.site}>
                  <img src={comment.avatar} alt={comment.name} />
                </a>
              </div>
              <div className='comment-content'>
                <div className='info'>
                  <div className='author'>
                    <a href="/">{comment.name}</a>
                  </div>
                  <LocaleTime date={comment.createdAt!} className='time' />
                </div>
                <p className='body'>{comment.content}</p>
              </div>
            </li>
          ))
        }
      </ul>
    </Card>
  )
}

export default NewComment
