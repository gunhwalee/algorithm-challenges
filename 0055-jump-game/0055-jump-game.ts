const canJump = (nums: number[]): boolean => {
  if (nums.length === 1) return true;
  let maxSteps: number = 0;
  const target: number = nums.length - 1;

  for (let i = 0; i < nums.length; i += 1) {
    if (maxSteps <= i && nums[i] === 0) return false;

    maxSteps = Math.max(maxSteps, nums[i] + i);

    if (maxSteps >= target) return true;
  }

  return false
}