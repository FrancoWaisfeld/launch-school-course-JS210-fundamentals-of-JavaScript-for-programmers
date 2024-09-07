function unshift(array, value) {
  for (let index = array.length; index > 0; index -= 1) {
    array[index] = array[index - 1];
  }

  array[0] = value;
  return array.length;
}

let arr = [1, 2, 3];
console.log(unshift(arr, 0));
console.log(arr);
