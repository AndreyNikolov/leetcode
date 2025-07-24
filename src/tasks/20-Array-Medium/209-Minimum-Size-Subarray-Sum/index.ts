function minSubArrayLen(target: number, nums: number[]): number {
  let result = Infinity;

  let left = 0;
  let currSum = 0;
  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      result = Math.min(result, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }

  return result !== Infinity ? result : 0;
}
