function addBinary(a: string, b: string): string {
  const length: number = a.length >= b.length ? a.length : b.length;
  const reverseA: string = a.split("").reverse().join("");
  const reverseB: string = b.split("").reverse().join("");
  const result: number[] = [];

  for (let i = 0; i < length; i += 1) {
    const num1: number = Number(reverseA[i] || 0);
    const num2: number = Number(reverseB[i] || 0);
    const sum: number = Number(result[i] || 0) + num1 + num2;

    if (sum > 1) {
      result[i] = sum % 2;
      result.push(1);
    } else {
      result[i] = sum;
    }
  }

  return result.reverse().join("");
};

