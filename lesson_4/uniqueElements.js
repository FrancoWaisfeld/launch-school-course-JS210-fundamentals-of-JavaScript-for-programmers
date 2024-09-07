function uniqueElements(arr) {
  let uniqueArray = [];

  for (let index = 0; index < arr.length; index++) {
    if (!uniqueArray.includes(arr[index])) {
      uniqueArray.push(arr[index]);
    }
  }

  return uniqueArray;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4])); // returns [1, 2, 4, 3, 5]
