const matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];

//Step 1

  function newMatrix(){
    let matrixA=[]
    for(let i=0;i<matrix.length;i++){
    matrixA.push(matrix[i])
    }
    for(let i=0;i<matrixA.length;i++){
      for(let j=0;j<matrixA.length;j++){
        if (matrixA[i][j]==1)
        matrixA[i][j]=9
        }
       }
       return matrixA;
  }

//Step 2

 function matrixB(){
   let final=newMatrix()
    for(let i=0;i<final.length;i++){
      for(let j=0;j<final.length;j++){
         if (final[i][j]!==9)
            final[i][j]=find(final,i,j) 
           }  
        }
   return final
  }

// Step 3

function find(array, i, j) {
  let row = array.length-1;
  let col = array.length-1;
  let counter = 0;
  for(let x = Math.max(0, i-1); x <= Math.min(i+1, row); x++) {
    for(let y = Math.max(0, j-1); y <= Math.min(j+1, col); y++) {
      if(x !== i || y !== j) {
        if(array[x][y]==9)
        counter+=1
      }
    }
  }
  return counter
} 

console.log(matrixB())
//console.log(newMatrix())