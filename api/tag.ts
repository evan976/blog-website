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

  findById(id: string) {
    return request<string, ITag>({
      url: `${TAG_API_PATH}/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findBySlug(slug: string) {
    return request<string, ITag>({
      url: `${TAG_API_PATH}/slug/${slug}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new TagService()