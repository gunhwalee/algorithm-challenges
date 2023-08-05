const divisorGame = (n: number): boolean => {
  const result: boolean[] = new Array(n + 1).fill(false);

  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= i / 2; j += 1) {
      if ((i % j) === 0 && result[i - j] === false) result[i] = true;
      break;
    }
  }

  return result[n];
};