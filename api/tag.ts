import request from '../service'

export const TAG_API_PATH = '/tags'

class TagService {
  findAll() {
    return request<any, ITag[]>({
      url: TAG_API_PATH,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new TagService()