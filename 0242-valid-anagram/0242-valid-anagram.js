/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
  const originString = s.split("");
  
  console.log(originString);
  for (let i = 0; i < t.length; i += 1) {
    if (originString.includes(t[i])) {
      const index = originString.indexOf(t[i]);
      originString.splice(index, 1);
    } else {
      return false;
    }
  }
  
  return originString.length === 0 ? true : false;
};