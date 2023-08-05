const fib = (n: number): number => {
  const result: number[] = new Array(n + 1).fill(0);
  result[1] = 1;

  for (let i = 2; i < result.length; i += 1) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result[n];
};