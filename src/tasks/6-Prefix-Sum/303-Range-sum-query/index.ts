class NumArray {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    for (let i = 1; i < nums.length; i++) {
      this.nums[i] = this.nums[i] + this.nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.nums[right];

    return this.nums[right] - this.nums[left - 1];
  }
}
