function singleNumber(nums: number[]): number {
  // base case
  /*
  if (nums.length === 1) {
    return nums[0];
  }

  const auxArr = [];

  for (let i = 0; i < nums.length; i++) {
    const el = nums[i];
    const auxIndex = auxArr.indexOf(el);
    if (auxIndex === -1) {
      auxArr.push(el);
    } else {
      auxArr.splice(auxIndex, 1);
    }
  }

  return auxArr[0];*/

  if (nums.length === 1) return nums[0];

  let uniques = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (uniques.has(nums[i])) {
      uniques.delete(nums[i]);
    } else {
      uniques.add(nums[i]);
    }
  }

  return [...uniques][0];
}
