type BaseType = {
  id: number
  createdAt: string
  updatedAt: string
}


type ITag = BaseType & {
  name: string
  slug: string
  color: string
  icon: string
  postCount: number
  background: string
}

type ICategory = BaseType & {
  name: string
  slug: string
  icon: string
  description: string
  postCount: number
  background: string
}

type ISetting = BaseType & {
  title: string
  subTitle: string
  summary: string
  description: string
  copyright: string
  keywords: string[]
  logo: string
  favicon: string
  siteUrl: string
  icp: string
  icpUrl: string
}

type IArticle = BaseType & {
  title: string
  thumb: string
  summary: string
  content: string
  tags: ITag[]
  category: ICategory
  status: number
  origin: number
  weight: number
  views: number
  comments: number
  likes: number
}

type IComment = BaseType & {
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
}

type ISwiper = BaseType & {
  name: string
  description: string
  url: string
  link: string
  status: number
  weight: number
}

type GlobalContext = {
  setting: ISetting
  categories: ICategory[]
}

type PaginateResult<T> = {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPage: number
}
