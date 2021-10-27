function wrapArrayInFalse(array, maxColumnVol, maxStringVol) {
  const maxColumnI = maxColumnVol - 1; //переводим из "штук" в "индексы"
  const maxStringI = maxStringVol - 1;

  let lastIndexString = null;
  let lastIndexColoumn = null;
  let newArray = array;

  let currentMaxStringIndex1 = null;
  let currentMaxStringIndex2 = null;
  let currentMaxColumnIndex1 = null;
  let currentMaxColumnIndex2 = null;

  //проверяем по первой строке
  for (let i = 0; newArray[i] !== undefined; i++) {
    currentMaxStringIndex1 = i;
  }
  for (let i2 = 0; newArray[0][i2] !== undefined; i2++) {
    if (newArray[0][i2] === true && currentMaxStringIndex1 < maxStringI) {
      newArray = makeTopStringFalse(newArray);
      break;
    }
  }

  //проверяем по последней строке
  for (let i = 0; newArray[i] !== undefined; i++) {
    currentMaxStringIndex2 = i;
  }

  for (let i = 0; newArray[i] !== undefined; i++) {
    lastIndexColoumn = i;
  }
  for (let i2 = 0; newArray[lastIndexColoumn][i2] !== undefined; i2++) {
    if (newArray[lastIndexColoumn][i2] === true && currentMaxStringIndex2 < maxStringI) {
      newArray = makeBottomStringFalse(newArray);
      break;
    }
  }

  //проверяем по левому столбцу
  for (let i2 = 0; newArray[0][i2] !== undefined; i2++) {
    currentMaxColumnIndex1 = i2;
  }

  for (let i = 0; newArray[i] !== undefined; i++) {
    if (newArray[i][0] === true && currentMaxColumnIndex1 < maxColumnI) {
      newArray = makeLeftColumnFalse(newArray);
      break;
    }
  }

  //проверяем по правому столбцу
  for (let i2 = 0; newArray[0][i2] !== undefined; i2++) {
    currentMaxColumnIndex2 = i2;
  }

  for (let i2 = 0; newArray[0][i2] !== undefined; i2++) {
    lastIndexString = i2;
  }
  for (let i = 0; newArray[i] !== undefined; i++) {
    if (newArray[i][lastIndexString] === true && currentMaxColumnIndex2 < maxColumnI) {
      newArray = makeRightColoumnFalse(newArray);
      break;
    }
  }

  return newArray;
}

function makeLeftColumnFalse(array) {
  let newArray = [];
  for (let i = 0; array[i] !== undefined; i++) {
    newArray[i] = [];
    for (let i2 = 0; array[i][i2] !== undefined; i2++) {
      newArray[i][0] = false;
      newArray[i][i2 + 1] = array[i][i2];
    }
  }
  return newArray;
}

function makeTopStringFalse(array) {
  let newArray = [];
  for (let i = 0; array[i] !== undefined; i++) {
    newArray[0] = [];
    newArray[i + 1] = [];
    for (let i2 = 0; array[i][i2] !== undefined; i2++) {
      newArray[0][i2] = false;
      newArray[i + 1][i2] = array[i][i2];
    }
  }
  return newArray;
}

function makeBottomStringFalse(array) {
  let newArray = array;
  let _i = null;
  for (let i = 0; array[i] !== undefined; i++) {
    _i = i;
  }
  newArray[_i + 1] = [];
  for (let i2 = 0; array[_i][i2] !== undefined; i2++) {
    newArray[_i + 1][i2] = false;
  }
  return newArray;
}

function makeRightColoumnFalse(array) {
  let newArray = array;
  let _i2 = null;
  for (let i2 = 0; array[0][i2] !== undefined; i2++) {
    _i2 = i2;
  }
  for (let i = 0; array[i] !== undefined; i++) {
    newArray[i][_i2 + 1] = false;
  }
  return newArray;
}
