function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result: [number[], number[]] = [[], []];

  for (const num of set1) {
    if (!set2.has(num)) result[0].push(num);
  }

  for (const num of set2) {
    if (!set1.has(num)) result[1].push(num);
  }

  return result;
}
