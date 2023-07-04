/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  const leftArray = [];
  const rightArray = [];
  const result = [];
  let leftNum = 1, rightNum = 1;

  for (let i = 0; i < nums.length; i += 1) {
    leftArray[i] = leftNum;
    leftNum *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    rightArray[i] = rightNum;
    rightNum *= nums[i];
    result[i] = leftArray[i] * rightArray[i];
  }

  return result;
};