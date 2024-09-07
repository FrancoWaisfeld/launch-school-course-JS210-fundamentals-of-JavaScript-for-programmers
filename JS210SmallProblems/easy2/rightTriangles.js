function triangle(height) {
  let stars = 1;
  let spaces = height - 1;
  for (let i = 0; i < height; i++) {
    console.log(" ".repeat(spaces) + "*".repeat(stars));

    spaces -= 1;
    stars += 1;
  }
}

triangle(5);
