function century(year) {
  let centuryString = String(Math.ceil(year / 100));
  let lastTwoNumbers = centuryString.substring(centuryString.length - 2);
  let lastNumber = centuryString[centuryString.length - 1];

  if (lastTwoNumbers >= 11 && lastTwoNumbers <= 20) {
    return centuryString + "th";
  } else if (lastNumber === "1") {
    return centuryString + "st";
  } else if (lastNumber === "2") {
    return centuryString + "nd";
  } else if (lastNumber === "3") {
    return centuryString + "rd";
  } else {
    return centuryString + "th";
  }
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"

// 1st  11th   21st
// 2nd  12th   22nd
// 3rd  13th   23rd
// 4th  14th   24th
// 5th  15th   25th
// 6th  16th   26th
// 7th  17th   27th
// 8th  18th   28th
// 9th  19th   29th
// 10th 20th   30th
