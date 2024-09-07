function interLeave(array1, array2) {
  let interLeavedArray = [];

  for (let index = 0; index < array1.length; index++) {
    interLeavedArray.push(array1[index], array2[index]);
  }

  return interLeavedArray;
}

console.log(interLeave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
