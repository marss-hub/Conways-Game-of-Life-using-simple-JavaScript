const symbolFalse = ` `;
const symbolTrue = `■`;
const separator = `\n`;

// example: playGame(150, 150, 99, 99)

function playGame(maxColumnVol, maxStringVol, firstSeedVolHeight, firstSeedVolWidth) {
  const firstGenerationArr = makeFirstSeed(firstSeedVolHeight, firstSeedVolWidth);
  renderGenerations(firstGenerationArr, maxColumnVol, maxStringVol);
}

function makeFirstSeed(firstSeedVolHeight, firstSeedVolWidth) {
  let newArr = [];
  for (let i = 0; i < firstSeedVolHeight; i++) {
    newArr[i] = [];
    for (let i2 = 0; i2 < firstSeedVolWidth; i2++) {
      const randomBoolean = Math.random() > 0.5;
      newArr[i][i2] = randomBoolean;
    }
  }
  return newArr;
}

function renderGenerations(arr, maxColumnVol, maxStringVol) {
  const maxColumnIndex = maxColumnVol - 1; //переводим из "штук" в "индексы"
  const maxStringIndex = maxStringVol - 1;

  const renderFunc = getRenderFunc();
  changeSteps(arr, maxColumnIndex, maxStringIndex, maxColumnVol, maxStringVol);

  function changeSteps(arr, maxColumnIndex, maxStringIndex, maxColumnVol, maxStringVol) {
    const cellsArr = makeFrame(arr, symbolFalse, symbolTrue, separator);
    renderFunc(cellsArr);

    // need current max str index & max column index and send to changeGeneration
    let currentMaxColumnIndex = null
    let currentMaxStringIndex = null
    for (let i2 = 0; arr[0][i2] !== undefined; i2++) {
      currentMaxColumnIndex = i2;
    }
    for (let i = 0; arr[i] !== undefined; i++) {
      currentMaxStringIndex = i;
    }

    const nextGenArr = changeGeneration(arr, currentMaxColumnIndex, currentMaxStringIndex);
    const nextGenArrWrap = wrapArrayInFalse(nextGenArr, maxColumnVol, maxStringVol);
    setTimeout(changeSteps, 500, nextGenArrWrap, maxColumnIndex, maxStringIndex, maxColumnVol, maxStringVol);
  }
}
