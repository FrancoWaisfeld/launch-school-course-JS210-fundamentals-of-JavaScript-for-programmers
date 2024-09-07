function reverseArray(arr) {
  let reveresedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reveresedArr.push(arr[i]);
  }

  return reveresedArr;
}

const TEST = [1, 2, 3, 4];

const REVERSE_TEST = reverseArray(TEST);

console.log(REVERSE_TEST);
