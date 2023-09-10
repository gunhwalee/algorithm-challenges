/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function(nums, target) {
  const result = new Array(target + 1).fill(0);
  
  for (let i = 1; i < result.length; i++) {
    for (const num of nums) {
      if (i > num) result[i] += result[i - num];
      else if (i === num) result[i]++
    }
  }

  return result[target];
};