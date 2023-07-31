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
  
  const arr1: number[] = [...nums];

  for (let i = 0; i < arr1.length; i += 1) {
    const value = arr1[i];
    nums[counts[value] - 1] = value;
    counts[value] -= 1;
  }
};