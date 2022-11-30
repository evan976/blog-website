import { fetchArticleComments, fetchArticleDetail } from 'api'
import Color from 'color'
import ArticleMeta from 'components/article/meta'
import BlurImage from 'components/common/blur-image'
import CommentList from 'components/comment/list'
import Publish from 'components/comment/publish'
import DateTime from 'components/common/date'
import Divider from 'components/common/divider'
import Layout from 'components/layout'
import { META } from 'config/app.config'
import type { NextPageWithLayout } from 'pages/_app'
import markdownToHTML from 'plugins/markdown'
import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import type { Article, CommentReponse } from 'types'

interface Props {
  article: Article
  comments: CommentReponse
}

const ArticlePage: NextPageWithLayout<Props> = ({ article, comments }) => {
  const html = markdownToHTML(article.content)

  return (
    <>
      <Helmet>
        <title>{`${article?.title} - ${META.title}`}</title>
      </Helmet>
      <div className="w-full h-full mt-3 sm:mt-0 bg-bg-100 rounded p-3">
        <article>
          <ArticleMeta article={article} />
          <h1 className="text-center font-bold text-font-100 text-xl my-2">{article.title}</h1>
          <div className="mt-3 text-center">
            <DateTime date={article.created_at * 1000} from={false} />
            <span>&nbsp;&nbsp;·&nbsp;&nbsp;阅读 {article.views}</span>
          </div>
          <div className="w-full h-[154px] sm:h-[210px] p-2 my-3 rounded-sm border border-bg-200">
            <BlurImage
              src={article.thumb}
              alt={article.title}
              className="rounded-sm"
            />
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
          <Divider type="dashed" />
          <div>
            <span>分类：</span>
            <a
              className="underline underline-offset-2 text-font-200 hover:text-blue duration-200"
              href={`/category/${article.category?.slug}`}
            >
              {article.category?.name}
            </a>
          </div>
          <div className="mt-2">
            <span>标签：</span>
            {article.tags?.map(tag => (
              <a
                href={`/tag/${tag.slug}`}
                className="px-[10px] py-1 text-xs rounded-sm mr-2"
                key={tag.id}
                style={{
                  color: tag.color,
                  background: Color(tag.color).alpha(0.2).lighten(0.2).hsl().string(),
                }}
              >{tag.name}</a>
            ))}
          </div>
          <div className="mt-2 truncate">
            <span>永久链接：</span>
            <a
              href={`https://evanone.site/article/${article.article_id}`}
              className="underline underline-offset-2 text-font-200 hover:text-blue duration-200"
              target="_blank"
              rel="noreferrer"
            >
              https://evanone.site/article/{article.article_id}
            </a>
          </div>
          <a
            className="mt-2 inline-block text-font-200 underline-offset-2 hover:text-blue hover:underline duration-200"
            href="https://creativecommons.org/licenses/by-nc/3.0/cn/deed.zh"
            target="_blank"
            rel="noreferrer"
          >
            遵循CC 4.0 BY-SA版权协议，严禁非法转载
          </a>
        </article>
      </div>
      <div className="my-3 w-full h-full rounded bg-bg-100 p-3">
        <Publish articleId={article?.id} />
        <Divider />
        <CommentList
          comments={comments?.data}
          total={comments?.total}
          totalPage={comments?.total_page}
        />
      </div>
    </>
  )
}

ArticlePage.getLayout = page => <Layout>{page}</Layout>

ArticlePage.getInitialProps = async ({ query }) => {
  const { articleId } = query
  const article = await fetchArticleDetail(articleId as string)
  const comments = await fetchArticleComments(article.id)

  return {
    article,
    comments,
  }
}

export default ArticlePage
