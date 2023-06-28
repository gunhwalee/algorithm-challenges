/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
  const operators = ["+", "-", "*", "/"];
  const stack = [];
  
  for (let i = 0; i < tokens.length; i += 1) {
    if (operators.includes(tokens[i])) {
      const right = stack.pop();
      const left = stack.pop();
      const result = Math.trunc(eval(left + " " + tokens[i] + " " + right));
      stack.push(result);
    } else {
      const number = Number(tokens[i]);
      stack.push(number);
    }
  }
  
  return stack[0];
};