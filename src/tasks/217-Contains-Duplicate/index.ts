function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (set.has(current)) return true;
    set.add(current);
  }
  return false;
}

function containsDuplicateSet(nums: number[]): boolean {
  const set = new Set(nums);

  return set.size !== nums.length;
}
