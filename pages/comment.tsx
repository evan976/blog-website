import * as React from 'react'
import type { NextPage } from 'next'
import { CommentContainer } from '../styles/comment'
import CreateComment from '../components/Comment/CreateComment'
import * as mainApi from '../api'
import CommentList from '../components/Comment/CommentList'

const pageSize = 12

interface CommentProps {
  total: number
  comments: IComment[]
}

const Comment: NextPage<CommentProps> = ({ comments, total }) => {

  console.log('comments', comments)

  return (
    <CommentContainer>
      <div className='header'>
        <h1 className='title'>留言版</h1>
        <p className='summary'>「 在下有一愚见，不知当讲不当讲 」</p>
      </div>
      <div className='main-comtent'>
        <div className='add-comment'>
          <CreateComment />
        </div>
        <div className='comment-list'>
          <CommentList comments={comments} />
        </div>
      </div>
    </CommentContainer>
  )
}

Comment.getInitialProps = async () => {
  const result = await mainApi.commentService.findAll({
    page: 1,
    pageSize
  })

  return {
    total: result.data.total as number,
    comments: result.data.data as IComment[]
  }
}

export default Comment
