import * as React from 'react'
import { SendOutlined } from '../Icons/SendOutlined'
import { CreateCommentWrap } from '../../styles/comment'

const CreateComment: React.FC = () => {
  return (
    <CreateCommentWrap>
      <form className='comment-form'>
        <div className='user-info'>
          <div className='field field-name'>
            <label htmlFor='name'>昵称*</label>
            <input type='text' id='name' autoComplete='off' />
          </div>
          <div className='field field-email'>
            <label htmlFor='email'>邮箱*</label>
            <input type='text' id='email' autoComplete='off' />
          </div>
          <div className='field field-site'>
            <label htmlFor='site'>网站</label>
            <input type='text' id='site' autoComplete='off' />
          </div>
        </div>
        <div className='comment-content'>
          <textarea id='content' placeholder='说点什么吧' />
        </div>
        <div className='comment-submit'>
          <button type='submit'>
            <span>发布</span>
            <SendOutlined />
          </button>
        </div>
      </form>
    </CreateCommentWrap>
  )
}

export default CreateComment
