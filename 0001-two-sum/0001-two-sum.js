/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i += 1) {
    const key = target - nums[i];
    
    if (map.has(nums[i])) return [i, map.get(nums[i])];
    
    map.set(key, i);
  }
};