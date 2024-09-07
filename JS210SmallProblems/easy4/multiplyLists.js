function multiplyLists(array1, array2) {
  let products = [];

  for (let i = 0; i < array1.length; i++) {
    products.push(array1[i] * array2[i]);
  }

  return products;
}

console.log(multiplyLists([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
