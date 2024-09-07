function centerOf(string) {
  const half = Math.floor(string.length / 2);

  if (string.length % 2 === 0) {
    return string.slice(half - 1, half + 1);
  } else {
    return string[half];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"