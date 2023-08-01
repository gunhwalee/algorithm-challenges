const wordBreak = (s: string, wordDict: string[]): boolean => {
  const words: Set<string> = new Set(wordDict);
  const lengths: Set<number> = new Set(wordDict.map(word => word.length));
  const starts: Set<number> = new Set([0]);
  
  for (const start of starts) {
    for (const length of lengths) {
      if (words.has(s.slice(start, start + length))) starts.add(start + length);
    }
  }

  return starts.has(s.length);
};