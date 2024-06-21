

function isPalindrom(inputString) {
  if (inputString.length <= 1) return true

  if (inputString[0] === inputString[inputString.length - 1]) {
    return isPalindrom(inputString.substring(1, inputString.length - 1))
  } else {
    return false
  }
}

console.log(isPalindrom("lool"))