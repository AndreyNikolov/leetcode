/* Naive solution

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    j = i + 1;
    while (j < nums.length) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
      j++;
    }
  }
  return false;
}
  */

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (right - left > k) {
      window.delete(nums[left]);
      left += 1;
    }
    if (window.has(nums[right])) {
      return true;
    }

    window.add(nums[right]);
  }
  return false;
}
