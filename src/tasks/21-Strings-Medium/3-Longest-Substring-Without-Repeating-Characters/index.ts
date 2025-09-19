function lengthOfLongestSubstring(s: string): number {
  const uniques = new Set();
  let result = 0;

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const curr = s[right];
    while (uniques.has(curr)) {
      uniques.delete(s[left]);
      left++;
    }

    uniques.add(curr);
    result = Math.max(result, uniques.size);
  }

  return result;
}
