export const isBrowser = typeof window !== 'undefined'

export const isAllTrue = <T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)) =>
  arr.every(fn)

export const on = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
) => {
  if (obj && obj.addEventListener)
    obj.addEventListener(...(args as Parameters<HTMLElement['addEventListener']>))
}

export const off = <T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['removeEventListener']> | [string, Function | null, ...any]
) => {
  if (obj && obj.removeEventListener)
    obj.removeEventListener(...(args as Parameters<HTMLElement['removeEventListener']>))
}
