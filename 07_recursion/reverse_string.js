
const inpString = "helloworld"
// function reverseStringIterative(input) {
//   let ans = ""
//   let length = inpString.length - 1
//   while (length >= 0) {
//     ans += input[length]
//     length--
//   }
//   return ans
// }

// console.log(reverseStringIterative(inpString))  


function reverseStringRecursive(input) {
  if (input.length === 1) return input

  return input[input.length - 1] + reverseStringRecursive(input.substring(0, input.length - 1))
}

console.log(reverseStringRecursive(inpString))  