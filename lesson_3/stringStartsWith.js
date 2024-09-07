/*
rules:
- implement a function that determines whether a string begins with another string
- if it does, return true. Otherwise return false
- you may use square brackets [] and length property
- you may not use any other properties or methods from javaScripts buitl in String class

implicit rules:
- empty strings return true
- the search string must be shorter than the original string

algorithm:
if the searchString is empty return true
if the searchString is longer than the string return false

start a loop that iterates from index 0 to one less than the length of string
  - if the character at the current index of the searchString and string are not equal
    - return false

return true
*/

function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index++) {
    if (string[index] !== searchString[index]) {
      return false;
    }
  }

  return true;
}

let str = "We put comprehension and mastery above all else";
console.log(startsWith(str, "We"));
console.log(startsWith(str, "We put")); // true
console.log(startsWith(str, "")); // true
console.log(startsWith(str, "put")); // false

let longerString = "We put comprehension and mastery above all else!";
console.log(startsWith(str, longerString)); // false
