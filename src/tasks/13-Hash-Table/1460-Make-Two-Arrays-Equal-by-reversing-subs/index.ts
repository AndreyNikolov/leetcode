function canBeEqual(target: number[], arr: number[]): boolean {
  const targetFreq: Record<number, number> = {};

  for (const num of target) {
    targetFreq[num] = (targetFreq[num] || 0) + 1;
  }

  for (const num of arr) {
    if (targetFreq[num] !== undefined && targetFreq[num] > 0) {
      targetFreq[num]--;
    } else {
      return false;
    }
  }

  return true;
}
