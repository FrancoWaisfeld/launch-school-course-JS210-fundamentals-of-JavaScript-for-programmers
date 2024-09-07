const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = 1440;

function afterMidnight(timeStr) {
  const afterMidnight = new Date(`January 1, 2000, ${timeStr}`);
  const hours = afterMidnight.getHours();
  const minutes = afterMidnight.getMinutes();

  return hours * MINUTES_PER_HOUR + minutes;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

console.log(afterMidnight("00:00")); // 0
console.log(beforeMidnight("00:00")); // 0
console.log(afterMidnight("12:34")); // 754
console.log(beforeMidnight("12:34")); // 686
