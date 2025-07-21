function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (!numSet.has(curr - 1)) {
      let sequence = 1;
      while (numSet.has(curr + sequence)) {
        sequence++;
      }
      result = Math.max(result, sequence);
    }
  }

  return result;
}
