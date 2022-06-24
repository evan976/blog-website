import * as React from 'react'
import { NextPage } from 'next'
import Color from 'color'
import MdEditor from 'md-editor-rt'
import useDarkMode from 'use-dark-mode'
import { ArticleContainer } from '../../styles/article'
import * as mainApi from '../../api'
import { Helmet } from 'react-helmet-async'
import { GlobalContext } from '../../context/globalContext'
import LocaleTime from '../../components/LocaleTime'
import LoadingImage from '../../components/LoadingImage'
import 'md-editor-rt/lib/style.css'
import { Main } from '../../styles/components'
import CommentList from '../../components/Comment/CommentList'
import CreateComment from '../../components/Comment/CreateComment'
import InfiniteScroll from 'react-infinite-scroller'
import Approve from '../../components/Approve'

interface ArticleProps {
  total: number
  article: IArticle
  comments: IComment[]
}

const editorId = 'MARKDOWN_EDITOR'
const pageSize = 12

const Article: NextPage<ArticleProps> = ({
  total,
  article: defaultArticle = {},
  comments: defaultComment = []
}) => {

  const { setting } = React.useContext(GlobalContext)
  const { value } = useDarkMode(false)

  const [page, setPage] = React.useState<number>(1)
  const [article, setArticle] = React.useState<IArticle>(defaultArticle as IArticle)
  const [comments, setComments] = React.useState<IComment[]>(defaultComment)

  React.useEffect(() => {
    setComments(defaultComment)
  }, [defaultComment])

  const getComments = React.useCallback((page: number) => {
    mainApi.commentService.findAll({
      page,
      pageSize,
      status: 1
    }).then((res) => {
      setPage(page)
      setComments((comments) => [...comments, ...res.data?.data])
    })
  }, [])

  const refreshComments = React.useCallback(() => {
    mainApi.commentService.findAll({
      page: 1,
      pageSize,
      status: 1,
      postId: article.id,
    }).then((res) => {
      setComments(res.data.data)
    })
  }, [])

  return (
    <Main>
      <ArticleContainer>
        <Helmet>
          <title>{setting.title + ' - ' + article.title}</title>
        </Helmet>
        <div className='left-content'>
          <div className='article-detail'>
            <article className='article'>
              <meta
                itemProp='url'
                content={`${setting.siteUrl}/article/${article.articleId}`}
              />
              <meta itemProp='headline' content={article.title} />
              <meta itemProp='keywords' content={article.tags?.map(tag => tag.name).join(' ')} />
              <meta itemProp='datePublished' content={article.createdAt} />
              <meta itemProp='dateModified' content={article.updatedAt} />
              <meta itemProp='description' content={article.summary} />
              <meta itemProp='image' content={article.thumb} />
              <h1 className='article-title'>{article.title}</h1>
              <div className='article-meta'>
                <LocaleTime date={article.createdAt!} form={false} />
                <span>&nbsp;&nbsp;·&nbsp;&nbsp;阅读 {article.views}</span>
              </div>
              {article.thumb && (
                <div className='article-image'>
                  <LoadingImage src={article.thumb} alt={article.title} />
                </div>
              )}
              <div className='article-content'>
                <MdEditor
                  editorId={editorId}
                  modelValue={article.content!}
                  theme={value ? 'dark' : 'light'}
                  previewTheme='smart-blue'
                  previewOnly
                />
              </div>
              <div className='approve'>
                <Approve
                  id={article.id}
                  likes={article.likes}
                  refresh={(likes) => {
                    setArticle((article) => {
                      return {
                        ...article,
                        likes
                      }
                    })
                  }}
                />
              </div>
              <div className='article-categorize'>
                <div className='category'>
                  <span>分类：</span>
                  <span className='item'>
                    {article.category.name}
                  </span>
                </div>
                <div className='tags'>
                  <span>标签：</span>
                  {
                    article.tags?.map(tag => (
                      <span
                        className='item'
                        key={tag.id}
                        style={{
                          color: tag.color,
                          background: Color(tag.color).alpha(0.2).lighten(0.2).hsl().string()
                        }}
                      >
                        {tag.name}
                      </span>
                    ))
                  }
                </div>
              </div>
            </article>
          </div>
          <div className='article-comment'>
            <div className='add-comment'>
              <h1 className='add-comment-title'>评论</h1>
              <CreateComment
                postId={article.id}
                refreshComments={refreshComments}
              />
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
              <CommentList comments={comments} postId={article.id} />
            </InfiniteScroll>
          </div>
        </div>
        <div className='article-toc'>
          <div className='affix'>
            <MdEditor.MdCatalog editorId={editorId} />
          </div>
        </div>
      </ArticleContainer>
    </Main>
  )
}

Article.getInitialProps = async ({ query }) => {
  const { id } = query
  const result = await mainApi.articleService.findById(id as string)
  const comment = await mainApi.commentService.findAll({
    postId: result.data.id,
    page: 1,
    pageSize,
    status: 1
  })
  return {
    total: comment.data.total,
    article: result.data,
    comments: comment.data.data,
  }
}

export default Article