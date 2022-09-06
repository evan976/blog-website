export const isAllTrue = <T = boolean>(arr: T[], fn = (p: T): boolean => Boolean(p)) =>
  arr.every(fn)
