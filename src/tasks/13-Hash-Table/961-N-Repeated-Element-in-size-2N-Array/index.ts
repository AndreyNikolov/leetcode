function repeatedNTimes(nums: number[]): number {
  const uniques = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (uniques.has(nums[i])) return nums[i];
    uniques.add(nums[i]);
  }

  return -1;
}
