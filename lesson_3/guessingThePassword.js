const readLineSync = require("readline-sync");

const PASSWORD = "francoIsKing";

for (let guessCount = 1; guessCount < 4; guessCount++) {
  let guess = readLineSync.question("What is the password? ");

  if (guess === PASSWORD) {
    console.log("You have successfully logged in");
    return;
  }
}

console.log("You have been denied access");
