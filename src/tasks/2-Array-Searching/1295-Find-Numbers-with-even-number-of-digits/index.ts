function findNumbers(nums: number[]): number {
  return nums.filter((el) => el.toString().length % 2 === 0).length;
}
