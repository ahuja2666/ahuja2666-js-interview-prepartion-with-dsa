

function powOfNo(n, pow) {
  if (pow === 0) return 1

  return n * powOfNo(n, --pow)
}

console.log(powOfNo(2, 4))