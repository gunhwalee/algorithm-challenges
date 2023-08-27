/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const result = [];
  
  const helper = (open, close, string) => {
    if (open > close) return;

    if (open === 0 && close === 0) {
      result.push(string);
      return;
    }

    if (open > 0) helper(open - 1, close, string + "(");
    if (close > 0) helper(open, close - 1, string + ")");
  }

  helper(n, n, "");

  return result;
};