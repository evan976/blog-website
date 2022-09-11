import React from 'react'
import { Helmet } from 'react-helmet-async'
import DateTime from 'components/common/date'
import Layout from 'components/layout'
import type { NextPageWithLayout } from 'pages/_app'
import markdownToHTML from 'plugins/markdown'
import fetch from 'service/fetch'
import type { Article } from 'types'

type Props = {
  article: Article
}

const ArticlePage: NextPageWithLayout<Props> = ({ article }) => {


  const html = markdownToHTML(article.content)

  return (
    <div className="w-full h-full bg-bg-100 rounded p-3">
      {/* <Helmet>
        <title>{'evanone.site' + ' - ' + article?.title}</title>
      </Helmet> */}
      <article>
        <h1 className="text-center font-bold text-font-100 text-xl my-2">{article.title}</h1>
        <div className="mt-3 text-center">
          <DateTime date={article.createdAt!} from={false} />
          <span>&nbsp;&nbsp;·&nbsp;&nbsp;阅读 {article.views}</span>
        </div>
        <div className="w-full h-[210px] mt-3 p-2 rounded-sm border border-bg-200">
          <img className="w-full h-full rounded-sm" src={article.thumb} alt={article.title} />
        </div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  )
}

ArticlePage.getLayout = (page) => (
  <Layout mobile={false}>
    {page}
  </Layout>
)

ArticlePage.getInitialProps = async ({ query }) => {
  const { articleId } = query
  const article = await fetch.get<Article>(`/posts/${articleId}`)

  return {
    article
  }
}

export default ArticlePage
