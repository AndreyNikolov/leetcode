function minimumOperations(nums: number[]): number {
  return new Set(nums.filter((num) => num !== 0)).size;

  /*
    let operations = 0;
    while (true) {
        let nonZeros = nums.filter(el => el > 0)
        if (!nonZeros.length) break
        const minEl = Math.min(...nonZeros);

        operations++;
        for (let i = 0; i<nums.length; i++) {
            if (nums[i] > 0) nums[i] -= minEl
        }
    }

    return operations;
    */
}
