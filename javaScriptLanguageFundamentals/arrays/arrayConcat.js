function concat(array1, ...others) {
  let concatArray = array1.slice();

  for (let otherIndex = 0; otherIndex < others.length; otherIndex++) {
    let other = others[otherIndex];

    if (Array.isArray(other)) {
      for (let index = 0; index < other.length; index++) {
        concatArray.push(other[index]);
      }
    } else {
      concatArray.push(other);
    }
  }

  return concatArray;
}

console.log(concat([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3)); // [1, 2, 3]
console.log(concat([2, 3], ["two", "three"])); // [2, 3, "two", "three"]
console.log(concat([2, 3], "four")); // [2, 3, "four"]

const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray); // [2, 3, { a: 2, b: 3 }]
obj.a = "two";
console.log(newArray); // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = "three";
console.log(arr3); // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3; // or, `arr3[5]['b'] = 3;`
console.log(obj);

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], "a", ["one", "two"])); // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ["three"], 4)); // [1, 2, "three", 4]
