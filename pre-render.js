function makeFrame(array, symbolFalse, symbolTrue, separator) {
  let frame = ``;

  for (i = 0; array[i] !== undefined; i++) {
    if (i > 0) {
      frame += separator;
    }
    for (i2 = 0; array[i][i2] !== undefined; i2++) {
      if (array[i][i2] === false) {
        frame += symbolFalse;
      } else if (array[i][i2] === true) {
        frame += symbolTrue;
      }
    }
  }
  return frame;
}
