/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
  let [start, end] = newInterval;
  const left = [];
  const right = [];
  
  for (const interval of intervals) {
    if (interval[1] < start) {
      left.push(interval);
      continue;
    }

    if (interval[0] > end) {
      right.push(interval);
      continue;
    }

    start = Math.min(start, interval[0]);
    end = Math.max(end, interval[1]);
  }
  
  return [...left, [start, end], ...right];
};
