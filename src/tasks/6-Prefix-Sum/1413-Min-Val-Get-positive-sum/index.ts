function minStartValue(nums: number[]): number {
  let startValue = nums[0] < 0 ? Math.abs(nums[0]) + 1 : 1;
  for (let i = 1; i < nums.length; i++) {
    let newSum = nums[i] + nums[i - 1];
    nums[i] = newSum;
    if (newSum < 0 && Math.abs(newSum) >= startValue) {
      startValue = Math.abs(newSum) + 1;
    }
  }

  return startValue;
}
