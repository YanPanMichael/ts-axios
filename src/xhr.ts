import { AxiosRequestConfig } from './types/index'

export default function xhr(config: AxiosRequestConfig): void {
  const { method = 'get', url, data = null } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true) //true 异步， false 同步
  request.send(data)
}
