function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;

  const countArr = new Array(n + 1)
    .fill(0)
    .map((count, number) => [count, number]);

  for (let i = 0; i < nums.length; i++) {
    countArr[nums[i]][0]++;
  }

  return countArr
    .slice(1)
    .filter((el) => el[0] === 0)
    .map((el) => el[1]);
}
