/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];

  for (const interval of intervals) {
    const lastMax = result.at(-1)[1];
    if (interval[0] <= lastMax) result.at(-1)[1] = Math.max(lastMax, interval.at(-1));
    else result.push(interval);
  }
  
  return result;
};