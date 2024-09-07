function average(numbers) {
  let sum = 0;

  numbers.forEach((number) => {
    sum += number;
  });

  return Math.floor(sum / numbers.length);
}

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40
