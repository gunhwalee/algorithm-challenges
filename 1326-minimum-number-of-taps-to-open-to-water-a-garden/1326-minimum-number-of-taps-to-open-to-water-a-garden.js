/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
const minTaps = (n, ranges) => {
  const reach = new Array(n + 1).fill(0);
  
  for (let i = 0; i <ranges.length; i++) {
    if (ranges[i] === 0) continue;
    const start = Math.max(0, i - ranges[i]);
    reach[start] = Math.max(reach[start], i + ranges[i]);
  }
  
  let end = 0;
  let totalEnd = 0;
  let count = 0;
  
  for (let i = 0; i <= n; i++) {
    if (i > end) {
      if (totalEnd <= end) return -1;
      end = totalEnd;
      count++;
    }

    totalEnd = Math.max(totalEnd, reach[i]);
  }
  
  return count + (end < n ? 1 : 0);
};