function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

function checkGoldbach(expectedSum) {
  for (let firstNumber = 2; firstNumber < expectedSum; firstNumber += 1) {
    let secondNumber = expectedSum - firstNumber;

    if (firstNumber > secondNumber) {
      break;
    } else if (isPrime(firstNumber) && isPrime(secondNumber)) {
      console.log(`${firstNumber} ${secondNumber}`);
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2
console.log("----------");
checkGoldbach(12);
// logs: 5 7
console.log("----------");
checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
