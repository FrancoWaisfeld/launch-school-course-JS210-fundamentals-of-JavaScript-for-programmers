function shift(array) {
  const result = array.splice(0, 1).pop();
  return result;
}

function unshift(array, ...args) {
  for (let index = 0; index < args.length; index++) {
    array.splice(index, 0, args[index]);
  }

  return array.length;
}

console.log(shift([1, 2, 3])); // 1
console.log(shift([])); // undefined
console.log(shift([[1, 2, 3], 4, 5])); // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6)); // 5
console.log(unshift([1, 2, 3])); // 3
console.log(unshift([4, 5], [1, 2, 3])); // 3

const testArray = [1, 2, 3];
console.log(shift(testArray)); // 1
console.log(testArray); // [2, 3]
console.log(unshift(testArray, 5)); // 3
console.log(testArray); // [5, 2, 3]
