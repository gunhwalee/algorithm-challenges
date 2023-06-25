/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const map = {};
  
  for (const letter of magazine) {
    map[letter] ? map[letter] += 1 : map[letter] = 1;
  }
  
  for (const letter of ransomNote) {
    if (map[letter]) {
      map[letter] -= 1;
    } else {
      return false;
    }
    
  }
  
  return true
};