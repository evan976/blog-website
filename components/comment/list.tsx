import * as React from 'react'
import CommentItem from './item'
import { fetchCommentList } from 'api'
import Empty from 'components/common/empty'
import { IComment } from 'types'

interface CommentListProps {
  comments: Array<IComment>
  total: number
  totalPage: number
}

const CommentList: React.FC<CommentListProps> = ({ comments, totalPage, total }) => {

  const [page, setPage] = React.useState(1)
  const [list, setList] = React.useState<Array<IComment>>(comments)

  const hasMore = React.useMemo(() => {
    return totalPage > 1 && page !== totalPage
  }, [page, totalPage])

  const restComments = React.useMemo(() => {
    return total - list.length
  }, [list.length, total])

  const fetchMoreComments = React.useCallback(() => {
    fetchCommentList({ page: page + 1, status: 1 })
      .then(result => {
        setPage(page => page + 1)
        setList((comment) => [...comment, ...result.data])
      })
  }, [page])

  React.useEffect(() => {
    setList(comments)
  }, [comments])


  return (
    <div className="w-full h-full flex flex-col">
      {list.length ? (
        list?.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))
      ) : (
        <Empty description="期待你的捷足先登 😎" />
      )}
      {hasMore && (
        <button
          className="px-8 py-2 bg-bg-200 rounded-sm self-start mx-auto hover:bg-bg-300 duration-150"
          onClick={fetchMoreComments}
        >
          查看更多评论（剩余 {restComments} 条）👇
        </button>
      )}
    </div>
  )
}

export default CommentList