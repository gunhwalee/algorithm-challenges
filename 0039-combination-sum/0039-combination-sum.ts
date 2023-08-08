const combinationSum = (candidates: number[], target: number): number[][] => {
  const result: number[][] = [];

  const DFS = (candidate: number[], target: number, index: number): void => {
    const sum = candidate.reduce((acc, cur) => acc + cur, 0);

    if (sum === target) {
      result.push(candidate);
      return;
    }

    for (let i = index; i < candidates.length; i += 1) {
      if (sum + candidates[i] <= target) {
        DFS([...candidate, candidates[i]], target, i);
      }
    }
  };

  DFS([], target, 0);

  return result;
};