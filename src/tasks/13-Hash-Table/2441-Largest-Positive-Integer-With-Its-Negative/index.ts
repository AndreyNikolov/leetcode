function findMaxK(nums: number[]): number {
  let result = -1;
  const uniques = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (uniques.has(-nums[i])) {
      result = Math.max(result, Math.max(nums[i], -nums[i]));
    }
  }

  return result;
}
