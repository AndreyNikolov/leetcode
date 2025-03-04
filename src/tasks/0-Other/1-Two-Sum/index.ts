function twoSum(nums: number[], target: number): number[] | undefined {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const search = target - nums[i];
    if (map.has(search)) {
      return [map.get(search), i];
    }
    map.set(nums[i], i);
  }
}

function twoSumBrute(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
