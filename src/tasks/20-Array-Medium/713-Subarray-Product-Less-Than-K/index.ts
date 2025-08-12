function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0;
  let left = 0;
  let product = 1;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k && left <= right) {
      product /= nums[left];
      left++;
    }

    result += right - left + 1;
  }

  return result;
}
