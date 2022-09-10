import * as React from 'react'
import CommentItem from './item'
import fetch from 'service/fetch'

interface CommentListProps {
  comments: Array<CommentWithChildren>
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {


  const [page, setPage] = React.useState<number>(2)
  const [list, setList] = React.useState<Array<CommentWithChildren>>(comments)

  const fetchMoreComments = React.useCallback((page: number) => {
    fetch.get<CommentReponse>('/comments', {
      params: { page, pageSize: 10, status: 1 }
    })
      .then(result => {
        setPage(++page)
        setList((comment) => [...comment, ...result.data])
      })
  }, [])


  return (
    <div className="w-full h-full flex flex-col">
      {list?.map((comment, index) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
      <button
        className="px-8 py-2 bg-bg-200 rounded-sm self-start mx-auto hover:bg-bg-300 duration-150"
        onClick={() => fetchMoreComments(page)}
      >
        加载更多 👇
      </button>
    </div>
  )
}

export default CommentList