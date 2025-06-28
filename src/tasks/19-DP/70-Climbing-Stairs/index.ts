function climbStairs(n: number): number {
  const cache: Record<number, number> = {};

  function helper(n: number): number {
    // if (n < 0) return 0;
    // if (n === 0) return 1;
    if (n <= 3) return n;
    if (!cache[n]) {
      cache[n] = helper(n - 1) + helper(n - 2);
    }

    return cache[n];
  }

  return helper(n);
}

function climbStairsDP(n: number): number {
  let one = 1;
  let two = 2;
  if (n === 1) return one;
  if (n === 2) return two;
  for (let i = 3; i <= n; i++) {
    const temp = one + two;
    one = two;
    two = temp;
  }
  return one;
}
