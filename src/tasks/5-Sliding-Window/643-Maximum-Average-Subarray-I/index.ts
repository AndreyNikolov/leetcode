function findMaxAverage(nums: number[], k: number): number {
  let maxSum = -Infinity;
  let currentSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];
    if (right - left > k - 1) {
      currentSum -= nums[left];
      left++;
    }
    if (right - left === k - 1) {
      maxSum = Math.max(currentSum, maxSum);
    }
  }

  return maxSum / k;
}
