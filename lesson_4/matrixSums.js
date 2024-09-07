function matrixSums(arr) {
  let sums = [];

  for (let index1 = 0; index1 < arr.length; index1++) {
    let sum = 0;
    for (let index2 = 0; index2 < arr[index1].length; index2++) {
      sum += arr[index1][index2];
    }

    sums.push(sum);
  }

  return sums;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));
