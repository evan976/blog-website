import * as React from 'react'
import MdEditor from 'md-editor-rt'
import useDarkMode from 'use-dark-mode'
import { CommentItemWrap } from '../../styles/comment'
import LocaleTime from '../LocaleTime'
import { ReplyOutlined } from '../Icons/ReplyOutlined'
import { filterAddress, filterBrowser } from '../../utils'
import CreateComment from './CreateComment'
import * as mainApi from '../../api'
import { CloseOutlined } from '../Icons/CloseOutlined'
import 'md-editor-rt/lib/style.css'

const COMMENT_EDITOR_ID = 'COMMENT_EDITOR_ID'
const COMMENT_EDITOR_REPLY_ID = 'COMMENT_EDITOR_REPLY_ID'
type Props = {
  comment: IComment
  replyComments: IComment[]
  postId?: number
}

const CommentItem: React.FC<Props> = ({
  comment,
  replyComments: defaultReplyComments = [],
  postId
}) => {

  const [id, setId] = React.useState<number>(0)
  const { value } = useDarkMode(false)
  
  const [replyComments, setReplyComments] = React.useState<IComment[]>(defaultReplyComments)

  const refreshComments = React.useCallback(() => {
    mainApi.commentService.findAll({
      page: 1,
      pageSize: 12,
      status: 1
    }).then((res) => {
      const comments = res.data?.data
      const replyList = comments
        ?.filter(comment => comment.parentId)
        ?.reverse()
      setReplyComments(replyList)
    }
    )
  }, [])

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
                  <MdEditor
                    editorId={COMMENT_EDITOR_ID}
                    modelValue={comment.content!}
                    theme={value ? 'dark' : 'light'}
                    previewTheme='github'
                    previewOnly
                    style={{background: 'inherit'}}
                  />
                </div>
                <div className='action'>
                  <LocaleTime date={comment.createdAt!} />
                  <div className="action-country">
                    {filterAddress(comment.address)}
                  </div>
                  {
                    id === comment.id ? (
                      <div className='reply-action' onClick={() => setId(0)}>
                        <CloseOutlined />
                        <span>取消回复</span>
                      </div>
                    ) : (
                      <div className='reply-action' onClick={() => setId(comment.id!)}>
                        <ReplyOutlined />
                        <span>回复</span>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
        {id === comment.id && (
          <div style={{marginTop: 10}}>
            <CreateComment
              replyComment={comment}
              refreshComments={refreshComments}
              setId={setId}
              postId={postId}
            />
          </div>
        )}
        <div className='reply'>
          {
            replyComments?.map((replyComment, index) => (
              replyComment.parentId === comment.id &&
              (
                <>
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
                    <MdEditor
                      editorId={COMMENT_EDITOR_REPLY_ID}
                      modelValue={replyComment.content!}
                      theme={value ? 'dark' : 'light'}
                      previewTheme='github'
                      previewOnly
                      style={{background: 'inherit'}}
                    />
                    </div>
                    <div className='action'>
                      <LocaleTime date={replyComment.createdAt!} />
                      <div className="action-country">
                        {filterAddress(replyComment.address)}
                      </div>
                      {
                        id === replyComment.id ? (
                          <div className='reply-action' onClick={() => setId(0)}>
                            <CloseOutlined />
                            <span>取消回复</span>
                          </div>
                        ) : (
                          <div className='reply-action' onClick={() => setId(replyComment.id!)}>
                            <ReplyOutlined />
                            <span>回复</span>
                          </div>
                        )
                      }
                    </div>
                    </div>
                  </div>
                  <div style={{marginTop: 10}}>
                    {id === replyComment.id && (
                      <CreateComment
                        replyComment={replyComment}
                        refreshComments={refreshComments}
                        setId={setId}
                        postId={postId}
                      />
                    )}
                  </div>
                </>
              )
              
            ))
          }
        </div>
      </li>
    </CommentItemWrap>
  )
}

export default CommentItem