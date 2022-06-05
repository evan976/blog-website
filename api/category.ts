import request from '../service'

class CategoryService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<ICategory>>({
      url: '/categories',
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CategoryService()