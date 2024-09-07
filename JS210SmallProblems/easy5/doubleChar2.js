const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',' m', 'n', 'p', 'q',
   'r', 's', 't', 'v', 'w', 'x', 'z']

function doubleConsonants(string) {
  let repeatedString = '';

  string.split('').forEach((letter) => {
    if (CONSONANTS.includes(letter.toLowerCase())) {
      repeatedString += (letter + letter);
    } else {
      repeatedString += letter;
    }
  });

  return repeatedString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""