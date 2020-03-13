import { isPlainObject } from './utils'

export function transformRequest() {
  if(isPlainObject(val)) {
    return JSON.stringify(val)
  }
}