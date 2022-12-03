export interface Paginate<T> {
  data: Array<T>
  page: number
  total: number
  page_size: number
  total_page: number
}

export interface Base {
  id: number
  created_at: number
  updated_at: number
}

export interface Category extends Base {
  name: string
  slug: string
  icon: string
  description: string
  article_count: number
  background: string
}

export interface Tag extends Base {
  name: string
  slug: string
  color: string
  icon: string
  article_count: number
  background: string
}

export interface Article extends Base {
  id: number
  article_id: string
  title: string
  thumb: string
  summary: string
  content: string
  tags: Array<Tag>
  category: Category
  status: number
  origin: number
  views: number
  comments: number
  likes: number
}

export interface IComment extends Base {
  id: number
  article_id: number
  parent_id: number
  name: string
  email: string
  avatar: string
  site: string
  content: string
  status: number
  replys: Array<IComment>
  address: string
  ip: string
  browser: string
  os: string
  reply_user_name: string
  reply_user_email: string
  reply_user_site: string
}

interface Day {
  count: number
}

interface Contribution {
  week: number
  days: Array<Day>
}

export interface Contributions {
  username: string
  year: string
  min: number
  max: number
  median: number
  p80: number
  p90: number
  contributions: Array<Contribution>
}

export type ArticleResponse = Paginate<Article>

export type CategoryResponse = Paginate<Category>

export type CommentReponse = Paginate<IComment>
