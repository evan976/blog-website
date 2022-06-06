import * as React from 'react'
import { NextPage } from 'next'
import MdEditor from 'md-editor-rt'
import useDarkMode from 'use-dark-mode'
import { ArticleContainer } from '../../styles/article'
import * as mainApi from '../../api'
import { Helmet } from 'react-helmet-async'
import { GlobalContext } from '../../context/globalContext'
import LocaleTime from '../../components/LocaleTime'
import LoadingImage from '../../components/LoadingImage'
import 'md-editor-rt/lib/style.css'

interface ArticleProps {
  article: IArticle
}

const editorId = 'editor'

const Article: NextPage<ArticleProps> = ({ article }) => {

  const { setting } = React.useContext(GlobalContext)
  const { value } = useDarkMode(false)

  const [state, setState] = React.useState({
    text: article.content,
    scrollElement: null,
  })

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setState({
        ...state,
        // @ts-ignore
        scrollElement: window.document.documentElement as HTMLElement,
      })
    }
  }, [])

  return (
    <ArticleContainer>
      <Helmet>
        <title>{article.title + ' | ' + setting.title}</title>
      </Helmet>
      <div className='article-detail'>
        <article className='article'>
          <meta
            itemProp='url'
            content={`${setting.siteUrl}/article/${article.id}`}
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
              modelValue={state.text!}
              theme={value ? 'dark' : 'light'}
              previewTheme='smart-blue'
              previewOnly
            />
          </div>
        </article>
      </div>
      <div className='article-toc'>
        <MdEditor.MdCatalog
          editorId={editorId}
          scrollElement={state.scrollElement!}
        />
      </div>
    </ArticleContainer>
  )
}

Article.getInitialProps = async ({ query }) => {
  const { id } = query
  const result = await mainApi.articleService.findById(id as string)
  return {
    article: result.data
  }
}

export default Article