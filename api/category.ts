import request from '../service'

export const CATEGORY_API_PATH = '/categories'

class CategoryService {
  findAll(data: Record<string, string | number>) {
    return request<Record<string, string | number>, PaginateResult<ICategory>>({
      url: CATEGORY_API_PATH,
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CategoryService()