function rob2(nums: number[]): number {
  function helper(nums: number[]): number {
    let rob1 = 0;
    let rob2 = 0;

    for (const house of nums) {
      const newRob = Math.max(rob1 + house, rob2);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  }

  return Math.max(nums[0], helper(nums.slice(0, -1)), helper(nums.slice(1)));
}
