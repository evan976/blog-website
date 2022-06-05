import Request from './request/index'
import type { RequestConfig } from './request/types'

export interface CustomRequestConfig<T> extends RequestConfig {
  data?: T
}

export interface Response<T> {
  code: number
  message: string
  data: T
}

const request = new Request({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    requestInterceptor: (config) => config,
    responseInterceptor: (response) => response,
    responseInterceptorCatch: (error) => {
      switch (error.response.data.code) {
        case 400:
          // notification.error({
          //   message: '请求错误',
          //   description: error.response.data.message
          // })
          console.log(process.env.API_URL)
          console.log(error.response.data.message)
          break
        default:
          // notification.error({
          //   message: error.response.data.message
          // })
          console.log(error.response.data.message)
          break
      }
    }
  }
})

const customRequest = <D = any, T = any>(config: CustomRequestConfig<D>) => {
  const { method = 'GET' } = config
  if (method.toUpperCase() === 'GET') {
    config.params = config.data
  }
  return request.request<Response<T>>(config)
}

// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return request.cancelRequest(url)
}

// 取消全部请求
export const cancelAllRequest = () => {
  return request.cancelAllRequest()
}

export default customRequest
