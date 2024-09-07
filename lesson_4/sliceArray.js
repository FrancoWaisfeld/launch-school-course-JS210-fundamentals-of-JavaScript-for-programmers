function slice(array, startIndex, endIndex) {
  let sliceArray = [];
  let sliceArrayIndex = 0;

  for (let index = startIndex; index < endIndex; index++) {
    sliceArray[sliceArrayIndex] = array[index];
    sliceArrayIndex += 1;
  }

  return sliceArray;
}

console.log(slice([1, 2, 3, 4, 5], 0, 2)); // [ 1, 2 ]
console.log(slice(["a", "b", "c", "d", "e", "f", "g"], 1, 3)); // [ 'b', 'c' ]
