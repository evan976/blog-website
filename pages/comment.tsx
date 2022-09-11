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
          src={'/about.jpeg'}
          alt={'about'}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-center text-white text-lg antialiased">望你的见解一针见血</h1>
        </div>
      </div>
      <div className="w-full h-full mt-3 rounded bg-bg-100 p-3">
        <Publish />
        <div className="dividing my-3"></div>
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
  const result = await fetch.get<CommentReponse>(API_PATHS.COMMENTS)
  return {
    total: result.total,
    totalPage: result.totalPage,
    comments: result.data
  }
}


export default CommentPage
