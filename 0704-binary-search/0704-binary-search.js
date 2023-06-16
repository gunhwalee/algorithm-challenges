/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const mid = Math.floor(nums.length / 2);
  
  if (nums[mid] === target) return mid;
  if (nums.length === 1) return -1;

  if (nums[mid] > target) {
    const newNums = nums.slice(0, mid);
    const result = search(newNums, target);
    return result >= 0 ? result : -1;
  } else {
    const newNums = nums.slice(mid, nums.length);
    const result = search(newNums, target);
    return result >= 0 ? result + mid : -1;
  }
};