// function gcd(a, b) {
//   if (a === b) return a;

//   if (a > b) {
//     return gcd(a - b, b);
//   } else {
//     return gcd(a, b - a);
//   }
// }

// console.log(gcd(42, 18));

// Euclid’s Algorithm

//modern elucid algo
function gcd2(a, b) {
  if (b === 0) return a;
  return gcd2(b, a % b);
}

console.log(gcd2(18, 42));
