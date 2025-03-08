function minimumDifference(nums: number[], k: number): number {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let minimumDifference = Infinity;
  let left = 0;
  let right = k - 1;

  while (right < nums.length) {
    minimumDifference = Math.min(
      minimumDifference,
      Math.abs(nums[left] - nums[right])
    );
    left++;
    right++;
  }

  return minimumDifference;
}
