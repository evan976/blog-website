import request from '../service'

class ArticleService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<IArticle>>({
      url: '/posts',
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findById(id: string) {
    return request<string, IArticle>({
      url: `/posts/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findByCategoryId(id: string) {
    return request<string, PaginateResult<IArticle>>({
      url: `/posts/category/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findByTagId(id: string) {
    return request<string, PaginateResult<IArticle>>({
      url: `/posts/tag/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ArticleService()