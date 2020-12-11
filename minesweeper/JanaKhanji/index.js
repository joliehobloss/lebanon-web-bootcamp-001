// input
/*[
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
]

// output
[
  [1, 9, 2, 1],
  [2, 3, 9, 2],
  [3, 9, 4, 9],
  [9, 9, 3, 1],
]*/

  
 //creating empty arr
 const empty2DArr= (n)=>{
  let arr = new Array(n).fill([]);
  arr = arr.map((item) => item = new Array(n).fill(0));
  return arr
 }

    //all neighbouring points 
 let points = [[0, -1],[0, 1], [1,0],[1 ,-1],[1 ,1],[- 1, 0],[- 1, 1],[- 1, - 1]]


function sweeper(arr){
 let output = empty2DArr(arr.length);
  arr.forEach((row, i) =>{
    row.forEach((element, j) =>{
      //if the element is a mine, i will replace it with 9 and check for neighbouring
      if(element === 1){
          output[i][j]=9;
          points.forEach((point)=>{
             if(arr[i - point[0]])
                if (arr [j - point[1]])
		//testing for edge, if neighbour exist: 
		if(arr[ i - point[0]] [j - point[1]] !=1 )
		//if the neighbour is a mine dont add 1 
		output[ i - point[0]] [j - point[1]] ++
              })
      }
    })
})
  return output
}


sweeper([
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 1, 0, 0],
])


