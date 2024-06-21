const arr = [1, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5]

function firstOCCRecur(arr, findME, currIdx = 0) {
  if (arr.length === currIdx) return -1
  if (arr[currIdx] === findME) return currIdx

  return firstOCCRecur(arr, findME, ++currIdx)
}

console.log(firstOCCRecur(arr, 10))