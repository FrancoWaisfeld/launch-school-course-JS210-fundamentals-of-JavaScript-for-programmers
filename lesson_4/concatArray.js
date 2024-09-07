function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function concat(array1, array2) {
  let concatArray = [];
  for (let index = 0; index < array1.length + array2.length; index++) {
    if (index < array1.length) {
      concatArray[index] = array1[index];
    } else {
      concatArray[index] = array2[index - array2.length];
    }
  }

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]
