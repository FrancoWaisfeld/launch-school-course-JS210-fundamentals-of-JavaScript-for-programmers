function multiplesOfThreeAndFive(min, max) {
  for (let count = min; count <= max; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      console.log(`${count}!`);
    } else if (count % 3 === 0 || count % 5 === 0) {
      console.log(String(count));
    }
  }
}

multiplesOfThreeAndFive(10, 421);
