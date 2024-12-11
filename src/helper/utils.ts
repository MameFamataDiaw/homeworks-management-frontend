/* eslint-disable @typescript-eslint/no-explicit-any */
export function myDebounce(func: any, delay: number) {
  let debuncerTimer: number | undefined
  return function (...args: any[]) {
    clearTimeout(debuncerTimer)
    debuncerTimer = setTimeout(() => func(...args), delay)
  }
}

export function openModal(element: string, devoirId: number) {

  return new Promise<number>((resolve) => {

    const modal = document.getElementById(element) as HTMLElement

    if (modal) {
      setTimeout(function () {
        modal.classList.add('fade', 'show')
        modal.style.display = 'block'
        modal.classList.add('in')
      }, 500)

      document.body.classList.add('modal-open')

      const modalBackdrop = document.createElement('div')
      modalBackdrop.className = 'modal-backdrop fade show'
      document.body.appendChild(modalBackdrop)
    }
    resolve(devoirId)
  })
}

export function closeModal(element: string) {
  const modal = document.getElementById(element) as HTMLElement
  const modalBackdrop = document.querySelector('.modal-backdrop')

  if (modal) {
    modal.classList.remove('in', 'show', 'fade')
    modal.style.display = ''

    document.body.classList.remove('modal-open')

    if (modalBackdrop) {
      document.body.removeChild(modalBackdrop)
    }
  }
}
