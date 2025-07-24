function containsNearbyDuplicate2(nums: number[], k: number): boolean {
  let left = 0;
  const seen = new Set();

  for (let right = 0; right < nums.length; right++) {
    const curr = nums[right];

    if (right - left > k) {
      seen.delete(nums[left]);
      left++;
    }

    if (seen.has(curr)) return true;
    seen.add(curr);
  }

  return false;
}
