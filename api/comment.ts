import request from '../service'

class CommentService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<IComment>>({
      url: '/comments',
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CommentService()