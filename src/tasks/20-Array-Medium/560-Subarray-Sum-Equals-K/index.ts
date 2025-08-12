function subarraySum(nums: number[], k: number): number {
  let result = 0;
  let currSum = 0;
  const prefixes = new Map();
  prefixes.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    if (prefixes.has(currSum - k)) {
      result += prefixes.get(currSum - k);
    }
    prefixes.set(currSum, (prefixes.get(currSum) || 0) + 1);
  }

  return result;
}
