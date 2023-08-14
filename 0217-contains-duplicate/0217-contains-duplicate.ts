const containsDuplicate = (nums: number[]): boolean => {
  const set: Set<number> = new Set();
  
  for (const num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }
  
  return false;
};