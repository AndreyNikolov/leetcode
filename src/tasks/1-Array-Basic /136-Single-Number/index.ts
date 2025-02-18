function singleNumber(nums: number[]): number {
  // base case
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

  return auxArr[0];
}
