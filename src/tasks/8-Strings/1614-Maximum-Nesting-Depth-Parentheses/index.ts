function maxDepth(s: string): number {
  let nestedCount = 0;
  let maxNested = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      nestedCount++;
      maxNested = Math.max(maxNested, nestedCount);
    } else if (s[i] === ")") {
      nestedCount--;
    }
  }

  return maxNested;
}
