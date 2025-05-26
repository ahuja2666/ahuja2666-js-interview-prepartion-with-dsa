// return n'th fibbonacci no
// fibbonacci always strats from 0 1
// in this soluion nth value meanse n is the index

function nthFibbonacci(n) {
  if (n <= 1) return n;

  return nthFibbonacci(n - 1) + nthFibbonacci(n - 2);
}

console.log(nthFibbonacci(5));
console.log(nthFibbonacci(6));
