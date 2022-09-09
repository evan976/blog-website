type PaginateResponse<T = any> = {
  page: number
  pageSize: number
  total: number
  totalPage: number
  data: T[]
}

type Swiper = {
  id: number
  name: string
  url: string
  link: string
  description: string
  updatedAt: string
  status: number
  createdAt: string
  weight: number
}

type Category = {
  id: number
  name: string
  slug: string
  icon: string
  description: string
  postCount: number
  background: string
  updatedAt: string
  createdAt: string
}

type Tag = {
  id: number
  name: string
  slug: string
  color: string
  icon: string
  postCount: number
  background: string
  updatedAt: string
  createdAt: string
}

type Article = {
  id: number
  articleId: string
  title: string
  thumb: string
  summary: string
  content: string
  tags: Array<Tag>
  category: Category
  status: number
  origin: number
  weight: number
  views: number
  comments: number
  likes: number
  updatedAt: string
  createdAt: string
}

type Comment = {
  id: number
  postId: number
  parentId: number
  name: string
  email: string
  avatar: string
  site: string
  content: string
  url: string
  userAgent: string
  status: number
  weight: number
  replyUserName: string
  replyUserEmail: string
  address: string
  ip: string
  browser: string
  os: string
  updatedAt: string
  createdAt: string
}

type ArticleResponse = PaginateResponse<Article>

type CategoryResponse = PaginateResponse<Category>

type SwiperResponse = PaginateResponse<Swiper>
