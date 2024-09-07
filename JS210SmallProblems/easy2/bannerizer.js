function logInBox(string) {
  let lineLength = string.length + 2;
  let dashes = "-".repeat(lineLength);
  let spaces = " ".repeat(lineLength);

  console.log(`+${dashes}+`);
  console.log(`|${spaces}|`);
  console.log(`| ${string} |`);
  console.log(`|${spaces}|`);
  console.log(`+${dashes}+`);
}

logInBox("To boldly go where no one has gone before.");
logInBox("");
