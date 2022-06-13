import request from '../service'

export const SWIPER_API_PATH = '/wallpapers'

class SwiperService {
  findAll(data: Record<string, any>) {
    return request<Record<string, any>, PaginateResult<ISwiper>>({
      url: SWIPER_API_PATH,
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new SwiperService()