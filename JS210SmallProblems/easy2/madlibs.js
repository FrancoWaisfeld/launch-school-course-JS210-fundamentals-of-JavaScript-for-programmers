const readLineSync = require("readline-sync");

let noun = readLineSync.question("Enter a noun: ");
let verb = readLineSync.question("Enter a verb: ");
let adjective = readLineSync.question("Enter a adjective: ");
let adverb = readLineSync.question("Enter a adverb: ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?`);
