function union(array1, array2) {
  let uniqueUnion = [];

  array1.concat(array2).forEach((element) => {
    if (!uniqueUnion.includes(element)) {
      uniqueUnion.push(element);
    }
  });

  return uniqueUnion;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
