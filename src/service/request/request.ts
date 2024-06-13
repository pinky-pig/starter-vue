import axios, { type AxiosRequestHeaders } from 'axios'

/**
 * 创建请求
 * @param axiosConfig - axios配置，后续可继续优化
 */
export function createRequest(axiosConfig: any) {
  const instance = axios.create(axiosConfig)
  instance.interceptors.request.use(
    (config) => {
      ;(config.headers as AxiosRequestHeaders).SERVICE_TOKEN = 'web_dp'
      ;(config.headers as AxiosRequestHeaders).USER_TOKEN =
        sessionStorage.getItem('token') || 'app'
      ;(config.headers as AxiosRequestHeaders).zzzd = '5'

      if (config.method === 'post' && config.url === '/fjxx-model/insertFjxx')
        (config.headers as AxiosRequestHeaders)['Content-Type'] =
          'application/x-www-form-urlencoded;charset=utf-8'

      return config
    },
    (error) => {
      return Promise.reject(error)
    },
  )
  instance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      return Promise.reject(error?.response?.data)
    },
  )
  return instance
}
