function countOccurrences(vehicles) {
  let vehicleCount = {};

  vehicles.forEach((vehicle) => {
    if (vehicleCount[vehicle] === undefined) {
      vehicleCount[vehicle] = 1;
    } else {
      vehicleCount[vehicle] += 1;
    }
  });

  logOcccurences(vehicleCount);
}

function logOcccurences(occurences) {
  for (let item in occurences) {
    console.log(`${item} => ${occurences[item]}`);
  }
}

const vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
