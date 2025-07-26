function coinChange(coins: number[], amount: number): number {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const coin = coins[j];
      if (coin <= i) {
        dp[i] = Math.min(1 + dp[i - coin], dp[i]);
      }
    }
  }
  const result = dp[amount];
  return result !== Infinity ? result : -1;
  /*
    const memo: Record<number, number> = {};

    function dfs(rem: number): number {
        if (rem < 0) return Infinity; // invalid path
        if (rem === 0) return 0;      // base case
        if (memo[rem] !== undefined) return memo[rem];

        let minCoins = Infinity;
        for (const coin of coins) {
            const res = dfs(rem - coin);
            if (res !== Infinity) {
                minCoins = Math.min(minCoins, 1 + res);
            }
        }

        memo[rem] = minCoins;
        return minCoins;
    }

    const result = dfs(amount);
    return result === Infinity ? -1 : result;
    */
}
