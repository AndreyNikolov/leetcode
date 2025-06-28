function fib(n: number): number {
  const cache: Record<number, number> = {};
  function helper(num: number): number {
    if (num <= 1) return num;

    if (cache[num]) return cache[num];
    cache[num] = helper(num - 1) + helper(num - 2);

    return cache[num];
  }
  return helper(n);
}
