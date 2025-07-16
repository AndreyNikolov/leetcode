function divisorGame(n: number): boolean {
    const dp = new Array(n + 1).fill(false);

    // base case: dp[1] = false (no valid move)
    dp[0] = false;
    dp[1] = false;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= Math.floor(i / 2); j++) {
            if (i % j === 0 && dp[i - j] === false) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}