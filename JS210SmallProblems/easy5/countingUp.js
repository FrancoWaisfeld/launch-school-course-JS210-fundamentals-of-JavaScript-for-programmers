function sequence(number) {
  let sequenceArray = [];

  for(let count = 1; count <= number; count++) {
    sequenceArray.push(count);
  }

  return sequenceArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]