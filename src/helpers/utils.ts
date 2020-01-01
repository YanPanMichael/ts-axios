const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
  return val!==null && !Array.isArray(val) && typeof val === 'object'
}

export function isFunction(val: any): val is Function {
  return typeof val === 'function'
}