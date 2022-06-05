import request from '../service'

class TagService {
  findAll() {
    return request<any, ITag[]>({
      url: '/tags',
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new TagService()