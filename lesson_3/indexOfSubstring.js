function indexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = 0; indexFirst <= limit; indexFirst += 1) {
    let matchCount = 0;

    for (
      let indexSecond = 0;
      indexSecond < secondString.length;
      indexSecond += 1
    ) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

function lastIndexOf(firstString, secondString) {
  let limit = firstString.length - secondString.length;

  for (let indexFirst = limit; indexFirst >= 0; indexFirst -= 1) {
    let matchCount = 0;

    for (
      let indexSecond = 0;
      indexSecond < secondString.length;
      indexSecond += 1
    ) {
      if (firstString[indexFirst + indexSecond] === secondString[indexSecond]) {
        matchCount += 1;
      } else {
        break;
      }
    }

    if (matchCount === secondString.length) {
      return indexFirst;
    }
  }

  return -1;
}

console.log(indexOf("Some strings", "s"));
console.log(indexOf("Blue Whale", "Whale"));
console.log(indexOf("Blue Whale", "Blute"));
console.log(indexOf("Blue Whale", "leB"));

console.log(lastIndexOf("Some strings", "s")); // 11
console.log(lastIndexOf("Blue Whale, Killer Whale", "Whale")); // 19
console.log(lastIndexOf("Blue Whale, Killer Whale", "all")); // -1
