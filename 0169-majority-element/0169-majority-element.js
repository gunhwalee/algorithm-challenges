/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  const map = {};

  for (const num of nums) {
    if (!map[num]) map[num] = 0;
    
    map[num] += 1;
  }

//   const keys = Object.getOwnPropertyNames(map);

//   for (const key of keys) {
//     if (map[key] > nums.length / 2) return key;
//   }
  for (const key in map) {
    if (map.hasOwnProperty(key)) {
      if (map[key] > nums.length / 2) return key;
    }
  }
};