


function remove_adj_duplicate(inputString) {
  if (inputString.length <= 1) return inputString

  if (inputString[0] === inputString[1]) {
    return remove_adj_duplicate(inputString.substring(1))
  } else {
    return inputString[0] + remove_adj_duplicate(inputString.substring(1))
  }

}

console.log(remove_adj_duplicate("helllooworlddxxxxxxxxxcd"))