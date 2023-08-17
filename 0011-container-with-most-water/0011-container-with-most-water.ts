const maxArea = (height: number[]): number => {
  let start: number = 0;
  let end: number = height.length - 1;
  let maxWater: number = 0;

  while (start < end) {
    const containerHeight: number = Math.min(height[start], height[end]);
    const containerWidth: number = end - start;

    maxWater = Math.max(maxWater, containerWidth * containerHeight);

    if (height[start] < height[end]) start += 1;
    else end -= 1;
  }

  return maxWater;
};
