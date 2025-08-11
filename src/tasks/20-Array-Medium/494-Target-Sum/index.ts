function findTargetSumWays(nums: number[], target: number): number {
  const cache: Record<string, number> = {};
  function dfs(index: number, sum: number): number {
    const cacheKey = `${index}-${sum}`;

    if (cacheKey in cache) return cache[cacheKey];

    if (index === nums.length) return sum === target ? 1 : 0;

    const result =
      dfs(index + 1, sum + nums[index]) + dfs(index + 1, sum - nums[index]);
    cache[cacheKey] = result;

    return result;
  }

  return dfs(0, 0);
}
