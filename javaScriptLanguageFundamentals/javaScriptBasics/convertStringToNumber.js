const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(string) {
  let sum = 0;
  let numbers = stringToNumber(string);

  for (let i = 0; i < numbers.length; i++) {
    sum = 10 * sum + numbers[i];
  }

  return sum;
}

function stringToNumber(string) {
  const result = [];

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (character === "+" || character === "-") {
      continue;
    } else {
      result.push(DIGITS[string[i]]);
    }
  }

  return result;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1));
    case "+":
      return stringToInteger(string.slice(1));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321"));
console.log(stringToSignedInteger("-570"));
console.log(stringToSignedInteger("100"));
