function logMultiples(multiple) {
  let start = Math.floor(100 / multiple) * multiple;

  for (let candidate = start; candidate >= multiple; candidate -= multiple) {
    if (candidate % multiple === 0 && candidate % 2 === 1) {
      console.log(candidate);
    }
  }
}

logMultiples(17);
