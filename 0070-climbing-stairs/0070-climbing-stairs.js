/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n < 3) return n;

  const fib = [0, 1, 2];
  for (let i = 3; i <= n; i += 1) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n]
};