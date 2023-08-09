const canPartition = (nums: number[]): boolean => {
  const totalSum: number = nums.reduce((acc, cur) => acc + cur, 0);
  if (totalSum % 2) return false;

  const target: number = totalSum / 2;
  const dp: boolean[] = [];
  dp[0] = true;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = target; j >= nums[i]; j -= 1) {
      dp[j] = dp[j] || dp[j - nums[i]];
      if (dp[target]) return true;
    }
  }

  return false;
};