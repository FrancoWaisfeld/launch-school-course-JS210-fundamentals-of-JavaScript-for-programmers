function isPalindrome(string) {
  let reversedString = string.split("").reverse().join("");

  return string === reversedString;
}

function isRealPalindrome(string) {
  let alphabeticString = alphabeticLetters(string);
  return isPalindrome(alphabeticString.toLowerCase());
}

function alphabeticLetters(string) {
  return string
    .split("")
    .filter((letter) => {
      return !!letter.match(/[a-zA-Z]/);
    })
    .join("");
}

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter))
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter))
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false
