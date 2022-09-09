import React from 'react'
import Layout from 'components/layout'
import type { NextPageWithLayout } from 'pages/_app'

const SearchPage: NextPageWithLayout = () => {
  return <div>SearchPage</div>
}

SearchPage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

export default SearchPage
