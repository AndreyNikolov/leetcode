function largestNumber(nums: number[]): string {
    nums.sort((a, b) => {
        if (`${a}${b}` > `${b}${a}`) return -1;
        if (`${a}${b}` < `${b}${a}`) return 1;

        return 0
    })
   

    return nums.reduce((acc, val) => `${acc}${val}`,'').replace(/^0+/, "0")
};