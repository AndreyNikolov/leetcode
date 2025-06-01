function getFirstGreaterOrEqual(nums: number[], val: number): number {
  let start = 0;
  let end = nums.length - 1;
  let index = nums.length;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] >= val) {
      index = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return index;
}

function specialArray(nums: number[]): number {
  nums.sort((a, b) => a - b);

  const n = nums.length;
  for (let i = 1; i <= n; i++) {
    const k = getFirstGreaterOrEqual(nums, i);
    if (n - k === i) {
      return i;
    }
  }

  return -1;
}
