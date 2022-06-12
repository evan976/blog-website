import * as React from 'react'
import type { NextPage } from 'next'
import { Helmet } from 'react-helmet-async'
import InfiniteScroll from 'react-infinite-scroller'
import { CommentContainer } from '../styles/comment'
import CreateComment from '../components/Comment/CreateComment'
import { GlobalContext } from '../context/globalContext'
import CommentList from '../components/Comment/CommentList'
import * as mainApi from '../api'

const pageSize = 12

interface CommentProps {
  total: number
  comments: IComment[]
}

const Comment: NextPage<CommentProps> = ({
  comments: defaultComments = [],
  total = 0
}) => {

  const { setting } = React.useContext(GlobalContext)
  const [page, setPage] = React.useState<number>(1)
  const [comments, setComments] = React.useState<IComment[]>(defaultComments)

  const refreshComments = React.useCallback(() => {
    mainApi.commentService.findAll({
      page: 1,
      pageSize,
      status: 1
    }).then((res) => {
      setComments(res.data.data as IComment[])
    })
  }, [])

  const getComments = React.useCallback((page: number) => {
    mainApi.commentService.findAll({
      page,
      pageSize,
      status: 1
    }).then((res) => {
      setPage(page)
      setComments((comment) => [...comment, ...res.data?.data as IArticle[]])
    })
  }, [])

  return (
    <CommentContainer>
      <Helmet>
        <title>{setting.title + ' - ' + '留言'}</title>
      </Helmet>
      <div className='header'>
        <h1 className='title'>留言版</h1>
        <p className='summary'>「 在下有一愚见，不知当讲不当讲 」</p>
      </div>
      <div className='main-comtent'>
        <div className='add-comment'>
          <CreateComment refreshComments={refreshComments} />
        </div>
          <InfiniteScroll
            pageStart={1}
            loadMore={getComments}
            hasMore={page * pageSize < total}
            loader={
              <div className={'loading'} key={0}>
                loading ...
              </div>
            }
          >
            <div className='comment-list'>
              <CommentList comments={comments} />
            </div>
          </InfiniteScroll>
      </div>
    </CommentContainer>
  )
}

Comment.getInitialProps = async () => {
  const result = await mainApi.commentService.findAll({
    page: 1,
    pageSize,
    status: 1
  })

  return {
    total: result.data.total as number,
    comments: result.data.data as IComment[]
  }
}

export default Comment
