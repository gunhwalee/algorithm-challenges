const generate = (numRows: number): number[][] => {
  const result: number[][] = [];

  for (let i = 1; i <= numRows; i += 1) {
    const line: number[] = new Array(i).fill(1);
    const prev: number[] = result.at(-1);

    for (let j = 1; j < line.length; j += 1) {
      if (prev && prev[j]) {
        line[j] = prev[j] + prev[j - 1];
      }
    }

    result.push(line);
  }

  return result;
};