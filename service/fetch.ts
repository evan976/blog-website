import axios, { AxiosInstance, Method as AxiosMethod } from 'axios'

const fetch = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
})

fetch.interceptors.response.use(
  (response) => {
    if (response.headers['content-type'].includes('json')) {
      if (response.data.code !== 0) {
        return Promise.reject(response.data)
      }
    }

    return response.data.data
  },
  (error) => {
    const errorJSON = error.toJSON()
    const errorInfo = {
      ...errorJSON,
      code: error.response?.status || errorJSON.status,
      message: error.response?.data?.error || error.response?.statusText || errorJSON.message
    }

    const serverErrorInfo = {
      status: errorInfo.code,
      method: errorJSON.config.method,
      baseURL: errorJSON.config.baseURL,
      url: errorJSON.config.url,
      params: errorJSON.config.params,
      data: errorJSON.config.data
    }

    console.debug('Error', serverErrorInfo)

    return Promise.reject(errorInfo)
  }
)

type Method = Exclude<
  Lowercase<AxiosMethod
>, 'unlink' | 'purge' | 'link' | 'head' | 'options'> | 'request'

const overwriteMethod = (method: Method) => {
  return <T = any>(
    ...args: Parameters<AxiosInstance[typeof method]>
  ): Promise<T> => {
    return (fetch[method] as any)(...args)
  }
}

export default {
  $: fetch,
  request: overwriteMethod('request'),
  get: overwriteMethod('get'),
  post: overwriteMethod('post'),
  put: overwriteMethod('put'),
  patch: overwriteMethod('patch'),
  delete: overwriteMethod('delete')
}
