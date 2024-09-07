function slice(array, begin, end) {
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;

  const sliceArray = [];

  for (let index = begin; index < end; index++) {
    sliceArray.push(array[index]);
  }

  return sliceArray;
}

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > array.length ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;

  for (let index = 0; index < elementCount; index++) {
    array[start + index] = args[index];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);

  for (let index = 0; index < copyBackCount; index++) {
    array[start + elementCount + index] =
      arrayCopy[start + deleteCount + index];
  }

  return slice(arrayCopy, start, start + deleteCount);
}
