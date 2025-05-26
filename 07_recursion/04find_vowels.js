function isVowel(char) {
  return ["a", "e", "i", "o", "u"].includes(char.toLowerCase());
}

function countVowels(string) {
  if (string.length === 1) {
    console.log(`base case string - ${string}`);
    return Number(isVowel(string));
  }
  console.log(`current: ${string[string.length - 1]}`);
  return (
    countVowels(string.substring(0, string.length - 1)) +
    Number(isVowel(string[string.length - 1]))
  );
}

console.log(countVowels("Hello"));
