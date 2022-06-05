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
}

export default new ArticleService()