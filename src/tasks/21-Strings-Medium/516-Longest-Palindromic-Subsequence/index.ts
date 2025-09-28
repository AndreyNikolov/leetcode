function longestPalindromeSubseq(s: string): number {
  const cache: Record<string, number> = {};

  function dfs(left: number, right: number): number {
    if (left > right) return 0;
    if (left === right) return 1;

    const cacheKey = `${left}-${right}`;
    if (cacheKey in cache) return cache[cacheKey];

    if (s[left] === s[right]) {
      cache[cacheKey] = 2 + dfs(left + 1, right - 1);
    } else {
      cache[cacheKey] = Math.max(dfs(left + 1, right), dfs(left, right - 1));
    }

    return cache[cacheKey];
  }

  return dfs(0, s.length - 1);
}
