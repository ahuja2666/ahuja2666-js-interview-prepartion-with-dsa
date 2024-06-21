
function gcd(a, b) {
  if (a === b) return a

  if (a < b) {
    return gcd(a, b - a)
  } else {
    return gcd(a - b, b)
  }
}

console.log(gcd(42, "bc"))