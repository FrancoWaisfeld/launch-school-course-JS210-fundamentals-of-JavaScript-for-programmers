function removeNonLetters(string) {
  return string
    .split("")
    .filter((letter) => {
      return !!letter.match(/[a-zA-Z]/);
    })
    .join("");
}

function wordSizes(words) {
  let wordCounts = {};

  words.split(" ").forEach((word) => {
    let wordLength = removeNonLetters(word).length;
    if (wordCounts[wordLength] === undefined) {
      wordCounts[wordLength] = 1;
    } else {
      wordCounts[wordLength] += 1;
    }
  });

  return wordCounts;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}
