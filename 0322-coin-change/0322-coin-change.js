/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  // solution

  const result = Array(amount + 1).fill(Infinity);
  result[0] = 0;
  
  for (const coin of coins) {
    for (let i = coin; i <= amount; i += 1) {
      result[i] = Math.min(result[i], result[i - coin] + 1);
    }
  }

  return result[amount] === Infinity ? -1 : result[amount];
};