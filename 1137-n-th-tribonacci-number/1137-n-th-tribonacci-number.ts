const tribonacci = (n: number): number => {
  const result = new Array(n + 1).fill(0);
  result[1] = 1;
  result[2] = 1;
  
  for (let i = 3; i < n + 1; i += 1) {
    result[i] = result[i -3] + result[i - 2] + result[i - 1];
  }
  
  return result[n];
};