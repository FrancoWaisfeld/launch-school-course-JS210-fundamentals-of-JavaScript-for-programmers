const readlineSync = require("readline-sync");

let word = readlineSync.question("Please enter a phrase: ");
let noWhitespaceWord = word.replace(/\s/, "");
let noWhitespaceWordLength = noWhitespaceWord.length;

console.log(noWhitespaceWord);

console.log(`There are ${noWhitespaceWordLength} characters in "${word}".`);
