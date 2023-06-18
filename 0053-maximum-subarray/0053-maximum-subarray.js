/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxResult = nums[0];
  
  for (let i = 1; i < nums.length; i += 1) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    
    if (nums[i] > maxResult) {
      maxResult = nums[i];
    }
  }
  
  return maxResult;
}