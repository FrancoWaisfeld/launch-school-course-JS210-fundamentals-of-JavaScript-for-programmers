const MILISECONDS_PER_MINUTES = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date(2000, 1, 1, 0, 0);
  const afterMidnight = new Date(
    midnight.getTime() + deltaMinutes * MILISECONDS_PER_MINUTES
  );
  const hoursString = String(afterMidnight.getHours()).padStart(2, "0");
  const minutesString = String(afterMidnight.getMinutes()).padStart(2, "0");

  return `${hoursString}:${minutesString}`;
}

console.log(timeOfDay(0)); // "00:00"
console.log(timeOfDay(-3)); // "23:57"
console.log(timeOfDay(35)); // "00:35"
console.log(timeOfDay(-1437)); // "00:03"
console.log(timeOfDay(3000)); // "02:00"
console.log(timeOfDay(800)); // "13:20"
console.log(timeOfDay(-4231)); // "01:29"
console.log(timeOfDay(-999999999999)); // "01:29"
