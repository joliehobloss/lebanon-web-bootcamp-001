const input = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
    ]
  
  const activateMineSweeper = () => {
    let matrix=[...input].map(arr => {
      return arr.map(val => {
        if(val === 1){
        return val=9
        }
      })
    })  
    return matrix.map((arr, rows) => {
      return arr.map((val, col) => {
        return val===9? val : adjacent(matrix,rows,col)
      })
    })
  }
  
  const adjacent = (arr,i,j) => {
    let count = 0;
    if(i === 0 || i === arr.length || j === 0 || j === arr.length){
      let neighboors = [arr[i+1][j],
                        arr[i+1][j+1],
                        arr[i][j+1]]
        neighboors.map(pt => {
          if(pt === 9) return count++
        })
    }
    
    return count
  }
  console.log('INCOMPLETE CODE!! could not figure a way to add +1 to the neighboors of nine without having alot of if/else. My problem was since some points have 8 neighboors and others 5 and 3 i was running into points that are undefined when i try to set a single method to find the adjacent points.')
  
  activateMineSweeper()