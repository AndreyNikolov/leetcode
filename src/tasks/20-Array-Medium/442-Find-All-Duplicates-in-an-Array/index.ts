function findDuplicates(nums: number[]): number[] {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    const n = Math.abs(nums[i]);
    if (nums[n - 1] < 0) {
      res.push(n);
    }
    nums[n - 1] *= -1;
  }
  return res;
}
