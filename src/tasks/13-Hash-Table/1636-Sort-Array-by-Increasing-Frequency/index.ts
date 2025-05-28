function frequencySort(nums: number[]): number[] {
  const freq = new Map();

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const result = [];

  const sortedMap = Array.from(freq.entries()).sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];

    return a[1] - b[1];
  });

  for (let [key, freq] of sortedMap) {
    while (freq > 0) {
      result.push(key);
      freq--;
    }
  }

  return result;

  // return sortedMap.flatMap(([key, freq]) => new Array(freq).fill(key));
}
