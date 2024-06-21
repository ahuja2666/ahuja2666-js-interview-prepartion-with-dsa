
const arr = [1, 5, 6, 7, 3, 2, 4, 6, 0, 3, 2, 2]
function occurnce_in_array(arr, key, idx = 0) {
  if (idx >= arr.length) return 0

  return (arr[idx] == key ? 1 : 0) + occurnce_in_array(arr, key, ++idx)

}

console.log(occurnce_in_array(arr, 67))