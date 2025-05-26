



function remove_spaces_and_tab(inputString) {
  if (inputString.length === 0) return ""

  const firstChar = inputString[0]
  if (firstChar === " ") return remove_spaces_and_tab(inputString.slice(1))

  return firstChar + remove_spaces_and_tab(inputString.slice(1))
}

console.log(remove_spaces_and_tab("helloowiw  h"))