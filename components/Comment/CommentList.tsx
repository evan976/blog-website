import * as React from 'react'
import Empty from '../Empty'
import CommentItem from './CommentItem'

const CommentList: React.FC<{ comments: IComment[], postId?: number }> = ({ comments, postId }) => {

  const replyList = comments
    ?.filter(comment => comment.parentId)
    ?.reverse()

  return (
    <div>
      {
        comments.length > 0 ? (
          comments.filter(comment => !comment.parentId)?.map((comment, index) => (
            <CommentItem
              key={index}
              comment={comment}
              replyComments={replyList}
              postId={postId}
            />
          ))
        ) : (
          <Empty description='期待你的捷足先登' />
        )
      }
    </div>
  )
}

export default CommentList