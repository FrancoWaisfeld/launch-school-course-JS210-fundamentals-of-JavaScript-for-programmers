function reverse(input) {
  let reversed = [];

  for (let index = input.length - 1; index >= 0; index--) {
    reversed.push(input[index]);
  }

  if (Array.isArray(input)) {
    return reversed;
  } else {
    return reversed.join('');
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]