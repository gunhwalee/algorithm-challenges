/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let count = 0;
  
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === "1") {
        count += 1;
        DFS(grid, i, j);
      }
    }
  }
  
  return count;
};

function DFS(grid, row, col) {
  if (row < 0 || col < 0 ||
     row >= grid.length ||
     col >= grid[0].length ||
     grid[row][col] === "0") return;
 
  grid[row][col] = "0";
  
  DFS(grid, row + 1, col);
  DFS(grid, row - 1, col);
  DFS(grid, row, col + 1);
  DFS(grid, row, col - 1);
}