function firstNOf(arr, count) {
  return arr.slice(0, count);
}

function lastNOf(arr, count) {
  let start = arr.length - count;

  if (count > arr.length) {
    start = 0;
  }

  return arr.slice(start);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3)); // returns [4, 8, 15]

console.log(lastNOf(digits, 3)); // returns [16, 23, 42]

console.log(lastNOf(digits, 9)); // returns [16, 23, 42]
