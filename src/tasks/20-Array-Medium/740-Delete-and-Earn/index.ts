function deleteAndEarn(nums: number[]): number {
  const count = new Map();
  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], (count.get(nums[i]) || 0) + 1);
  }
  let uniques = [...new Set(nums)].sort((a, b) => a - b);

  let earn1 = 0;
  let earn2 = 0;

  for (let j = 0; j < uniques.length; j++) {
    const currEarn = uniques[j] * count.get(uniques[j]);
    if (j > 0 && uniques[j] === uniques[j - 1] + 1) {
      const tmp = earn2;
      earn2 = Math.max(currEarn + earn1, earn2);
      earn1 = tmp;
    } else {
      const tmp = earn2;
      earn2 = currEarn + earn2;
      earn1 = tmp;
    }
  }

  return earn2;
}
