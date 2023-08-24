/**
 * @param {number} n
 * @return {number}
 */
const getMaximumGenerated = (n) => {
  if (n < 2) return n;

  const result = Array(n + 1).fill(0);
  result[1] = 1;
  let maxNum = 1;

  for (let i = 2; i < result.length; i++) {
    const target = Math.floor(i / 2);

    if ((i % 2) === 0) {
      result[i] = result[target];
    } else {
      result[i] = result[target] + result[target + 1];
    }
    maxNum = Math.max(maxNum, result[i]);
  }

  return maxNum;
};