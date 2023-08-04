const countBits = (n: number): number[] => {
  const result: number[] = new Array(n + 1).fill(0);
  let offset: number = 1;

  for (let i = 1; i < n + 1; i += 1) {
    if ((offset * 2) === i) offset = i;

    result[i] = 1 + result[i - offset];
  }

  return result;
};