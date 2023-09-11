/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function(groupSizes) {
  const result = [];
  const helper = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (!helper[groupSizes[i]]) helper[groupSizes[i]] = [];
    
    helper[groupSizes[i]].push(i);
  }

  for (let j = 0; j < helper.length; j++) {
    if (!helper[j]) continue;
    
    if (helper[j].length === j) {
      result.push(helper[j]);
      continue;
    }

    while (helper[j].length) {
      result.push(helper[j].splice(0, j));
    }
  }

  return result;
};