function maxFrequencyElements(nums: number[]): number {
  const freqMap = new Map();

  let maxFreq = 0;
  for (let num of nums) {
    const newFreq = (freqMap.get(num) || 0) + 1;
    freqMap.set(num, newFreq);
    if (newFreq > maxFreq) {
      maxFreq = newFreq;
    }
  }

  let result = 0;
  for (let count of freqMap.values()) {
    if (count === maxFreq) {
      result += count;
    }
  }

  return result;
}
