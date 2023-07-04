/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const result = [];
  let leftNum = 1, rightNum = 1;

  for (let i = 0; i < nums.length; i += 1) {
    result[i] = leftNum;
    leftNum *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    result[i] *= rightNum;
    rightNum *= nums[i];
  }

  return result;
};