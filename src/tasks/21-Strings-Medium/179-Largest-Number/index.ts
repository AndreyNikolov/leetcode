function largestNumber2(nums: number[]): string {
  const result = nums
    .sort((a, b) => {
      if (`${a}${b}` > `${b}${a}`) return -1;
      if (`${a}${b}` < `${b}${a}`) return 1;

      return 0;
    })
    .join("");

  return result[0] === "0" ? "0" : result;
}
