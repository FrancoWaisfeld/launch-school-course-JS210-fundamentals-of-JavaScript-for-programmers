function mirroredArray(array) {
  return array.concat(array.slice(0).reverse());
}

console.log(mirroredArray([1, 2, 3]));
