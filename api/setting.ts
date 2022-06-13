import request from '../service'

export const CONFIG_API_PATH = '/config'

class SettingService {
  find() {
    return request<any, ISetting>({
      url: `${CONFIG_API_PATH}/option`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new SettingService()