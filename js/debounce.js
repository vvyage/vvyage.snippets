// Debounce: the original function be called after the caller stops calling the decorated function after a specified period.
function Debounce(fn, wait) {
  let timer = null
  return () => {
    if(timer) {
      clearTimeout(timer)
      timer = setTimeout(fn, wait)
    }else{
      timer = setTimeout(fn, wait)
    }
  }
}

