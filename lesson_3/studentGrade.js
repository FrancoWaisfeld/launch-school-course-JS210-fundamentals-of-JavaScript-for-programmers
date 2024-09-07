const readLineSync = require("readline-sync");

function average(numbers) {
  let total = 0;

  numbers.forEach((number) => {
    total += number;
  });

  return total / numbers.length;
}

function getGrades() {
  let getMoreGrades = true;
  let scores = [];

  do {
    scores.push(Number(readLineSync.question("Enter a score: ")));
    getMoreGrades = readLineSync
      .question("Do you want to enter another score? (y or n)")
      .includes("y");
  } while (getMoreGrades);

  return scores;
}

function calculateLetterGrade(averageScore) {
  if (averageScore >= 90) {
    return "A";
  } else if (averageScore >= 70) {
    return "B";
  } else if (averageScore >= 50) {
    return "C";
  } else {
    return "F";
  }
}

let scores = getGrades();
let averageScore = average(scores);
let letterGrade = calculateLetterGrade(averageScore);

console.log(
  `Based on the average of your scores your letter grade is ${letterGrade}.`
);
