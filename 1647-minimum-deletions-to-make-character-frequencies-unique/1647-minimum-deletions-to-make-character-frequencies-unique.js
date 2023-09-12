/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = function(s) {
  const frequency = {};
  let count = 0;
  
  for (const char of s) {
    if (!frequency[char]) frequency[char] = 0;
    
    frequency[char]++;
  }
  
  let values = Object.values(frequency);
  values.sort((a, b) => a - b);
  while (values.length) {
    const max = values.pop();

    if (max === 0) return count;

    const newArr = values.map(element => {
      if (element === max) {
        element--;
        count++;
      }
      return element;
    });
    
    values = newArr;
  }

  return count;
};