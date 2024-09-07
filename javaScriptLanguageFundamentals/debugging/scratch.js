function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function makeMultiplier(firstNumber) {
  return function (secondNumber) {
    return multiply(firstNumber, secondNumber);
  };
}

let multiplyBy10 = makeMultiplier(10);

console.log(multiplyBy10(5));
