const longestPalindrome = (s: string): string => {
  if (s.length <= 1) return s;
  let ans: string = "";

  const helper = (left: number, right: number): void => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let substring: string = s.substring(left, right + 1);
      
      if (substring.length > ans.length) ans = substring;
      
      left -= 1;
      right += 1;
    }
  };

  for (let i = 0; i < s.length; i += 1) {
    helper(i, i);
    helper(i, i + 1);
  }

  return ans;
};