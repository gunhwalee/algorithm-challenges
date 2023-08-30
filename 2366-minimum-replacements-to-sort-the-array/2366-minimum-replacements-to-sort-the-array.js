/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumReplacement = (nums) => {
  const length = nums.length;
  let totalCount = 0;

  for (let i = length - 1; i > 0; i--) {
    const last = nums[i];

    if (last >= nums[i - 1]) continue;

    let count = Math.floor(nums[i - 1] / last);
    const remainder = nums[i - 1] % last;

    if (remainder !== 0) {
      count++;
    }

    nums[i - 1] = Math.floor(nums[i - 1] / count);
    totalCount += count - 1;
  }

  return totalCount;
};