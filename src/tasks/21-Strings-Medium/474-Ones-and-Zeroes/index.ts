function findMaxForm(strs: string[], m: number, n: number): number {
  const cache: Record<string, number> = {};
  function dfs(m: number, n: number, i: number): number {
    const cacheKey = `${m}-${n}-${i}`;
    if (i === strs.length) return 0;
    if (cacheKey in cache) return cache[cacheKey];

    const mCount = strs[i].replaceAll("1", "").length;
    const nCount = strs[i].length - mCount;

    cache[cacheKey] = dfs(m, n, i + 1);

    if (mCount <= m && nCount <= n) {
      cache[cacheKey] = Math.max(
        1 + dfs(m - mCount, n - nCount, i + 1),
        cache[cacheKey]
      );
    }

    return cache[cacheKey];
  }

  return dfs(m, n, 0);
}
