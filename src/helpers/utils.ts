const toString = Object.prototype.toString;

export function isDate(val: any): boolean {
  return toString.call(val) === '[object Date]'
}

export function isObject(val: any): boolean {
  return val!==null && !Array.isArray(val) && typeof val === 'object'
}
