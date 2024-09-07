const DEGREES_TO_MIUNTES = 60;
const MINUTES_TO_SECONDS = 60;
const FULL_ANGLE = 360;

function dms(degreesFloat) {
  if (degreesFloat < 0) {
    degreesFloat = FULL_ANGLE + (degreesFloat % FULL_ANGLE);
  } else {
    degreesFloat = degreesFloat % FULL_ANGLE;
  }

  let degressInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat % 1) * DEGREES_TO_MIUNTES);
  let seconds = Math.floor(
    (((degreesFloat % 1) * DEGREES_TO_MIUNTES) % 1) * MINUTES_TO_SECONDS
  );

  return `${degressInt}˚${String(minutes).padStart(2, "0")}'${String(
    seconds
  ).padStart(2, "0")}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
console.log(dms(-1)); // 359°00'00"
console.log(dms(400)); // 40°00'00"
console.log(dms(-40)); // 320°00'00"
console.log(dms(-420)); // 300°00'00"
console.log(dms(-721)); // 300°00'00"
