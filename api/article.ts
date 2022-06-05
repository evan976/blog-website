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
}

export default new ArticleService()