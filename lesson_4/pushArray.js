function push(arr, element) {
  arr[arr.length] = element;
  return arr.length;
}

let count = [0, 1, 2];
console.log(push(count, 3)); // 4
console.log(count); // [ 0, 1, 2, 3 ]
