const matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];
 

  function newMatrix(){
     let newmatrix1=[]
    for(let i=0;i<matrix.length;i++){
    newmatrix1.push(matrix[i])}
    for(let i=0;i<newmatrix1.length;i++){
      for(let j=0;j<newmatrix1.length;j++){
        if (newmatrix1[i][j]==1)
        newmatrix1[i][j]=9
        }
       }
    return newmatrix1
  }

           function final(){
             let finalmatrix=newMatrix()
             for(let i=0;i<finalmatrix.length;i++){
               for(let j=0;j<finalmatrix.length;j++){
                 if (finalmatrix[i][j]==9)
                 finalmatrix[i][j]=finalmatrix[i][j]
                 else{
                finalmatrix[i][j]=findingNeighbors(finalmatrix,i,j)
                 }
               }
             }
             return finalmatrix
            console.log(finalmatrix)
           }
        
function findingNeighbors(myArray, i, j) {
  let rowLimit = myArray.length-1;
  let columnLimit = myArray[0].length-1;
    let cnt =0
  for(let x = Math.max(0, i-1); x <= Math.min(i+1, rowLimit); x++) {
    for(let y = Math.max(0, j-1); y <= Math.min(j+1, columnLimit); y++) {
      if(x !== i || y !== j) {
        if(myArray[x][y]==9)
        cnt++
       
      }
    }
  }
  return cnt
   console.log(cnt)
} 



 console.log(final())



            