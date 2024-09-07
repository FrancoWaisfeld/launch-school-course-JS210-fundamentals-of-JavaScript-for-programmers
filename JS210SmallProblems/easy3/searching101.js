const readLineSync = require("readline-sync");

let numbers = [];

while (numbers.length < 5) {
  numbers.push(
    Number(readLineSync.question(`Enter the ${numbers.length + 1} number: `))
  );
}

let searchNumber = Number(readLineSync.question("Enter the last number: "));

let appearsOrDoesNot;

if (numbers.includes(searchNumber)) {
  appearsOrDoesNot = "appears";
} else {
  appearsOrDoesNot = "does not";
}

console.log(
  `The number ${searchNumber} ${appearsOrDoesNot} in [${numbers.join(", ")}]`
);
