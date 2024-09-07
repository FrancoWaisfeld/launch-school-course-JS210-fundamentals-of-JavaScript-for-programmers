function repeater(string) {
  let repeatedString = '';

  string.split('').forEach((letter) => {
    repeatedString += (letter + letter);
  });

  return repeatedString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""