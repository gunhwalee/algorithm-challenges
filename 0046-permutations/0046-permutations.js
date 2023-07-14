/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const result = [];
  
  function recursion(current, rest) {
    if (rest.length === 0) {
      result.push(current);
      return;
    }
    
    for (let i = 0; i < rest.length; i += 1) {
      const input = rest[i];
      recursion([...current, input], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  
  recursion([], nums);

  return result;
};


