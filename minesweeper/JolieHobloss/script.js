const input = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

function fillOutputArray(){
  let output = [];
  for(let i=0;i<input.length;i++){
       output.push(input[i]);
  }
  for(let i=0;i<output.length;i++){
    for(let j=0;j<output.length;j++){
      if(output[i][j]===1)
      output[i][j]=9;
    }
  }
  return output;
}


function updateOutputArray() {
  let out=fillOutputArray();
   for(let i=0;i<out.length;i++){
    for(let j=0;j<out.length;j++){
      if(out[i][j]===9){
          out[i][j]=out[i][j];
        }else{
          out[i][j]=result(out,i,j);
        }
    }
  }
  return out;
}


function result(arr,i,j){
  let c = 0;
  const prevCol=j-1;
  const currentCol=j;
  const nextCol=j+1;
  const prevRow = arr[i - 1];
  const currentRow = arr[i]
  const nextRow = arr[i + 1];
  [prevRow, currentRow, nextRow].forEach(row => {
    if (row) {
      if (row[prevCol] === 9) c++;
      if (row[currentCol] === 9) c++;
      if (row[nextCol] === 9) c++;
    }
  })

  return c;
}



console.log(updateOutputArray())

/*[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]*/