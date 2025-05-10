function maxSubsequence(nums: number[], k: number): number[] {
  const sortedWithPositions = nums
    .map((el, index) => [el, index])
    .sort((a, b) => b[0] - a[0]);
  const result = [];
  while (k > 0) {
    result.push(sortedWithPositions.shift());
    k--;
  }
  return result.sort((a, b) => a![1] - b![1]).map((el) => el![0]);
}
