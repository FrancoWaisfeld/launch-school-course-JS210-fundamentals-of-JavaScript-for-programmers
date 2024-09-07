function repeatedCharacters(word) {
  let characterCount = {};

  word
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (letter in characterCount) {
        characterCount[letter] += 1;
      } else {
        characterCount[letter] = 1;
      }
    });

  for (let letter in characterCount) {
    if (characterCount[letter] === 1) {
      delete characterCount[letter];
    }
  }

  return characterCount;
}

console.log(repeatedCharacters("Programming")); // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters("Combination")); // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters("Pet")); // {}
console.log(repeatedCharacters("Paper")); // { p: 2 }
console.log(repeatedCharacters("Baseless")); // { s: 3, e: 2 }
