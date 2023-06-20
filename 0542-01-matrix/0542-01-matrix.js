/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(mat) {
  const queue = [];
  
  for (let i = 0; i < mat.length; i += 1) {
    for (let j = 0; j < mat[0].length; j += 1) {
      if (mat[i][j] === 0) {
        queue.push([i, j, 0]);
      } else {
        mat[i][j] = Infinity;
      }
    }
  }
  
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  
  while(queue.length) {
    const [row, col, num] = queue.shift();
    
    if (mat[row][col] > num) {
      mat[row][col] = num;
    }
    
    direction.forEach(dir => {
      const next = [dir[0] + row, dir[1] + col, num + 1];
      
      if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
        if (mat[next[0]][next[1]] === Infinity) {
          queue.push(next);
        }
      }
    });
  }
  
  return mat;
};