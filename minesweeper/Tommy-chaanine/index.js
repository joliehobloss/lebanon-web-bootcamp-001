matrix = [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 0],
  ];
  
  
  const isOutOfBounds = (grid, i, j) => {
    return i < 0 || i >= grid.length || j < 0 || j >= grid.length;
  };
  
  const solve = (grid) => {
   
    let ans = new Array(grid[0].length).fill([]);
    ans = ans.map(() => new Array(grid[0].length).fill(0));
  
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        
        let neighborsCount = 0;
        const points = [
          [i, j + 1],
          [i, j - 1],
          [i + 1, j + 1],
          [i + 1, j - 1],
          [i + 1, j],
          [i - 1, j],
          [i - 1, j + 1],
          [i - 1, j - 1],
        ];
        for (point of points) {
         
          const [x, y] = point;
         
          if (!isOutOfBounds(grid, x, y) && grid[x][y] === 1) neighborsCount++;
        }
       
        ans[i][j] = neighborsCount;
      }
    }
  
    
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === 1) {
          ans[i][j] = 9;
        }
      }
    }
  
    return ans;
  };
  
  solve(matrix);