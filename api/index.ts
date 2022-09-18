import fetch from './fetch'
import {
  Article,
  ArticleResponse,
  Category,
  CategoryResponse,
  CommentReponse,
  IComment,
  Tag,
} from 'types'

export const ARTICLE_API_PATH = 'articles'
export const COMMENT_API_PATH = 'comments'
export const CATEGORY_API_PATH = 'categories'
export const TAG_API_PATH = 'tags'

export type QueryParams = {
  page?: number
  page_size?: number
  status?: number
  sort?: number
  keyword?: string
}

export const fetchArticleList = (params?: QueryParams) => {
  return fetch.get<ArticleResponse>(ARTICLE_API_PATH, { params })
}

export const fetchHotArticleList = () => {
  return fetch.get<Array<Article>>(`${ARTICLE_API_PATH}/hot`)
}

export const fetchArticleDetail = (articleId: string) => {
  return fetch.get<Article>(`${ARTICLE_API_PATH}/detail/${articleId}`)
}

export const fetchArticleListBySlug = (slug: string, type: 'category' | 'tag') => {
  return fetch.get<ArticleResponse>(`${ARTICLE_API_PATH}/${type}/slug/${slug}`)
}

export const fetchCommentList = (params?: QueryParams) => {
  return fetch.get<CommentReponse>(COMMENT_API_PATH, { params })
}

export const fetchArticleComments = (articleId: number, params?: QueryParams) => {
  return fetch.get<CommentReponse>(`${COMMENT_API_PATH}/article/${articleId}`, { params })
}

export const addComment = (data: Partial<IComment>) => {
  return fetch.post(COMMENT_API_PATH, data)
}

export const fetchTagList = () => {
  return fetch.get<Array<Tag>>(TAG_API_PATH)
}

export const fetchTagBySlug = (slug: string) => {
  return fetch.get<Tag>(`${TAG_API_PATH}/slug/${slug}`)
}

export const fetchCategoryList = () => {
  return fetch.get<CategoryResponse>(CATEGORY_API_PATH)
}

export const fetchCategoryBySlug = (slug: string) => {
  return fetch.get<Category>(`${CATEGORY_API_PATH}/slug/${slug}`)
}
