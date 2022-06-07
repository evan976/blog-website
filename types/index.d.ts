interface BaseInterface {
  id?: number
  createdAt?: string
  updatedAt?: string
}

interface GlobalContext {
  setting: ISetting
  recommendArticles: IArticle[]
  categories: ICategory[]
  comments: IComment[]
}

interface ITag extends BaseInterface {
  name?: string
  slug?: string
  color?: string
  icon?: string
  postCount?: number
  background?: string
}

interface ICategory extends BaseInterface {
  name?: string
  slug?: string
  icon?: string
  description?: string
  postCount?: number
  background?: string
}

interface ISetting extends BaseInterface {
  title?: string
  subTitle?: string
  summary?: string
  copyright?: string
  keywords?: string
  logo?: string
  favicon?: string
  siteUrl?: string
}

interface IArticle extends BaseInterface {
  title?: string
  thumb?: string
  summary?: string
  content?: string
  tags?: ITag[]
  category?: ICategory
  status?: number
  origin?: number
  weight?: number
  views?: number
  comments?: number
  likes?: number
}

interface IComment extends BaseInterface {
  postId?: number
  parentId?: number
  name?: string
  email?: string
  avatar?: string
  site?: string
  content?: string
  url?: string
  userAgent?: string
  status?: number
  weight?: number
  replyUserName?: string
  replyUserEmail?: string
  address?: string
  ip?: string
  browser?: string
  os?: string
}

interface ISwiper extends BaseInterface {
  name?: string
  description?: string
  url?: string
  link?: string
  status?: number
  weight?: number
}

interface PaginateResult<T> {
  data?: T[]
  total?: number
  page?: number
  pageSize?: number
  totalPage?: number
}