

// return n'th fibbonacci no


function nthFibbonacci(n) {
  if (n <= 1) return n


  return nthFibbonacci(n - 1) + nthFibbonacci(n - 2)
}

console.log(nthFibbonacci(3))