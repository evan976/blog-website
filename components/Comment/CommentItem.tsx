import * as React from 'react'
import { CommentItemWrap } from '../../styles/comment'
import LocaleTime from '../LocaleTime'
import { ReplyOutlined } from '../Icons/ReplyOutlined'
import { filterBrowser } from '../../utils'

const CommentItem: React.FC<{ comment: IComment, replyComments: IComment[] }> = ({
  comment,
  replyComments
}) => {

  return (
    <CommentItemWrap>
      <li className='item'>
        {
          !comment.parentId && (
            <div className='landlord-content'>
              <div className='avatar'>
                <img
                  src={comment.avatar!}
                  alt='avatar'
                />
              </div>
              <div className='content'>
                <div className='base-info'>
                  <div className='info-item nickname'>
                    {comment.name}
                  </div>
                  <div className='info-item system'>
                    {comment.os}
                  </div>
                  <div className='info-item browser'>
                    {filterBrowser(comment.browser)}
                  </div>
                </div>
                <div className='comment-content'>
                  {comment.content}
                </div>
                <div className='action'>
                  <LocaleTime date={comment.createdAt!} />
                  <div className="action-country">
                  IP 属地 · {comment.address || '未知'}
                  </div>
                  <div className='reply-action'>
                    <ReplyOutlined />
                    <span>回复</span>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        <div className='reply'>
          {
            replyComments?.map((replyComment, index) => (
              replyComment.parentId === comment.id &&
              (
                <div className='reply-content' key={index}>
                  <div className='avatar'>
                    <img
                      src={replyComment.avatar}
                      alt='avatar'
                    />
                  </div>
                  <div className='content'>
                  <div className='base-info'>
                    <div className='info-item nickname'>
                      {replyComment.name} @ {replyComment.replyUserName}
                    </div>
                    <div className='info-item system'>
                      {replyComment.os}
                    </div>
                    <div className='info-item browser'>
                      {filterBrowser(replyComment.browser)}
                    </div>
                  </div>
                  <div className='comment-content'>
                    {replyComment.content}
                  </div>
                  <div className='action'>
                    <LocaleTime date={replyComment.createdAt!} />
                    <div className="action-country">
                      IP 属地 · {replyComment.address || '未知'}
                    </div>
                    <div className='reply-action'>
                      <ReplyOutlined />
                      <span>回复</span>
                    </div>
                  </div>
                </div>
              </div>
              )
            ))
          }
        </div>
      </li>
    </CommentItemWrap>
  )
}

export default CommentItem