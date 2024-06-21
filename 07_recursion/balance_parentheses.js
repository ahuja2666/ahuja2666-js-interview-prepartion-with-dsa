


function balanceparenthesis(arr, startIdx = 0, count = 0) {
  if (startIdx >= arr.length) {
    return (count == 0)
  }
  if (count < 0) return false

  if (arr[startIdx] == "(") {
    return balanceparenthesis(arr, ++startIdx, ++count)
  } else if (arr[startIdx] == ")") {
    return balanceparenthesis(arr, ++startIdx, --count)
  } else {
    return false
  }

}

console.log(balanceparenthesis(["(", "(", ")", ")", "("]))


// multiple { [ ()]} do using stack approch