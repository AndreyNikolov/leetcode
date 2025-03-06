function divisorSubstrings(num: number, k: number): number {
  let result = 0;
  let nums = num.toString().split("");
  let left = 0;

  for (let right = k; right <= nums.length; right++) {
    let subArr = nums.slice(left, right);
    const subNumber = Number.parseInt(subArr.join(""));
    if (num % subNumber === 0) {
      result += 1;
    }
    left += 1;
  }

  return result;
}
