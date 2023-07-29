const maxProfit = (prices: number[]): number => {
  let max: number = 0;
  let buy: number = 0, sell: number = 1;
  
  while (sell < prices.length) {
    if (prices[buy] < prices[sell]) {
      max = Math.max(max, prices[sell] - prices[buy]);
    } else {
      buy = sell;
    }
    
    sell += 1;
  }
  
  return max
};