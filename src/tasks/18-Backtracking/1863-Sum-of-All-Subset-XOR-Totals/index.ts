function subsetXORSum(nums: number[]): number {
  let result = 0;
  const partition: number[] = [];

  function backtrack(i: number) {
    if (i === nums.length) {
      result += partition.reduce((acc, val) => acc ^ val, 0);
      return;
    }

    partition.push(nums[i]);
    backtrack(i + 1);

    partition.pop();
    backtrack(i + 1);
  }

  backtrack(0);

  return result;
}

function subsetXORSum2(nums: number[]): number {
  function dfs(i: number, total: number): number {
    if (i === nums.length) {
      return total;
    }

    return dfs(i + 1, total ^ nums[i]) + dfs(i + 1, total);
  }

  return dfs(0, 0);
}
