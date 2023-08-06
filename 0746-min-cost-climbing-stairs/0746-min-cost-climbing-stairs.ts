const minCostClimbingStairs = (cost: number[]): number => {
  const dp: number[] = new Array(cost.length);
  cost.push(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  let n: number = 2;
  
  while (n < cost.length) {
    dp[n] =cost[n] + Math.min(dp[n - 1], dp[n - 2]);
    
    n += 1;
  }

  return dp[cost.length - 1];
};