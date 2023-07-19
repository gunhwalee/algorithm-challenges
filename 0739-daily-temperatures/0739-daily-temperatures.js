/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  for (let i = temperatures.length - 1; i >= 0; i -= 1) {
    while (stack.length && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }

    if(stack.length){
      result[i] = stack[stack.length - 1] - i;   
    }

    stack.push(i)
  }

  return result;
};