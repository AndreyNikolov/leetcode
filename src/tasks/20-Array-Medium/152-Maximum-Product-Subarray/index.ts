function maxProduct(nums: number[]): number {
    let [res, curMin, curMax] = [nums[0], 1, 1];

    for (const n of nums) {
        const prevMax = curMax;
        curMax = Math.max(n, n * curMax, n * curMin);
        curMin = Math.min(n, n * prevMax, n * curMin);
        res = Math.max(res, curMax);
    }

    return res;
};