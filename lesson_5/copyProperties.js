function copyProperties(object1, object2) {
  for (let property in object1) {
    object2[property] = object1[property];
  }

  return Object.keys(object1).length;
}

let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal)); // 2
console.log(sal); // { model: 9000, enabled: true }
