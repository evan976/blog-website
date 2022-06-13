import request from '../service'

export const COMMENT_API_PATH = '/comments'

class CommentService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<IComment>>({
      url: COMMENT_API_PATH,
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  create(data: Partial<IComment>) {
    return request<Partial<IComment>, IComment>({
      url: COMMENT_API_PATH,
      method: 'POST',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new CommentService()
