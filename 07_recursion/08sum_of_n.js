
function sumOfn(n) {
  if (n === 1) return n

  return n + sumOfn(--n)
}


console.log(sumOfn(3))