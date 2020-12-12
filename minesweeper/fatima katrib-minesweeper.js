const matrix = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
];


function fillOneByNine() {
  let newmatrix1 = matrix.map(x => {
    return x.map(y => {
      if (y == 1) return 9;
      return y
    });
  })
  return newmatrix1
}

function fillNumberOfNeighbors() {
  let mineSweeper = fillOneByNine()
  for (let i = 0; i < mineSweeper.length; i++) {
    for (let j = 0; j < mineSweeper[i].length; j++) {
      if (mineSweeper[i][j] != 9) mineSweeper[i][j] = findingNeighbors(mineSweeper, i, j)
    }
  }
  return mineSweeper
}

function findingNeighbors(myArray, i, j) {
  let rowLimit = myArray.length - 1;
  let columnLimit = myArray[0].length - 1;
  let cnt = 0
  for (let x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++)
    for (let y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++)
      if ((x !== i || y !== j) && myArray[x][y] == 9)
        cnt++

  return cnt
}



console.log(fillNumberOfNeighbors())



