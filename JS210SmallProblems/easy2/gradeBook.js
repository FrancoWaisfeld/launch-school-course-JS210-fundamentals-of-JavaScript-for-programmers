function average(arr) {
  let sum = 0;

  arr.forEach((element) => {
    sum += element;
  });

  return sum / arr.length;
}

function getGrade(grade1, grade2, grade3) {
  let averageGrade = average([grade1, grade2, grade3]);

  if (averageGrade >= 90) {
    return "A";
  } else if (averageGrade >= 80) {
    return "B";
  } else if (averageGrade >= 70) {
    return "C";
  } else if (averageGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
