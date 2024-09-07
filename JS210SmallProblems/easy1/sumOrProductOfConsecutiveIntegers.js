const readLineSync = require("readline-sync");

function sumOfIntegers(num) {
  let sum = 1;

  for (let count = 2; count <= num; count++) {
    sum += count;
  }

  return sum;
}

function sumOfProducts(num) {
  let sum = 1;

  for (let count = 2; count <= num; count++) {
    sum *= count;
  }

  return sum;
}

let int = parseInt(
  readLineSync.question("Enter an integer greater than 0: "),
  10
);
let operation = readLineSync.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

if (operation === "s") {
  console.log(
    `The sum of the integers between 1 and ${int} is ${sumOfIntegers(int)}.`
  );
} else if (operation === "p") {
  console.log(
    `The product of the integers between 1 and ${int} is ${sumOfProducts(int)}.`
  );
} else {
  console.log("Unknown operation.");
}
