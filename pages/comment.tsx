import * as React from 'react'
import type { NextPageWithLayout } from './_app'
import formatComments from 'components/comment/format'
import CommentList from 'components/comment/list'
import Publish from 'components/comment/publish'
import Layout from 'components/layout'
import fetch from 'service/fetch'

type Props = {
  total: number
  page: number
  comments: Array<IComment>
}

const CommentPage: NextPageWithLayout<Props> = ({ comments, total, page }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[210px] rounded overflow-hidden relative">
        <img
          className="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src={'/about.jpeg'}
          alt={'about'}
        />
        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-center text-white text-lg antialiased">在下有一愚见，不知当讲不当讲</h1>
        </div>
      </div>
      <div className="w-full h-full mt-3 rounded bg-bg-100 p-3">
        <Publish />
        <div className="dividing my-3"></div>
        <CommentList
          comments={formatComments(comments || [])}
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
  const result = await fetch.get<CommentReponse>('/comments', {
    params: { status: 1, }
  })

  return {
    total: result.total,
    page: result.page,
    comments: result.data
  }
}


export default CommentPage
