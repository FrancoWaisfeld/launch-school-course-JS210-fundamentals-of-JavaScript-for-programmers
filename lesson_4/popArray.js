function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let lastElement = arr[arr.length - 1];
  arr.length -= 1;
  return lastElement;
}

let count = [1, 2, 3];
console.log(pop(count)); // 3
console.log(count); // [ 1, 2 ]
