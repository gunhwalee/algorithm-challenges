/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  const reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  const result = s.replaceAll(" ", "").replace(reg, "").toLowerCase();
  const reverse = result.split("").reverse().join("");
  
  if (result === reverse) return true;
  
  return false;
};