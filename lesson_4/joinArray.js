function joinArray(arr) {
  let result = "";

  for (let index = 0; index < arr.length; index++) {
    result += String(arr[index]);
  }

  return result;
}

console.log(joinArray([1, "a", 4, 1, "c"]));
