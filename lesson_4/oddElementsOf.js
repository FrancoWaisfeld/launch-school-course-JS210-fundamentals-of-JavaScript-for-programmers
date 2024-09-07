function oddElementsOf(arr) {
  let oddIndexArray = [];

  for (let index = 1; index < arr.length; index += 2) {
    oddIndexArray.push(arr[index]);
  }

  return oddIndexArray;
}

let digits = [4, 8, 15, 16, 23, 42];

console.log(oddElementsOf(digits)); // returns [8, 16, 42]
