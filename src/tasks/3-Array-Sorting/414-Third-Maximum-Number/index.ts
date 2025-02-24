function thirdMax(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let first = null;
  let second = null;
  let third = null;

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];

    if (curr === first || curr === second || curr === third) {
      continue;
    }

    if (first === null || first < curr) {
      third = second;
      second = first;
      first = curr;
    } else if (second === null || second < curr) {
      third = second;
      second = curr;
    } else if (third === null || third < curr) {
      third = curr;
    }
  }

  return third !== null ? third : first!;
}
