function missingNumber(nums: number[]): number {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result += i + 1 - nums[i];
  }

  return result;
}
