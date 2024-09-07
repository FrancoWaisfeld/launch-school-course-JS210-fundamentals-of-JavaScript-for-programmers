function cleanUp(text) {
  return text.replace(/[^a-zA-Z]+/g, " ");
}

console.log(cleanUp("---what's my +*& line?"));
