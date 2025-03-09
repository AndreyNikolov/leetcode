function longestAlternatingSubarray(nums: number[], threshold: number): number {
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    if (nums[i] % 2 === 0 && nums[i] <= threshold) {
      //start a sequence
      count = 1;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] % 2 === nums[j - 1] % 2 || nums[j] > threshold) {
          break;
        }
        count++;
      }
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
