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
