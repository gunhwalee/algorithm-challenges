/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = (pairs) => {
  pairs.sort((a, b) => a[1] - b[1]);
  
  let prev = pairs[0];
  let count = 1;
  
  for (let i = 1; i < pairs.length; i++) {
    const [start, end] = pairs[i];
    
    if (start > prev[1]) {
      count++;
      prev = pairs[i];
    }
  }
  
  return count;
};