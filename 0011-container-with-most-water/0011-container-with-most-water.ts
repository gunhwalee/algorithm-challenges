function maxArea(height: number[]): number {
  let start: number = 0;
  let end: number = height.length - 1;
  const calculator = (a: number, b: number): number => {
    return (b - a) * Math.min(height[a], height[b]);
  };
  let maxWater: number = calculator(start, end);

  while (start < end) {
    if (height[start] < height[end]) {
      start += 1;
      maxWater = Math.max(maxWater, calculator(start, end));
    } else {
      end -= 1;
      maxWater = Math.max(maxWater, calculator(start, end));
    }
  }

  return maxWater;
};
