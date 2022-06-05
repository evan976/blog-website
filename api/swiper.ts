import request from '../service'

class SwiperService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<ISwiper>>({
      url: '/wallpapers',
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new SwiperService()