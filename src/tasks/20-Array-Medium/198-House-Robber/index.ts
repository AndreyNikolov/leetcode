function rob(nums: number[]): number {
  let rob1 = 0;
  let rob2 = 0;

  for (const house of nums) {
    const newRob = Math.max(rob1 + house, rob2);
    rob1 = rob2;
    rob2 = newRob;
  }

  return rob2;

  if (nums.length === 1) return nums[0];

  const dp = new Array(nums.length).fill(0);
  dp[nums.length - 1] = nums[nums.length - 1];
  dp[nums.length - 2] = nums[nums.length - 2];

  for (let i = nums.length - 3; i >= 0; i--) {
    dp[i] =
      nums[i] + Math.max(dp[i + 2] ? dp[i + 2] : 0, dp[i + 3] ? dp[i + 3] : 0);
  }
  return Math.max(dp[0], dp[1]);

  /*
    const cache = {};

    function dfs(i) {
        if (i === nums.length - 1) return nums[i]
        if (i >= nums.length) return 0;

        const path1 = cache[i + 2] ? cache[i + 2] : dfs(i + 2);
    
        const path2 = cache[i + 3] ? cache[i + 3] : dfs(i + 3);

        return nums[i] + Math.max(path1, path2);
    }

    return Math.max(dfs(0), dfs(1))
    */
}
