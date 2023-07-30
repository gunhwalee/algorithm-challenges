const isPalindrome = (s: string): boolean => {
  const reg = /[~!@#$%^&*,.:?₩\_\-\+\=\<\>\[\]\{\}\(\)\"\'\.\;\:\`]/g;
  const result = s.replaceAll(" ", "").replaceAll(reg, "").toLowerCase();
  const reverse = result.split("").reverse().join("");

  if (result === reverse) return true;
  return false;
};