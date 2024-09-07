function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  let array1Copy = array1.slice();
  for (let index = 0; index < array2.length; index++) {
    let idx = array1Copy.indexOf(array2[index]);
    if (idx >= 0) {
      array1Copy.splice(idx, 1);
    } else {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual(["a", "b", "c"], ["b", "c", "a"])); // true
console.log(areArraysEqual(["1", 2, 3], [1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1])); // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3])); // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1])); // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2])); // false
console.log(areArraysEqual([1, 1, 1], [1, 1])); // false
console.log(areArraysEqual([1, 1], [1, 1])); // true
console.log(areArraysEqual([1, "1"], ["1", 1])); // true
