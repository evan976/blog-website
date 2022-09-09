import React, { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from 'components/layout'

const CommentPage: NextPageWithLayout = () => {
  return <div>CommentPage</div>
}

CommentPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout mobile={false}>
      {page}
    </Layout>
  )
}

export default CommentPage
