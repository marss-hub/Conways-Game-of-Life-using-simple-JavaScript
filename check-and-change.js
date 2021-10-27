function changeGeneration(arr, maxColumnIndex, maxStringIndex) {
  let newArr = [];
  for (let i = 0; arr[i] !== undefined; i++) {
    newArr[i] = [];
    for (let i2 = 0; arr[i][i2] !== undefined; i2++) {
      newArr[i][i2] = arr[i][i2];
    }
  }

  for (let i = 0; arr[i] !== undefined; i++) {
    for (let i2 = 0; arr[i][i2] !== undefined; i2++) {
      if (arr[i][i2] === false) {
        const volNeighborsFalse = checkNeighbors(
          arr,
          i,
          i2,
          maxColumnIndex,
          maxStringIndex
        );

        if (volNeighborsFalse === 3) {
          newArr[i][i2] = true;
        }
      } else if (arr[i][i2] === true) {
        const volNeighborsTrue = checkNeighbors(
          arr,
          i,
          i2,
          maxColumnIndex,
          maxStringIndex
        );
        if (volNeighborsTrue > 3 || volNeighborsTrue < 2) {
          newArr[i][i2] = false;
        }
      }
    }
  }
  return newArr;
}

function checkNeighbors(
  arr,
  stringIndex,
  columnIndex,
  maxColumnIndex,
  maxStringIndex
) {
  let = sumNeighbors = 0;

  if (stringIndex > 0) {
    if (arr[stringIndex - 1][columnIndex] === true) sumNeighbors++;
  }
  if (stringIndex < maxStringIndex) {
    if (arr[stringIndex + 1][columnIndex] === true) sumNeighbors++;
  }

  if (columnIndex > 0) {
    if (stringIndex > 0) {
      if (arr[stringIndex - 1][columnIndex - 1] === true) sumNeighbors++;
    }
    if (arr[stringIndex][columnIndex - 1] === true) sumNeighbors++;
    if (stringIndex < maxStringIndex) {
      if (arr[stringIndex + 1][columnIndex - 1] === true) sumNeighbors++;
    }
  }

  if (columnIndex < maxColumnIndex) {
    if (stringIndex > 0) {
      if (arr[stringIndex - 1][columnIndex + 1] === true) sumNeighbors++;
    }
    if (arr[stringIndex][columnIndex + 1] === true) sumNeighbors++;
    if (stringIndex < maxStringIndex) {
      if (arr[stringIndex + 1][columnIndex + 1] === true) sumNeighbors++;
    }
  }

  return sumNeighbors;
}
