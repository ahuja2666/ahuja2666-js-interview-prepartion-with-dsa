function length_without_length(inputString) {
  if (inputString === "") return 0;

  return 1 + length_without_length(inputString.substring(1));
}

console.log(length_without_length("asdfg abc"));
