function pop(array) {
  const lastElement = array[array.length - 1];
  array.splice(array.length - 1);
  return lastElement;
}

function push(array, ...elements) {
  for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
    array[array.length] = elements[elementIndex];
  }

  return array.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1)); // 3
console.log(array1); // [1, 2]
console.log(pop([])); // undefined
console.log(pop([1, 2, ["a", "b", "c"]])); // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6)); // 6
console.log(array2); // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ["a", "b"])); // 3
console.log(push([], 1)); // 1
console.log(push([])); // 0
