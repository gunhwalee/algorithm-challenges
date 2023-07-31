/**
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums: number[]): void => {
  const counts: number[] = Array(3).fill(0);

  for (const num of nums) {
    counts[num] += 1;
  }
  
  for (let i = 0; i < counts.length; i += 1) {
    if (i) counts[i] += counts[i - 1];
  }
  
  const copyNums: number[] = [...nums];

  for (let i = 0; i < copyNums.length; i += 1) {
    const value: number = copyNums[i];
    nums[counts[value] - 1] = value;
    counts[value] -= 1;
  }
};