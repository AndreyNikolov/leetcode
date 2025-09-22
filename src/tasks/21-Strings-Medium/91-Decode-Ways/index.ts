function numDecodings(s: string): number {
  const memo: Map<number, number> = new Map();

  function dfs(i: number): number {
    // Base case: reached end of string → valid decoding
    if (i === s.length) return 1;

    // Leading zero → invalid path
    if (s[i] === "0") return 0;

    // If already computed, return cached result
    if (memo.has(i)) return memo.get(i)!;

    // Option 1: take one digit
    let ways = dfs(i + 1);

    // Option 2: take two digits (if valid 10–26)
    if (i + 1 < s.length) {
      const twoDigit = parseInt(s.substring(i, i + 2), 10);
      if (twoDigit >= 10 && twoDigit <= 26) {
        ways += dfs(i + 2);
      }
    }

    memo.set(i, ways);
    return ways;
  }

  return dfs(0);
}
