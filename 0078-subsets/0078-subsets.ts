const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [[]];

  const helper = (array, index) => {
    if (index >= nums.length) return;
    
    array.push(nums[index]);
    result.push(array);
    
    for (let i = index + 1; i < nums.length; i += 1) {
      helper([...array], i);
    }
  };
  
  for (let i = 0; i < nums.length; i += 1) {
    helper([], i);
  }

  return result;
};