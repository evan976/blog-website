import request from '../service'

class SettingService {
  find() {
    return request<any, ISetting>({
      url: '/config/option',
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new SettingService()