function longestOnes(nums: number[], k: number): number {
  let maxWindow = 0;
  let numZeroes = 0;

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      numZeroes += 1;
    }

    while (numZeroes > k) {
      if (nums[left] === 0) numZeroes -= 1;
      left++;
    }

    maxWindow = Math.max(maxWindow, right - left + 1);
  }

  return maxWindow;
}
