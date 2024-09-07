function missing(sortedArray) {
  let lastInteger = sortedArray[sortedArray.length - 1];
  let firstInteger = sortedArray[0];
  let missingIntegers = [];

  for (let count = firstInteger; count <= lastInteger; count++) {
    if (sortedArray.includes(count)) {
      continue;
    }

    missingIntegers.push(count);
  }

  return missingIntegers;
}

console.log(missing([-3, -2, 1, 5])); // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4])); // []
console.log(missing([1, 5])); // [2, 3, 4]
console.log(missing([6])); // []
