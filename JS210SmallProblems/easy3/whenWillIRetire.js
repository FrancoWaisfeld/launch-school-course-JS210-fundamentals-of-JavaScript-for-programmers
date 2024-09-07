const readLineSync = require("readline-sync");

let age = Number(readLineSync.question("What is your age? "));
let retireAge = Number(readLineSync.question("What age will you retire? "));
let yearsUntilRetired = retireAge - age;
let date = new Date();
let year = date.getFullYear();
let retiredYear = year + yearsUntilRetired;

console.log(`It's ${year}. You will retire in ${retiredYear}.`);
console.log(`You have only ${yearsUntilRetired} years of work left.`);
