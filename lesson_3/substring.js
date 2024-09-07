function substr(string, start, length) {
  if (start < 0) {
    start = string.length + start;
  }

  let result = "";
  for (let counter = 0; counter < length; counter++) {
    let index = start + counter;

    if (string[index] === undefined) {
      break;
    }

    result += string[index];
  }

  return result;
}

let string = "hello world";

console.log(substr(string, 2, 4)); // "llo "
console.log(substr(string, -3, 2)); // "rl"
console.log(substr(string, 8, 20)); // "rld"
console.log(substr(string, 0, -20)); // ""
console.log(substr(string, 0, 0)); // ""
