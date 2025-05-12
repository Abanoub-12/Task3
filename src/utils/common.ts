/* eslint-disable @typescript-eslint/no-explicit-any */
type Func<T extends any[], R> = (...a: T) => R

export default function compose(...funcs: Func<any, any>[]) {
  if (funcs.length === 0) {
    return <T>(arg: T) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any) =>
        a(b(...args))
  )
}

export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
  callback: T,
  timeout: number
): ((...args: Parameters<T>) => void) => {
  let timer: ReturnType<typeof setTimeout>

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, timeout)
  }
}
