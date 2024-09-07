function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

function splice(array, startIndex, removeCount) {
  let removedValues = [];

  for (let index = startIndex; index < array.length; index++) {
    if (index < startIndex + removeCount) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + removeCount];
  }

  array.length = startIndex + 1;

  return removedValues;
}

let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5)); // [ 3, 4, 5, 6, 7 ]
console.log(count); // [ 1, 2, 8 ]
