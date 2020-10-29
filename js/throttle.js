// Throttle: the original function can be called at most once per specified period.
function Throttle(fn, wait) {
  let valid = true
  return () => {
    if(!valid) return false
    valid = false
    setTimeout(() => {
      fn(),
      valid = true
    }, wait)
  }
}

