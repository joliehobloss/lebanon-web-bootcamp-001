let matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ]

let output = matrix.map(row => row.map (col =>
    col === 1 ? col = 9 : col
))

for(let i = 0 ; i < matrix.length ; i++){
    for(let j = 0 ; j < matrix[i].length ; j++){
        if (output[i-1] !== undefined && output[i - 1][j - 1] !== undefined && output[i - 1][j - 1] === 9)
          output[i][j]++;
        if (output[i-1] !== undefined && output [i - 1][j] === 9)
          output[i][j]++;
        if (output[i - 1] !== undefined && output [i - 1][j + 1] === 9)
          output[i][j]++;
        if (output [i][j - 1] === 9)
          output[i][j]++;
        if (output [i][j + 1] === 9)
          output[i][j]++;
        if(output[i + 1] !== undefined && output [i + 1][j - 1] === 9)
          output[i][j]++;
        if(output[i + 1] !== undefined && output [i + 1][j] === 9)
          output[i][j]++;
        if(output[i + 1] !== undefined && output [i + 1][j + 1] === 9)
          output[i][j]++;
    }
}