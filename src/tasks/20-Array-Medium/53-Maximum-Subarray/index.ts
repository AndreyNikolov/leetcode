function maxSubArray(nums: number[]): number {
    let result = -Infinity;
    let left = 0;

    let currentSum = 0
    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        result = Math.max(currentSum, result);

        while(currentSum < 0) {
            currentSum-= nums[left]
            left++
        }
    }
    return result;
};