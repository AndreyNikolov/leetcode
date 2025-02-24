function largestPerimeter(nums: number[]): number {
  // triangle inequality thorem - two sides must add up to be greater than the third side
  /* naive solution
    let largestPerimeter = 0;
    const sortedNums = nums.sort((a, b) => a - b)
    for (let i=0; i<sortedNums.length;i++) {
        const num1 = sortedNums[i];
        for (let j = i +1; j < nums.length; j++) {
            const num2 = sortedNums[j];
            for (let k = j + 1; k<nums.length; k++) {
                const num3 = sortedNums[k];
                if (num1 + num2 > num3 && num1 + num2 + num3 > largestPerimeter) {
                    largestPerimeter = num1 + num2 + num3;
                }
            }
        }
    }

    return largestPerimeter;
    */
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = sortedNums.length - 1; i >= 2; i--) {
    const num1 = sortedNums[i];
    const num2 = sortedNums[i - 1];
    const num3 = sortedNums[i - 2];
    if (num1 < num2 + num3) {
      return num1 + num2 + num3;
    }
  }

  return 0;
}
