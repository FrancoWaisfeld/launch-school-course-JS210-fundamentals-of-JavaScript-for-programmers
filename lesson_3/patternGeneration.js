function generatePattern(nStars) {
  let pattern = "";

  for (let count = 1; count <= nStars; count++) {
    pattern += String(count);
    console.log(pattern.padEnd(nStars, "*"));
  }
}

generatePattern(10);
