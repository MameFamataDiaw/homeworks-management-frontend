/* eslint-disable @typescript-eslint/no-explicit-any */
export function myDebounce(func: any, delay: number) {
  let debuncerTimer: number | undefined
  return function (...args: any[]) {
    clearTimeout(debuncerTimer)
    debuncerTimer = setTimeout(() => func(...args), delay)
  }
}
