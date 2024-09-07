const readLineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

let inputType = readLineSync.question(
  "Would you like to use meters or feet?\n"
);
let length = Number(
  readLineSync.question("Enter the length of the room in meters:\n")
);
let width = Number(
  readLineSync.question("Enter the width of the room in meters:\n")
);

if (inputType === "feet") {
  let squareFeetArea = length * width;
  let squareMetersArea = squareFeetArea / SQMETERS_TO_SQFEET;
  console.log(
    `The area of the room is ${squareFeetArea.toFixed(
      2
    )} square feet (${squareMetersArea.toFixed(2)} square meters)`
  );
} else if ((inputType = "meters")) {
  let squareMetersArea = length * width;
  let squareFeetArea = squareMetersArea * SQMETERS_TO_SQFEET;
  console.log(
    `The area of the room is ${squareMetersArea.toFixed(
      2
    )} square meters (${squareFeetArea.toFixed(2)} square feet)`
  );
}
