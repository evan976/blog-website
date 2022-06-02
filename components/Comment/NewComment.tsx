import * as React from 'react'
import Card from '../Card'
import { CommentOutlined } from '../Icons/CommentOutlined'

const NewComment: React.FC = () => {
  return (
    <Card
      title='最新评论'
      icon={<CommentOutlined />}
    >
      hello world
    </Card>
  )
}

export default NewComment
