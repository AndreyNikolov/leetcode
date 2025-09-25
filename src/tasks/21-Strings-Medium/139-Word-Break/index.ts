function wordBreakRightToLeft(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);

  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    for (let word of wordSet) {
      if (i + word.length <= n && s.slice(i, i + word.length) === word) {
        if (dp[i + word.length]) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[0];
}
