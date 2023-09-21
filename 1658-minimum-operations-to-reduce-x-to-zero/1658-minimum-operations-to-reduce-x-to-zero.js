/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

const minOperations = function (nums, x) {
  let target = -x;
  let n = nums.length;
  for (let num of nums) target += num;

  if (target === 0) return n;

  let maxLen = 0;
  let curSum = 0;
  let left = 0;

  for (let right = 0; right < n; ++right) {
    curSum += nums[right];

    while (left <= right && curSum > target) {
      curSum -= nums[left];
      left++;
    }

    if (curSum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen ? n - maxLen : -1;
};
