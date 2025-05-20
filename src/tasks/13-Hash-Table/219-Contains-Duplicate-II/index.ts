function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  if (nums.length === 1 || k === 0) return false;

  const currWindow = new Set();

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (left + right > k) {
      currWindow.delete(nums[left]);
      left++;
    }
    if (currWindow.has(nums[right])) return true;

    currWindow.add(nums[right]);
    right++;
  }

  return false;
}
