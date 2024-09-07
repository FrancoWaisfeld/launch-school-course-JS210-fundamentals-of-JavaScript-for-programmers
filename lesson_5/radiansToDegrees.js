function radiansToDegrees(radians) {
  const HALF_CIRCLE_DEGREES = 180;
  return (radians * HALF_CIRCLE_DEGREES) / Math.PI;
}

function randomInteger(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(radiansToDegrees(Math.PI));

let a = 50.72;
let b = 49.2;
let c = 49.86;
console.log(Math.pow(16, 6));

console.log(Math.floor(a));
console.log(Math.ceil(b));
console.log(Math.round(c));
