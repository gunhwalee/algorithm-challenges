/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length !== s3.length) return false;
  
  const map = {};
  let result = false;
  
  const helper = (idx1, idx2, idx3) => {
    if (idx3 === s3.length) {
      result = true;
      return;
    }
    
    if (map[`${idx1}${idx2}`] !== undefined) return map[`${idx1}${idx2}`];
    
    if (!result && s3[idx3] === s1[idx1]) helper(idx1 + 1, idx2, idx3 + 1);
    if (!result && s3[idx3] === s2[idx2]) helper(idx1, idx2 + 1, idx3 + 1);

    
    map[`${idx1}${idx2}`] = result;
    
    return result;
  };
  
  helper(0, 0, 0);
  
  return result;
};
