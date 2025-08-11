function findMaxLength(nums: number[]): number {
  let zero = 0;
  let one = 0;
  let res = 0;

  const diffIndex: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (n === 0) {
      zero++;
    } else {
      one++;
    }

    const diff = one - zero;

    if (!(diff in diffIndex)) {
      diffIndex[diff] = i;
    }

    if (one === zero) {
      res = one + zero;
    } else {
      const idx = diffIndex[diff];
      res = Math.max(res, i - idx);
    }
  }

  return res;
}
