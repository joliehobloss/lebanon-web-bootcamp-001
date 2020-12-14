let mines=[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

function mineSweeper(matrix){
  let newmatrix=[];
  for(let i=0;i<matrix.length;i++){
    newmatrix[i]=[];
    for(let j=0; j<matrix[0].length;j++){
      if(matrix[i][j]===1){
        newmatrix[i][j]=9;
      }
      let count=0;
      let positions=[
        [i,j+1],[i+1,j+1],[i+1,j],[i-1,j],[i-1,j-1], [i,j-1],[i+1,j-1],[i-1,j+1]
      ]
      for(pos of positions){
        const [x,y]=pos
        if(!outOfBoundaries(matrix,x,y) && matrix[x][y]=== 1) count++
      }
      newmatrix[i][j]= count;
    }
  }
return newmatrix;
}
function outOfBoundaries (matrix, i,j) {
  return i<0 || i>= matrix.length || j<0 || j>= matrix.length
}

 console.log(mineSweeper(mines));