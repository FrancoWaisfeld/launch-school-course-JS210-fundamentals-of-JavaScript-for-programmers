const readLineSync = require("readline-sync");

let bill = Number(readLineSync.question("What is the bill? "));
let tipPercentage = Number(
  readLineSync.question("What is the tip percentage? ")
);
let tip = bill * (tipPercentage / 100);
let total = tip + bill;

console.log(`The tip is $${tip.toFixed(2)}.`);
console.log(`The total is $${total.toFixed(2)}.`);
