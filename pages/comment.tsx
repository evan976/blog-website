import * as React from 'react'
import type { NextPageWithLayout } from './_app'
import CommentList from 'components/comment/list'
import Publish from 'components/comment/publish'
import Layout from 'components/layout'
import fetch from 'service/fetch'
import { API_PATHS, CommentReponse, IComment } from 'types'


type Props = {
  total: number
  totalPage: number
  comments: Array<IComment>
}

const CommentPage: NextPageWithLayout<Props> = ({ comments, total, totalPage }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={'/comment.jpeg'}
          alt={'about'}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col">
          <i className="iconfont mx-auto text-white !text-7xl">&#xe6aa;</i>
          <p className="text-center text-white text-sm mt-4">
            有朋自远方来，不亦乐乎
          </p>
        </div>
      </div>
      <div className="w-full h-full mt-3 rounded bg-bg-100 p-3">
        <Publish />
        <div className="dividing my-3" />
        <CommentList
          comments={comments}
          total={total}
          totalPage={totalPage}
        />
      </div>
    </div>
  )
}

CommentPage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

CommentPage.getInitialProps = async () => {
  const result = await fetch.get<CommentReponse>(API_PATHS.COMMENTS, { params: { status: 1 } })
  return {
    total: result.total,
    totalPage: result.totalPage,
    comments: result.data
  }
}


export default CommentPage
