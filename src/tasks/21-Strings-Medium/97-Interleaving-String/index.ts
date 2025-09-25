function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) return false;

  const cache = new Map();
  // s3 index = s1 index + s2 index
  function dfs(i: number, j: number): boolean {
    if (i === s1.length && j === s2.length) return true;
    const cacheKey = `${i}-${j}`;
    if (cache.has(cacheKey)) return cache.get(cacheKey);

    if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
    if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;

    cache.set(cacheKey, false);
    return false;
  }
  return dfs(0, 0);
}
