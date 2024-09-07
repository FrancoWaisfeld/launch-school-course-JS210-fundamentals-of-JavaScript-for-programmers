function join(array, seperator) {
  let joinedString = "";

  for (let index = 0; index < array.length - 1; index++) {
    joinedString += String(array[index]) + seperator;
  }

  joinedString += array[array.length - 1];

  return joinedString;
}

console.log(join(["bri", "tru", "wha"], "ck ")); // 'brick truck wha'
console.log(join([1, 2, 3], " and ")); // '1 and 2 and 3'
