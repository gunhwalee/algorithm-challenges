/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  const result = [];

  function permute(arr=[], sum=0, idx=0) {
    if(sum === target) {
      result.push(arr);
      return;
    }

    for(let i = idx; i < candidates.length; i++) {
      if(sum + candidates[i] <= target){
        permute([...arr, candidates[i]], sum+candidates[i], i);
      }
    }
  }
  
  permute();
  return result;
};