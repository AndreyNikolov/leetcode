function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const partition: number[] = [];

  function backtrack(i: number): void {
    // base case
    if (i >= nums.length) {
      result.push([...partition]);
      return;
    }
    // decision to include nums[i]
    partition.push(nums[i]);
    backtrack(i + 1);

    //decision NOT to include nums[i]
    partition.pop();
    backtrack(i + 1);
  }
  backtrack(0);
  return result;
}
