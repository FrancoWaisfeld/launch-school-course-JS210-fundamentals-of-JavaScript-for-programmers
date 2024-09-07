function swapName(fullName) {
  let names = fullName.split(' ')
  let lastName = names.splice(-1, 1);

  return `${lastName}, ${names.join(' ')}`
}

console.log(swapName('Joe Alexander Roberts'));    // "Roberts, Joe"