
export function debounce(fn) {
  let nextTask = null
  let pending = false

  function execute(fn) {
    pending = true
    fn().then(() => {
      pending = false
      if (nextTask != null) {
        const toCall = nextTask
        nextTask = null
        execute(toCall)
      }
    })
  }

  return (...args) => {
    if (pending) {
      nextTask = () => fn(...args)
    } else {
      execute(() => fn(...args))
    }
  }
}
