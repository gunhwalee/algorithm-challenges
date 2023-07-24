/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const map = {};

  for (const num of nums) {
    if (!map[num]) map[num] = 0;
    
    map[num] += 1;
  }
  
  for (const element in map) {
    if (map[element] > nums.length / 2) return element;
  }
};