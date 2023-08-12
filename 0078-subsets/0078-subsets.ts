const subsets = (nums: number[]): number[][] => {
  const result: number[][] = [];

  const helper = (array: number[], index: number): void => {
    if (index > nums.length) return;

    result.push([...array]);    
    for (let i = index; i < nums.length; i += 1) {
      array.push(nums[i]);
      helper(array, i + 1);
      array.pop();
    }
  };

  helper([], 0);

  return result;
};