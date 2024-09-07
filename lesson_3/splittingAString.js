function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimter");
    return;
  }

  let split = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === delimiter) {
      console.log(split);
      split = "";
    } else if (delimiter === "") {
      console.log(string[i]);
    } else {
      split += string[i];
    }
  }

  if (split) {
    console.log(split);
  }
}

splitString("abc,123,hello world", ",");
splitString("hello");
splitString("hello", "");
splitString("hello", ";");
splitString(";hello;", ";");
