/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  let cur = 0, total = 0, location = 0;
  
  for (let i = 0; i < gas.length; i++) {
    cur += gas[i] - cost[i];
    total += gas[i] - cost[i];
    
    if (cur < 0) {
      cur = 0;
      location = i + 1;
    }
  }
  
  return total < 0 ? -1 : location;
};