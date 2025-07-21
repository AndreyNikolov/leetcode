function findMin(nums: number[]): number {
  let currentMin = Infinity;
  let [l, r] = [0, nums.length - 1];

  while (l < r) {
    const mid = Math.trunc((l + r) / 2);
    currentMin = Math.min(currentMin, nums[mid]);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return Math.min(currentMin, nums[l]);
}
