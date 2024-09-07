function wordCount(sentence) {
  let countOfwords = {};
  let words = sentence.split(" ");
  for (let word in words) {
    incrementProperty(countOfwords, words[word]);
  }

  return countOfwords;
}

function incrementProperty(obj, propertyName) {
  if (objectHasProperty(obj, propertyName)) {
    obj[propertyName] += 1;
  } else {
    obj[propertyName] = 1;
  }

  return obj[propertyName];
}

function objectHasProperty(obj, str) {
  return Object.keys(obj).includes(str);
}

console.log(wordCount("box car cat bag box")); // { box: 2, car: 1, cat: 1, bag: 1 }
