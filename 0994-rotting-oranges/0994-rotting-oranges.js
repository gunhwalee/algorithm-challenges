/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  let minutes = 0, fresh = 0;
  const queue = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === 2) queue.push([i, j, minutes]);
      if (grid[i][j] === 1) fresh += 1;
    }
  }

  while (queue.length) {
    const [row, col, count] = queue.shift(); 
    
    if (grid[row][col] === 1) {
      grid[row][col] = 2;
      fresh -= 1;
      minutes = count;
    }
    
    for (const direction of directions) {
      const newRow = row + direction[0];
      const newCol = col + direction[1];
      
      if (newRow < 0 || newCol < 0 ||
         newRow >= grid.length ||
         newCol >= grid[0].length) continue;
      
      if (grid[newRow][newCol] === 1) {
        queue.push([newRow, newCol, minutes + 1]);
      }
    }
  }

  return fresh ? -1 : minutes;
};