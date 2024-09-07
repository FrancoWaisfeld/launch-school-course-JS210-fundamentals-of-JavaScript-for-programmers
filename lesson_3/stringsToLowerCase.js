/*
explicit rules:
- write a function that takes a string as an argument and returns the same string
  wwith all letters lowercased
- you can use String.fromCharCode and String.charCodeAt
- you may use [] and length property
- you may not se any other properties or methods from String class

implicit rules:
- non alphabetic characters are unnaffected

algorithm:
- 
*/

function toLowerCase(string) {
  const ASCII_FOR_A = 65;
  const ASCII_FOR_Z = 90;
  const CONVERSION_OFFSET = 32;
  let lowerCaseString = "";

  for (let index = 0; index < string.length; index++) {
    let asciiNumeric = string[index].charCodeAt(0);

    if (asciiNumeric >= ASCII_FOR_A && asciiNumeric <= ASCII_FOR_Z) {
      lowerCaseString += String.fromCharCode(
        (asciiNumeric += CONVERSION_OFFSET)
      );
    } else {
      lowerCaseString += string[index];
    }
  }

  return lowerCaseString;
}

console.log(toLowerCase("ALPHABET")); // "alphabet"
console.log(toLowerCase("123")); // "123"
console.log(toLowerCase("abcDEF")); // "abcdef"
