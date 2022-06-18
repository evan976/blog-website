import * as React from 'react'
import classNames from 'classnames'
import { ToastContainer } from 'react-toastify'
import { SendOutlined } from '../Icons/SendOutlined'
import { CreateCommentWrap } from '../../styles/comment'
import useComment from '../../hooks/useComment'
import 'react-toastify/dist/ReactToastify.css'

interface CreateCommentProps {
  replyComment?: IComment
  refreshComments?: () => void
  setId?: (id: number) => void
  postId?: number
}

const CreateComment: React.FC<CreateCommentProps> = ({
  refreshComments,
  replyComment,
  setId,
  postId,
}) => {

  const {
    nickname,
    email,
    site,
    comment,
    handleCommentChange,
    handleEmailChange,
    handleNicknameChange,
    handleSiteChange,
    handleSubmit,
  } = useComment(refreshComments!, setId, postId)

  return (
    <CreateCommentWrap>
      <form className='comment-form' onSubmit={(e) => {
        handleSubmit(e, replyComment)
      }}>
        <div className='user-info'>
          <div className='field field-name'>
            <label htmlFor='name'>昵称*</label>
            <input
              type='text'
              id='name'
              autoComplete='off'
              value={nickname}
              onChange={handleNicknameChange}
            />
          </div>
          <div className='field field-email'>
            <label htmlFor='email'>邮箱*</label>
            <input
              type='text'
              id='email'
              autoComplete='off'
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className='field field-site'>
            <label htmlFor='site'>网站</label>
            <input
              type='text'
              id='site'
              autoComplete='off'
              value={site}
              onChange={handleSiteChange}
            />
          </div>
        </div>
        <div className='comment-content'>
          <textarea
            id='content'
            placeholder='说点什么吧'
            value={comment}
            onChange={handleCommentChange}
          />
        </div>
        <div className='comment-submit'>
          <button
            type='submit'
            className={classNames('submit-btn', {
              'disabled': !nickname || !email || !comment
            })}
            disabled={!nickname || !email || !comment}
          >
            <span>发布</span>
            <SendOutlined />
          </button>
        </div>
      </form>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        theme='colored'
      />
    </CreateCommentWrap>
  )
}

export default CreateComment
