import * as React from 'react'
import { commentService } from '../../api'
import useAsyncLoading from '../../hooks/useAsyncLoading'
import { CommentOutlined } from '../Icons/CommentOutlined'
import LocaleTime from '../LocaleTime'
import LatestSkeleton from './CommentSkeleton'
import Card from '../Card'
import Empty from '../Empty'

const LatestComment: React.FC = () => {
  const [commentList, setCommentList] = React.useState<IComment[]>([])
  const [fetchLatestComment, loading] = useAsyncLoading(commentService.findAll, 150, true)

  React.useEffect(() => {
    fetchLatestComment({ page: 1, pageSize: 10 })
      .then(res => {
        setCommentList(res.data.data)
      })
  }
  , [])

  return (
    <Card
      title='最新评论'
      icon={<CommentOutlined />}
    >
      {
        loading ? (
          <>
            {
              Array.from({ length: 3 }).map((_, index) => (
                <LatestSkeleton key={index} />
              ))
            }
          </>
        ) : (
          <ul className='comment-list'>
            {
              commentList?.length > 0 ? (
                commentList?.map(comment => (
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
              ) : (<Empty />)
            }
          </ul>
        )
      }
    </Card>
  )
}

export default LatestComment
