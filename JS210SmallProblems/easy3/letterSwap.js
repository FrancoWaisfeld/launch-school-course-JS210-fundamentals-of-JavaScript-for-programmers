function swap(string) {
  return string
    .split(" ")
    .map((word) => {
      let letters = word.split("");
      let firstLetter = letters.splice(0, 1);
      let lastLetter = letters.splice(-1, 1);
      let swappedWord =
        lastLetter.toString() + letters.join("") + firstLetter.toString();
      return swappedWord;
    })
    .join(" ");
}

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
