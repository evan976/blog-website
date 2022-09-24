import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import type { NextPageWithLayout } from './_app'
import { fetchCommentList } from 'api'
import CommentList from 'components/comment/list'
import Publish from 'components/comment/publish'
import Divider from 'components/common/divider'
import Lazyload from 'components/common/lazyload'
import Layout from 'components/layout'
import { META } from 'config/app.config'
import { IComment } from 'types'


type Props = {
  total: number
  totalPage: number
  comments: Array<IComment>
}

const CommentPage: NextPageWithLayout<Props> = ({ comments, total, totalPage }) => {
  return (
    <div className="w-full h-full mb-3 sm:mb-0">
      <Helmet>
        <title>{'广开言路' + ' - ' + META.title}</title>
      </Helmet>
      <div className="w-full h-[168px] sm:h-[210px] mt-3 sm:mt-0 rounded overflow-hidden relative">
        <Lazyload
          imageClassName="duration-200 w-full h-full scale-[1.02] hover:scale-100"
          src="/images/comment.jpeg"
          alt="comment"
        />
        <div className="absolute z-[100] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col">
          <i className="iconfont mx-auto text-white !text-7xl">&#xe6aa;</i>
          <p className="text-center text-white text-sm mt-4">
            有朋自远方来，不亦乐乎
          </p>
        </div>
      </div>
      <div className="w-full h-full mt-3 rounded bg-bg-100 p-3">
        <Publish />
        <Divider />
        <CommentList
          comments={comments}
          total={total}
          totalPage={totalPage}
        />
      </div>
    </div>
  )
}

CommentPage.getLayout = (page) => <Layout>{page}</Layout>

CommentPage.getInitialProps = async () => {
  const result = await fetchCommentList({ status: 1 })
  return {
    total: result.total,
    totalPage: result.total_page,
    comments: result.data
  }
}


export default CommentPage
