matrix =
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];



  function replace(mtr){
    return mtr.map(row =>row.map(col => col===1 ? 9:0) )
  }
  const cases=[[-1,-1], [-1, 0], [-1,1], [0,-1], [0,1], [1,-1], [1,0],[1,1]];

  minesweep(matrix)

  function minesweep(mat){
  let mx = replace(mat);

   for(let i=0; i< mx.length; i++){
    for(let j=0; j< mx[i].length; j++){
     if(mx[i][j]!==9){
      cases.forEach(([x,y]) =>{
        let m=i+x, n=j+y
      if(mx[m] != undefined && mx[m][n]===9 )
       mx[i][j]++ 
        });
      }
    }
   }  
   console.log(mx)
  }
