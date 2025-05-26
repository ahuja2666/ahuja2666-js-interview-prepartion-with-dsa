function remove_adj_duplicate(inputString) {
  if (inputString.length <= 1) return inputString;

  if (inputString[0] === inputString[1]) {
    return remove_adj_duplicate(inputString.substring(1));
  } else {
    return inputString[0] + remove_adj_duplicate(inputString.substring(1));
  }
}

// console.log(remove_adj_duplicate("helllooworlddxxxxxxxxxcd"));

function removeAdjDup(inputString) {
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
      result += inputString[i];
    }
  }
  return result;
}

// console.log(removeAdjDup("helllooworlddxxxxxxxxxcd"));

function removeAdjDupAll(inputString) {
  let result = "";
  let dup = false;
  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1) {
      if (!dup) {
        result += inputString[i];
      }
      continue;
    }
    if (inputString[i] === inputString[i + 1]) {
      dup = true;
    } else {
      if (!dup) {
        result += inputString[i];
      }
      dup = false;
    }
  }
  return result;
}

console.log(removeAdjDupAll("helloowoorrrer"));
