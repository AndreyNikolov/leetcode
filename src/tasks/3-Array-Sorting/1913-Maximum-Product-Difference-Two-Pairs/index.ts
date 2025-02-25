function maxProductDifference(nums: number[]): number {
  /* naive
    nums.sort((a, b) => a - b)

    const minPairProduct = nums[0] * nums[1]
    const maxPairProduct = nums[nums.length - 1] * nums[nums.length - 2]
    return maxPairProduct - minPairProduct
    */

  let biggest = 0;
  let secondBiggest = 0;

  let lowest = Infinity;
  let secondLowest = Infinity;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    if (biggest < current) {
      secondBiggest = biggest;
      biggest = current;
    } else if (secondBiggest < current) {
      secondBiggest = current;
    }

    if (lowest > current) {
      secondLowest = lowest;
      lowest = current;
    } else if (secondLowest > current) {
      secondLowest = current;
    }
  }

  return biggest * secondBiggest - lowest * secondLowest;
}
