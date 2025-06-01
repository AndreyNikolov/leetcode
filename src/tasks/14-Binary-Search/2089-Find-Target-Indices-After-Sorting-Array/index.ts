function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  const result = [];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) right = mid - 1;
    else left = mid + 1;
  }

  for (let i = left; i < nums.length; i++) {
    if (nums[i] !== target) break;
    result.push(i);
  }

  return result;
}
