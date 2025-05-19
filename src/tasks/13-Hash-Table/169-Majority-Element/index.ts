function majorityElement(nums: number[]): number {
  let hash: Record<number, number> = {};

  let max = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    let currCount = (hash[curr] || 0) + 1;
    hash[curr] = currCount;
    if (currCount > maxCount) {
      maxCount = currCount;
      max = curr;
    }
  }
  return max;
}
