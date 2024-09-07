const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1) {
    digit = dateString[0];
  } else if (dateString[0] !== "1") {
    digit = dateString[1];
  }

  let suffix = "th";
  if (digit === "1") {
    suffix = "st";
  } else if (digit === "2") {
    suffix = "nd";
  } else if (digit === "3") {
    suffix = "rd";
  }

  return String(date) + suffix;
}

function formattedMonth(date) {
  return months[date.getMonth()];
}

function formattedWeekDay(date) {
  return daysOfWeek[date.getDay()];
}

function formattedMonthDay(date) {
  return dateSuffix(date.getDate());
}

function formattedDate(date) {
  return (
    `${formattedWeekDay(date)}, ${formattedMonth(date)} ` +
    `${formattedMonthDay(date)}`
  );
}

function formatTime(dateObj) {
  let hour = String(dateObj.getHours()).padStart(2, "0");
  let minutes = String(dateObj.getMinutes()).padStart(2, "0");

  return `${hour}:${minutes}`;
}

let today = new Date();

console.log(`Today's day is ${formattedDate(today)}.`);
console.log(today.getYear());
console.log(today.getFullYear());
console.log(today.getTime());

let tomorrow = new Date(today.getTime());
tomorrow.setDate(19);
console.log(formattedDate(tomorrow));

let nextWeek = new Date(today.getTime());

console.log(today.toDateString() === nextWeek.toDateString());

nextWeek.setDate(today.getDate() + 7);

console.log(today.toDateString() === nextWeek.toDateString());

console.log(formatTime(today));
